// One-shot proof that the laptop-layer pipeline works and how fast it is:
//   mp3 (simulated mic capture) -> ElevenLabs STT -> NiceSpeak corporatize -> ElevenLabs TTS
// Usage: ELEVENLABS_API_KEY=... node scripts/realtime-corporatize-test.mjs [input.mp3]
// The key is read from the environment only; never hardcode it here.
import { readFile, writeFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";

const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY;
const REWRITE_URL = process.env.NICESPEAK_API_URL ?? "https://api.nicespeak.ai";
const INPUT = process.argv[2] ?? "/Users/edbertchan/Downloads/elevenlabs_translation_test_harsh_voice.mp3";
const OUTPUT = process.argv[3] ?? "/tmp/nicespeak-corporatized.mp3";
const VOICE_NAME = "NiceSpeak Realtime Test";
const STOCK_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // Rachel, used only if cloning is unavailable

if (!ELEVEN_KEY) {
  console.error("ELEVENLABS_API_KEY is required in the environment.");
  process.exit(1);
}

const seconds = (ms) => `${(ms / 1000).toFixed(2)}s`;
const stages = [];
async function stage(name, fn) {
  const start = performance.now();
  const result = await fn();
  const ms = performance.now() - start;
  stages.push({ name, ms });
  console.log(`[${name}] ${seconds(ms)}`);
  return result;
}

async function elevenFetch(path, init) {
  const response = await fetch(`https://api.elevenlabs.io${path}`, {
    ...init,
    headers: { "xi-api-key": ELEVEN_KEY, ...(init.headers ?? {}) }
  });
  return response;
}

const audio = await readFile(INPUT);
console.log(`input: ${INPUT} (${audio.byteLength} bytes)`);

// 1. Speech-to-text: what the harsh voice actually said.
const transcript = await stage("speech-to-text (scribe_v1)", async () => {
  const form = new FormData();
  form.append("file", new Blob([audio], { type: "audio/mpeg" }), "input.mp3");
  form.append("model_id", "scribe_v1");
  const response = await elevenFetch("/v1/speech-to-text", { method: "POST", body: form });
  if (!response.ok) throw new Error(`STT failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
  return (await response.json()).text;
});
console.log(`  heard: ${JSON.stringify(transcript)}`);

// 2. Corporatize through the real shipped rewrite path.
const corporate = await stage("corporatize (NiceSpeak /v1/rewrite)", async () => {
  const response = await fetch(`${REWRITE_URL}/v1/rewrite`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: transcript })
  });
  if (!response.ok) throw new Error(`rewrite failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
  return (await response.json()).replacement;
});
console.log(`  corporate: ${JSON.stringify(corporate)}`);

// 3. Voice: reuse the cloned test voice if it exists, otherwise clone from the
// sample. 401/403 means this account has no cloning entitlement — say so and
// fall back to a stock voice instead of pretending.
const clonedVoiceId = await stage("voice clone (instant, from sample)", async () => {
  const list = await elevenFetch("/v1/voices", { method: "GET" });
  if (list.ok) {
    const { voices = [] } = await list.json();
    const existing = voices.find((voice) => voice.name === VOICE_NAME);
    if (existing) return existing.voice_id;
  }
  const form = new FormData();
  form.append("name", VOICE_NAME);
  form.append("files", new Blob([audio], { type: "audio/mpeg" }), "sample.mp3");
  const response = await elevenFetch("/v1/voices/add", { method: "POST", body: form });
  if (response.status === 401 || response.status === 403) {
    console.log(`  cloning unavailable for this account (${response.status}): ${(await response.text()).slice(0, 200)}`);
    return null;
  }
  if (!response.ok) throw new Error(`clone failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
  return (await response.json()).voice_id;
});
const voiceId = clonedVoiceId ?? STOCK_VOICE_ID;
console.log(clonedVoiceId ? `  voice: cloned ${clonedVoiceId}` : `  voice: stock ${STOCK_VOICE_ID}`);

// 4. Speak the corporate line, lowest-latency model, timing first byte too.
await stage("text-to-speech (eleven_flash_v2_5)", async () => {
  const start = performance.now();
  const response = await elevenFetch(`/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: corporate, model_id: "eleven_flash_v2_5" })
  });
  if (!response.ok) throw new Error(`TTS failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
  const reader = response.body.getReader();
  const chunks = [];
  let firstByteMs = null;
  for (;;) {
    const { done, value } = await reader.read();
    if (value && firstByteMs === null) firstByteMs = performance.now() - start;
    if (done) break;
    chunks.push(value);
  }
  console.log(`  time to first audio byte: ${seconds(firstByteMs ?? 0)}`);
  await writeFile(OUTPUT, Buffer.concat(chunks));
});

const total = stages.reduce((sum, item) => sum + item.ms, 0);
console.log(`\ntotal pipeline: ${seconds(total)}`);
console.log(`output: ${OUTPUT}`);
