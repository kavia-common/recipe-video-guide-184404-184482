# recipe-video-guide-184404-184482

Recipe video app (frontend) powered by Remotion.

Quick start:
- cd recipe_app_frontend
- npm i
- npm run dev
- Open the Studio at the provided URL (defaults to port 3000). Choose the "RecipeAppUI" composition to preview the interactive app shell.

Environment variables (optional, graceful fallback provided):
- REMOTION_API_BASE
- REMOTION_BACKEND_URL
- REMOTION_FRONTEND_URL
- REMOTION_WS_URL
- REMOTION_NODE_ENV
- REMOTION_NEXT_TELEMETRY_DISABLED
- REMOTION_ENABLE_SOURCE_MAPS
- REMOTION_PORT (defaults to 3000)
- REMOTION_TRUST_PROXY
- REMOTION_LOG_LEVEL
- REMOTION_HEALTHCHECK_PATH
- REMOTION_FEATURE_FLAGS
- REMOTION_EXPERIMENTS_ENABLED

Demo assets:
- Place a demo video at `recipe_app_frontend/public/assets/demo.mp4` (or keep existing if already present).
- Optionally add `recipe_app_frontend/public/assets/placeholder-thumb.jpg` for thumbnails.

Selecting a recipe updates the URL query string (?recipe=<id>) and updates the video and details panel.