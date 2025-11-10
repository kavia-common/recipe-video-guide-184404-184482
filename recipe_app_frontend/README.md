# Remotion video

This container now includes a Recipe App UI using the Ocean Professional theme.

How to run:
- npm i
- npm run dev
- Open the Studio (port defaults to 3000). Select "RecipeAppUI" to preview the interactive frontend (left recipe list, right video and details).

Assets:
- Put a demo mp4 at public/assets/demo.mp4
- Optionally add a thumbnail at public/assets/placeholder-thumb.jpg

Environment variables (optional):
- REMOTION_PORT, REMOTION_LOG_LEVEL, REMOTION_* (see root README)
The app gracefully falls back if envs are not set.
