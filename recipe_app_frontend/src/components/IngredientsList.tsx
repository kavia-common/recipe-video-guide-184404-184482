import React from "react";
import { Ingredient } from "../data/recipes";
import { useTheme } from "../theme/ThemeProvider";

type Props = {
  items: Ingredient[];
};

// PUBLIC_INTERFACE
export const IngredientsList: React.FC<Props> = ({ items }) => {
  /** Displays a list of ingredients in a card. */
  const theme = useTheme();

  return (
    <section
      aria-label="Ingredients"
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
          Ingredients
        </h3>
      </header>
      <ul style={{ listStyle: "none", margin: 0, padding: 14, display: "grid", gap: 8 }}>
        {items.map((i, idx) => (
          <li key={`${i.name}-${idx}`} style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: theme.colors.text, fontSize: 14 }}>{i.name}</span>
            <span style={{ color: "#6B7280", fontSize: 13 }}>{i.qty}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
