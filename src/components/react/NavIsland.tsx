import React from "react";
import ThemeContextProvider from "../../context/theme-context";
import ActiveSectionContextProvider from "../../context/active-section-context";
import LanguageContextProvider from "../../context/language-context";
import type { Lang } from "../../i18n/utils";
import Header from "./header";

type NavIslandProps = {
  lang: Lang;
  pathname: string;
};

// The only part of the page that needs to be interactive immediately:
// nav clicks and the active-section highlight. Hydrated with `client:load`.
export default function NavIsland({ lang, pathname }: NavIslandProps) {
  return (
    <LanguageContextProvider lang={lang} pathname={pathname}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
