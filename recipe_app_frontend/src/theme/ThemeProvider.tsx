import React, { createContext, useContext, useMemo } from "react";

/**
 * Ocean Professional Theme tokens
 */
export type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    background: string;
    surface: string;
    text: string;
    gradientFromTo: string; // tailwind-like descriptor "from-blue-500/10 to-gray-50"
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
};

const defaultTheme: Theme = {
  name: "Ocean Professional",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
    gradientFromTo: "from-blue-500/10 to-gray-50",
  },
  radii: { sm: 6, md: 10, lg: 14, xl: 20 },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
    lg: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

// PUBLIC_INTERFACE
export const useTheme = (): Theme => {
  /** Returns the Ocean Professional theme tokens for consistent styling. */
  return useContext(ThemeContext);
};

// PUBLIC_INTERFACE
export const ThemeProvider: React.FC<{ children: React.ReactNode; themeOverride?: Partial<Theme> }> = ({
  children,
  themeOverride,
}) => {
  /**
   * Provides a theme context to children. Accepts partial overrides but defaults to Ocean Professional.
   */
  const merged = useMemo<Theme>(() => {
    return {
      ...defaultTheme,
      ...themeOverride,
      colors: {
        ...defaultTheme.colors,
        ...(themeOverride?.colors ?? {}),
      },
      radii: {
        ...defaultTheme.radii,
        ...(themeOverride?.radii ?? {}),
      },
      shadows: {
        ...defaultTheme.shadows,
        ...(themeOverride?.shadows ?? {}),
      },
    };
  }, [themeOverride]);

  return <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>;
};
