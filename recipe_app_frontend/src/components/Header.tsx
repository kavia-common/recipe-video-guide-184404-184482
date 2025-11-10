import React from "react";
import { useTheme } from "../theme/ThemeProvider";

// PUBLIC_INTERFACE
export const Header: React.FC = () => {
  /** App header with Ocean gradient accent and title */
  const theme = useTheme();
  return (
    <header
      style={{
        background: `linear-gradient(90deg, rgba(37,99,235,0.08) 0%, rgba(249,250,251,1) 100%)`,
        borderBottom: `1px solid rgba(0,0,0,0.06)`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          aria-hidden
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: theme.colors.primary,
            boxShadow: theme.shadows.md,
          }}
        />
        <div>
          <h1
            style={{
              margin: 0,
              color: theme.colors.text,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 0.3,
            }}
          >
            Ocean Recipes
          </h1>
          <p
            style={{
              margin: 0,
              color: "#6B7280",
              fontSize: 12,
            }}
          >
            Video-based step-by-step guides
          </p>
        </div>
      </div>
    </header>
  );
};
