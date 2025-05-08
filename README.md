# apple-music-js

Fetches the currently playing track in Apple Music by interfacing with macOS JXA scripting.

## System Requirements

This project requires macOS. I've only tested it on Seqouia, but it should also run on earlier versions.

## Install & Run From Source

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

_Important: Your terminal app requires "Media & Apple Music" permisions to run this project. It should ask for permission on the first run, if not please check your System Settings application under "Privacy & Security"._

## Dependencies

- [ink](https://github.com/vadimdemedes/ink)
- [JXA](https://github.com/JXA-userland/JXA)
