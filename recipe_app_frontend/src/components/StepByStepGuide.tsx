import React from "react";
import { Step } from "../data/recipes";
import { useTheme } from "../theme/ThemeProvider";

type Props = {
  steps: Step[];
};

// PUBLIC_INTERFACE
export const StepByStepGuide: React.FC<Props> = ({ steps }) => {
  /** Displays step-by-step guide with timecode chips. */
  const theme = useTheme();
  const toTime = (sec?: number) => {
    if (sec == null) return "";
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section
      aria-label="Steps"
      style={{
        background: theme.colors.surface,
        borderRadius: 16,
        boxShadow: theme.shadows.md,
        border: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          padding: "12px 14px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          background: "#fff",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: theme.colors.text, letterSpacing: 0.3 }}>
          Step-by-step Guide
        </h3>
      </header>
      <ol style={{ margin: 0, padding: 14, display: "grid", gap: 12 }}>
        {steps.map((s) => (
          <li key={s.index} style={{ display: "grid", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  background: theme.colors.primary,
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: 8,
                  padding: "4px 8px",
                  fontSize: 12,
                  boxShadow: theme.shadows.sm,
                }}
              >
                {s.index}
              </span>
              {s.timecode != null && (
                <span
                  aria-label="Timecode"
                  title="Timecode"
                  style={{
                    background: `${theme.colors.secondary}22`,
                    color: theme.colors.secondary,
                    border: `1px solid ${theme.colors.secondary}55`,
                    borderRadius: 999,
                    padding: "2px 8px",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {toTime(s.timecode)}
                </span>
              )}
            </div>
            <p style={{ margin: 0, color: theme.colors.text, fontSize: 14, lineHeight: 1.45 }}>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
