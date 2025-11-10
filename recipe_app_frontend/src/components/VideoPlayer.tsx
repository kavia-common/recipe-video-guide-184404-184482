import React, { useMemo, useRef } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { getRemotionEnv } from "../utils/env";

type Props = {
  src: string;
  title: string;
};

// PUBLIC_INTERFACE
export const VideoPlayer: React.FC<Props> = ({ src, title }) => {
  /**
   * Minimal embedded player using native <video> for preview.
   * In a future iteration, you can swap this to Remotion Player to render compositions dynamically.
   * Gracefully uses local src and ignores remote envs if not set.
   */
  const theme = useTheme();
  const videoRef = useRef<null | any>(null);

  const env = getRemotionEnv();
  const info = useMemo(() => {
    return {
      backend: env.REMOTION_BACKEND_URL ?? "local",
      ws: env.REMOTION_WS_URL ?? "local",
      port: env.REMOTION_PORT ?? "3000",
    };
  }, [env]);

  return (
    <div
      style={{
        width: "100%",
        background: theme.colors.surface,
        borderRadius: 16,
        boxShadow: theme.shadows.lg,
        border: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: 14,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: theme.colors.text }}>{title}</h3>
          <p style={{ margin: 0, color: "#6B7280", fontSize: 12 }}>
            Preview • Env: {info.backend} • Port: {info.port}
          </p>
        </div>
      </div>
      <div style={{ background: theme.colors.background }}>
        <video
          ref={videoRef}
          src={src}
          style={{ width: "100%", height: 420, display: "block", background: "#000" }}
          controls
          preload="metadata"
        />
      </div>
    </div>
  );
};
