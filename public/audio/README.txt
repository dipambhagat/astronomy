Add your licensed soundtrack file here as:

  soundtrack.mp3

The audio engine (lib/audioEngine.ts) expects exactly this path:
  /public/audio/soundtrack.mp3

This project does not include any audio file — "Innerbloom" by RÜFUS DU SOL
is a commercial copyrighted track and cannot be bundled or sourced by an
AI assistant. You'll need to own/license a copy and export it as an MP3
(or edit the src path in lib/audioEngine.ts to point at your own file/CDN).

Volume automation (components/AudioDirector.tsx) assumes a single
continuous ambient/instrumental track roughly 5-6+ minutes long, looping.
If your track's emotional beats land at different timestamps than the
creative brief describes, adjust the KEYFRAMES array in AudioDirector.tsx
to match — the current values are scroll-progress-based, not tied to
exact song timestamps, so they'll work with any track but may need
re-tuning by ear once your real file is in place.
