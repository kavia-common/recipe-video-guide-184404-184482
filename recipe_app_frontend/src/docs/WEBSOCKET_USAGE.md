This frontend does not open WebSocket connections directly.
If you enable a Remotion backend with WS, configure using:

- REMOTION_BACKEND_URL
- REMOTION_WS_URL

The current UI uses local assets for demo and gracefully falls back when env variables are not provided.
