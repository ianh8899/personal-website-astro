import React from "react";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "../../context/theme-context";
import ActiveSectionContextProvider from "../../context/active-section-context";
import LanguageContextProvider from "../../context/language-context";
import type { Lang } from "../../i18n/utils";
import Intro from "./intro";
import SectionDivider from "./section-divider";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Footer from "./footer";

type MainContentIslandProps = {
  lang: Lang;
  pathname: string;
};

export default function MainContentIsland({
  lang,
  pathname,
}: MainContentIslandProps) {
  return (
    <LanguageContextProvider lang={lang} pathname={pathname}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
          </main>

          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
