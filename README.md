# NiceSpeak Voice Relay (hackathon)

Speak angry, sound corporate — in your own cloned voice, fast enough for a live call.

You talk into your laptop mic. A Vapi pipeline (Deepgram streaming STT → Groq
llama-3.1-8b → ElevenLabs flash TTS with your instant-cloned voice) speaks the
corporate rewrite of exactly what you said. Point its output at a virtual audio
device (BlackHole 2ch) and pick that as your microphone in Zoom/Meet.

## Measured latency (you stop talking → corporate voice starts)

| Setup | Latency |
|---|---|
| Batch pipeline (REST STT → rewrite → TTS) | 4.6 s |
| Vapi, defaults (gpt-4o-mini, stock voice) | 1.9–2.2 s |
| Vapi, tuned (Groq + flash voice + tight endpointing) | **0.64–1.22 s** (median ~1.1 s, internal pipeline 0.4–0.9 s) |

Measured with a scripted Chrome whose microphone was a looping recording of a
harsh rant; timestamps from Vapi client events. Numbers include headless-browser
WebRTC overhead, so a real mic sits at or below them.

## Pieces

- `relay/index.html` — the laptop wrapper. Start button, live transcript,
  output-device picker (auto-selects BlackHole when present).
- `bench/index.html` — the latency bench page (same call, event log in
  `window.__events` for measurement).
- `scripts/realtime-corporatize-test.mjs` — standalone ElevenLabs proof:
  mp3 → STT → NiceSpeak `/v1/rewrite` → instant voice clone → TTS, with
  per-stage timings. `ELEVENLABS_API_KEY=… node scripts/realtime-corporatize-test.mjs [input.mp3]`
- `call/index.html` — the full live Zoom twin: your mic → Vapi corporatizer →
  a Simli digital twin of you (face from a webcam selfie, voice cloned from a
  30s memo) speaks the rewrite with synced lips. Audio routes to BlackHole,
  video goes to Zoom via OBS Virtual Camera. `simli-bundle.js` is prebuilt
  (`bun add simli-client && bun build simli-entry.js --outfile simli-bundle.js
  --format=esm --target=browser` to rebuild).

## Run the live Zoom twin

```bash
python3 -m http.server 8765 -d call
open "http://localhost:8765/?simliKey=YOUR_SIMLI_KEY&faceId=YOUR_FACE_ID&sink=blackhole&name=Your%20Name&autostart=1"
```

One-time setup: create a face (`POST https://api.simli.ai/faces/legacy` with a
frontal selfie), clone your voice on ElevenLabs from ~30s of speech, and point
the Vapi assistant's voice at that clone. In Zoom: mic = **BlackHole 2ch**,
camera = **OBS Virtual Camera** (OBS window-captures the call page), speaker =
headphones (required — otherwise the twin hears itself). Raise the assistant's
`silenceTimeoutSeconds` (600) or it hangs up while you set up the meeting.
Observed turn latency: ~2s from your pause to the twin speaking in-meeting.

## Tech stack

One local HTML page orchestrates everything. Your mic → **Vapi** (Deepgram
nova-3 STT → Groq `llama-3.1-8b-instant` with the NiceSpeak corporate prompt →
ElevenLabs `eleven_flash_v2_5` TTS in your cloned voice) → that reply audio
drives a **Simli** face twin (legacy face built from one webcam selfie) which
lip-syncs it in WebRTC → twin audio exits through **BlackHole 2ch** into
Zoom's mic, twin video exits through **OBS Virtual Camera** (window-capturing
the page) into Zoom's camera. No backend of our own; keys travel as URL/env
values and are never committed.

## Billing, API limits & pausing

- **Pause = close the call tab.** A live tab bills Vapi/Simli/ElevenLabs by
  the minute until it closes or the idle timers fire (Vapi silence timeout
  600s, max 3600s; Simli idle 600s, session 3600s). OBS, BlackHole, and the
  local server cost nothing while parked; restarting is reopening one URL.
- **Vapi** — per-minute billing (bundled Deepgram/Groq). The *public* key can
  start calls from any browser that has it — rotate it after the demo.
- **ElevenLabs** — monthly character quota for TTS; instant-clone voice slots
  are limited per tier. Attaching the key to Vapi requires the **User: Read**
  permission on the key.
- **Simli** — trial minutes per month; new-gen "Trinity" face creation is
  plan-gated (quota 0 on trial), so twins use the legacy `/faces/legacy` path.
- **Zoom free** — 40-minute meetings. **Loom** — file uploads are plan-gated.

## Run the relay

```bash
python3 -m http.server 8765 -d relay
open http://localhost:8765
```

Click **Start relay**, talk, pause — the corporate version speaks. For live
calls: `brew install blackhole-2ch`, pick *BlackHole 2ch* as Output in the
relay and as Microphone in your call app.

## Setup notes

- The pages embed a Vapi **public** key and assistant id (client-safe by
  design; anyone with the public key can start calls billed to the account —
  rotate it if that matters). The assistant ("NiceSpeak Corporatizer") was
  created via the Vapi API: Deepgram nova-3, Groq `llama-3.1-8b-instant`,
  ElevenLabs `eleven_flash_v2_5` with a cloned voice, and
  `startSpeakingPlan { waitSeconds: 0.05, onPunctuationSeconds: 0.1 }`.
- Attaching your ElevenLabs key as a Vapi credential requires the key to have
  the **User: Read** permission (Vapi probes `/v1/user` to validate it).
- No private keys live in this repo; the test script reads
  `ELEVENLABS_API_KEY` from the environment only.
