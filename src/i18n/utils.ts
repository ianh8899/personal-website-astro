import { ui, defaultLang, type Lang } from "./ui";

export { defaultLang, languages, type Lang } from "./ui";

/** Extract the language code from an Astro `URL` (e.g. `/nl/about` -> `nl`). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Returns a `t(key)` translation function bound to the given language.
 * Falls back to the default language if a key is missing for that language.
 */
export function useTranslations(lang: Lang) {
  return function t<K extends TranslationKey>(key: K): (typeof ui)[Lang][K] {
    return (ui[lang] as any)[key] ?? (ui[defaultLang] as any)[key];
  };
}

/** Builds the equivalent path for another language, e.g. "/" <-> "/nl/". */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  const [maybeLang] = segments;
  const hasLangPrefix = maybeLang === "en" || maybeLang === "nl";
  const rest = hasLangPrefix ? segments.slice(1) : segments;

  if (targetLang === defaultLang) {
    return "/" + rest.join("/");
  }
  return "/" + [targetLang, ...rest].join("/");
}
