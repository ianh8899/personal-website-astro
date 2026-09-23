import React from "react";
import { createStore, useStore } from "../lib/store";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const localTheme = window.localStorage.getItem("theme") as Theme | null;
  if (localTheme) return localTheme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

const themeStore = createStore<Theme>(getInitialTheme());

function applyTheme(theme: Theme) {
  window.localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function setTheme(theme: Theme) {
  themeStore.set(theme);
  applyTheme(theme);
}

function toggleTheme() {
  setTheme(themeStore.get() === "light" ? "dark" : "light");
}

// Kept as a passthrough component so existing JSX (`<ThemeContextProvider>`)
// doesn't need to change at call sites — the actual state now lives in the
// module-level store above, shared across every island that imports this file.
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  return <>{children}</>;
}

export function useTheme() {
  const theme = useStore(themeStore);

  return {
    theme,
    toggleTheme,
  };
}
