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
