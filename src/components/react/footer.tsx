import React from "react";
import { useLanguage } from "../../context/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs"></small>
      <p className="text-xs">
        <span className="font-semibold">{t("footer.aboutThisWebsite")}</span>{" "}
        {t("footer.builtWith")}
      </p>
    </footer>
  );
}
