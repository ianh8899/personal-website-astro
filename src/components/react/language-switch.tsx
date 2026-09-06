import React from "react";
import { languages, getLocalizedPath, type Lang } from "../../i18n/utils";
import { useLanguage } from "../../context/language-context";

const flags: Record<Lang, string> = {
  en: "🇬🇧",
  nl: "🇳🇱",
};

export default function LanguageSwitch() {
  const { lang, pathname } = useLanguage();

  return (
    <>
      {Object.entries(languages).map(([code]) => {
        const isActive = code === lang;
        const href = getLocalizedPath(pathname, code as Lang);

        return (
          <li className="h-full flex items-center justify-center relative" key={code}>
            <a
              className={`flex w-full items-center justify-center gap-1 px-3 py-3 hover:text-gray-950 transition dark:text-gray-100 dark:hover:text-gray-400 ${
                isActive
                  ? "text-gray-950 bg-gray-100 rounded-full dark:text-gray-200 dark:bg-gray-800"
                  : ""
              }`}
              href={href}
              aria-current={isActive ? "true" : undefined}
            >
              <span aria-hidden="true">{flags[code as Lang]}</span>
              {code.toUpperCase()}
            </a>
          </li>
        );
      })}
    </>
  );
}
