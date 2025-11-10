type RemotionEnv = {
  REMOTION_API_BASE?: string;
  REMOTION_BACKEND_URL?: string;
  REMOTION_FRONTEND_URL?: string;
  REMOTION_WS_URL?: string;
  REMOTION_NODE_ENV?: string;
  REMOTION_NEXT_TELEMETRY_DISABLED?: string;
  REMOTION_ENABLE_SOURCE_MAPS?: string;
  REMOTION_PORT?: string;
  REMOTION_TRUST_PROXY?: string;
  REMOTION_LOG_LEVEL?: string;
  REMOTION_HEALTHCHECK_PATH?: string;
  REMOTION_FEATURE_FLAGS?: string;
  REMOTION_EXPERIMENTS_ENABLED?: string;
};

// PUBLIC_INTERFACE
export const getRemotionEnv = (): RemotionEnv => {
  /**
   * Returns environment variables used by the Remotion app.
   * Since Vite/Remotion studio injects process.env for server-side, guard for undefined in browser.
   */
  const env: RemotionEnv = {
    REMOTION_API_BASE: (globalThis as any).process?.env?.REMOTION_API_BASE ?? undefined,
    REMOTION_BACKEND_URL: (globalThis as any).process?.env?.REMOTION_BACKEND_URL ?? undefined,
    REMOTION_FRONTEND_URL: (globalThis as any).process?.env?.REMOTION_FRONTEND_URL ?? undefined,
    REMOTION_WS_URL: (globalThis as any).process?.env?.REMOTION_WS_URL ?? undefined,
    REMOTION_NODE_ENV: (globalThis as any).process?.env?.REMOTION_NODE_ENV ?? undefined,
    REMOTION_NEXT_TELEMETRY_DISABLED: (globalThis as any).process?.env?.REMOTION_NEXT_TELEMETRY_DISABLED ?? "1",
    REMOTION_ENABLE_SOURCE_MAPS: (globalThis as any).process?.env?.REMOTION_ENABLE_SOURCE_MAPS ?? "0",
    REMOTION_PORT: (globalThis as any).process?.env?.REMOTION_PORT ?? "3000",
    REMOTION_TRUST_PROXY: (globalThis as any).process?.env?.REMOTION_TRUST_PROXY ?? "0",
    REMOTION_LOG_LEVEL: (globalThis as any).process?.env?.REMOTION_LOG_LEVEL ?? "info",
    REMOTION_HEALTHCHECK_PATH: (globalThis as any).process?.env?.REMOTION_HEALTHCHECK_PATH ?? "/healthz",
    REMOTION_FEATURE_FLAGS: (globalThis as any).process?.env?.REMOTION_FEATURE_FLAGS ?? "",
    REMOTION_EXPERIMENTS_ENABLED: (globalThis as any).process?.env?.REMOTION_EXPERIMENTS_ENABLED ?? "0",
  };
  return env;
};
