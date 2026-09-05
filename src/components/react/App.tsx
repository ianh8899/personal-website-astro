import React from "react";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "../../context/active-section-context";
import ThemeContextProvider from "../../context/theme-context";
import Header from "./header";
import Footer from "./footer";
import ThemeSwitch from "./theme-switch";
import Intro from "./intro";
import SectionDivider from "./section-divider";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

export default function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header />

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
        <ThemeSwitch />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
