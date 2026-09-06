import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import { useLanguage } from "../../context/language-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("about.heading")}</SectionHeading>
      <p className="mb-3">
        {t("about.paragraph1Part1")}{" "}
        <span className="font-medium">
          {t("about.paragraph1MechanicalEngineering")}
        </span>
        {t("about.paragraph1Part2")}{" "}
        <span className="font-medium">
          {t("about.paragraph1ProvenTrackRecord")}
        </span>{" "}
        {t("about.paragraph1Part3")}{" "}
        <span className="font-medium">
          {t("about.paragraph1ModernWebTechnologies")}
        </span>
        {t("about.paragraph1Part4")}{" "}
        <span className="italic">{t("about.paragraph1Maintainability")}</span>
        , {t("about.paragraph1Part5")}
      </p>
      <p>
        {t("about.paragraph2Part1")}{" "}
        <span className="italic">
          {t("about.paragraph2CookingAndTraveling")}
        </span>{" "}
        {t("about.paragraph2Part2")}{" "}
        <span className="font-medium">
          {t("about.paragraph2LearningNewThings")}
        </span>
        {t("about.paragraph2Part3")}{" "}
        <span className="font-medium">{t("about.paragraph2Dutch")}</span>
        {t("about.paragraph2Part4")}
      </p>
    </motion.section>
  );
}
