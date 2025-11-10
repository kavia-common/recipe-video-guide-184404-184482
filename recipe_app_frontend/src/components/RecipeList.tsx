import React from "react";
import { Recipe } from "../data/recipes";
import { useTheme } from "../theme/ThemeProvider";

type Props = {
  recipes: Recipe[];
  selectedId?: string;
  onSelect: (id: string) => void;
};

// PUBLIC_INTERFACE
export const RecipeList: React.FC<Props> = ({ recipes, selectedId, onSelect }) => {
  /** Displays a vertical list of recipes on the left sidebar. */
  const theme = useTheme();

  return (
    <aside
      style={{
        width: 320,
        minWidth: 260,
        height: "100%",
        overflowY: "auto",
        background: theme.colors.surface,
        borderRight: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 14,
              fontWeight: 700,
              color: theme.colors.text,
              letterSpacing: 0.4,
              textTransform: "uppercase",
            }}
          >
            Recipes
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {recipes.map((r) => {
            const selected = r.id === selectedId;
            return (
              <button
                key={r.id}
                onClick={() => onSelect(r.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: selected ? "linear-gradient(180deg, rgba(37,99,235,0.08) 0%, #fff 100%)" : "#fff",
                  borderRadius: 12,
                  padding: 10,
                  display: "flex",
                  gap: 10,
                  cursor: "pointer",
                  boxShadow: selected ? theme.shadows.md : theme.shadows.sm,
                  outline: selected ? `2px solid ${theme.colors.primary}` : "none",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 48,
                    borderRadius: 8,
                    background: `url(${r.thumbnail}) center/cover, ${theme.colors.background}`,
                    flexShrink: 0,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                  aria-hidden
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: theme.colors.text }}>{r.title}</span>
                  <span style={{ fontSize: 12, color: "#6B7280" }}>{r.duration}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
