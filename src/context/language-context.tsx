import React, { createContext, useContext, useMemo } from "react";
import { useTranslations, type Lang } from "../i18n/utils";

type LanguageContextType = {
  lang: Lang;
  pathname: string;
  t: ReturnType<typeof useTranslations>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  lang,
  pathname,
  children,
}: {
  lang: Lang;
  pathname: string;
  children: React.ReactNode;
}) {
  const t = useTranslations(lang);
  const value = useMemo(() => ({ lang, pathname, t }), [lang, pathname]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
