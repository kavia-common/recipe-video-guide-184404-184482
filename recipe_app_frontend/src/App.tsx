import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "./components/Header";
import { RecipeList } from "./components/RecipeList";
import { IngredientsList } from "./components/IngredientsList";
import { StepByStepGuide } from "./components/StepByStepGuide";
import { VideoPlayer } from "./components/VideoPlayer";
import { Recipe, getMockRecipes } from "./data/recipes";

// PUBLIC_INTERFACE
export const App: React.FC = () => {
  /**
   * Main UI layout with left recipe list and right content panel.
   * Selection persists to URL query (?recipe=<id>).
   */
  const recipes = useMemo(() => getMockRecipes(), []);
  const [selectedId, setSelectedId] = useState<string | undefined>(() => {
    const g: any = typeof globalThis !== "undefined" ? (globalThis as any) : {};
    const search: string = (g.location && g.location.search) || "";
    const USP: any = (g && g.URLSearchParams) ? g.URLSearchParams : (undefined as any);
    const sp: any = USP ? new USP(search) : { get: (_: string) => null };
    return (sp.get && sp.get("recipe")) || recipes[0]?.id;
  });

  const selected = useMemo<Recipe | undefined>(() => {
    return recipes.find((r) => r.id === selectedId) ?? recipes[0];
  }, [recipes, selectedId]);

  useEffect(() => {
    const g: any = typeof globalThis !== "undefined" ? (globalThis as any) : {};
    const loc: any = g.location;
    const hist: any = g.history;
    if (!loc || !hist) return;

    const USP: any = g.URLSearchParams;
    const sp: any = USP ? new USP(loc.search ?? "") : null;
    if (selectedId && sp && typeof sp.set === "function") {
      sp.set("recipe", selectedId);
      const url = `${loc.pathname ?? ""}?${sp.toString()}`;
      if (typeof hist.replaceState === "function") {
        hist.replaceState(null, "", url);
      }
    }
  }, [selectedId]);

  return (
    <ThemeProvider>
      <div
        style={{
          minHeight: "100vh",
          background: "#f9fafb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: 0,
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              display: "none",
            }}
            className="sidebar-collapsible"
          />
          <RecipeList recipes={recipes} selectedId={selected?.id} onSelect={setSelectedId} />
          {/* Main Content */}
          <main
            style={{
              flex: 1,
              padding: 16,
              display: "grid",
              gap: 16,
              alignContent: "start",
            }}
          >
            <VideoPlayer src={selected?.videoSrc ?? ""} title={selected?.title ?? ""} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <IngredientsList items={selected?.ingredients ?? []} />
              <StepByStepGuide steps={selected?.steps ?? []} />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
