import React from "react";
import ThemeContextProvider from "../../context/theme-context";
import ThemeSwitch from "./theme-switch";

export default function ThemeSwitchIsland() {
  return (
    <ThemeContextProvider>
      <ThemeSwitch />
    </ThemeContextProvider>
  );
}
