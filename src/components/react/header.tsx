import React from "react";
import { motion } from "framer-motion";
import { links } from "../../lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "../../context/active-section-context";
import { useLanguage } from "../../context/language-context";
import type { TranslationKey } from "../../i18n/utils";
import LanguageSwitch from "./language-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full min-h-[4.5rem] flex items-center justify-center flex-wrap rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] py-2 sm:top-6 sm:w-fit sm:max-w-[92vw] sm:min-h-0 sm:h-[3.25rem] sm:rounded-full sm:py-0 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex h-full max-w-[92vw] flex-wrap items-center justify-center gap-y-1 gap-x-1 px-4 text-[0.9rem] font-medium text-gray-500 sm:max-w-none sm:flex-nowrap sm:gap-5 sm:px-0">
          {links.map((link) => (
            <motion.li
              className="h-full flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-100 dark:hover:text-gray-400",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(`nav.${link.hash.slice(1)}` as TranslationKey)}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}

          <li
            aria-hidden="true"
            className="hidden sm:block h-5 w-px bg-gray-300 dark:bg-gray-700"
          ></li>

          <LanguageSwitch />
        </ul>
      </motion.nav>
    </header>
  );
}
