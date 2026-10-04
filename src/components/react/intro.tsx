import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { RiSpeakAiLine } from "react-icons/ri";
import { useSectionInView } from "../../lib/hooks";
import { useLanguage } from "../../context/language-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="anim-pop">
            <img
              src="/IMG20230816102914.jpg"
              alt="Ian Hitchman"
              width={192}
              height={192}
              fetchPriority="high"
              decoding="async"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
        </div>
      </div>

      <h1
        className="anim-fade-up mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">{t("intro.greeting")}</span>{" "}
        <span className="font-bold">{t("intro.role")}</span>{" "}
        <span className="font-bold"></span>
        {t("intro.enjoyBuilding")}{" "}
        <span className="italic">{t("intro.sitesAndApps")}</span>
      </h1>

      <div
        className="anim-fade-up anim-delay-100 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          href="/Ian_Hitchman_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("intro.downloadCV")}{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ianhitchman/"
          target="_blank"
          aria-label={t("intro.linkedinLabel")}
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ianh8899"
          target="_blank"
          aria-label={t("intro.githubLabel")}
        >
          <FaGithubSquare />
        </a>
      </div>
      <div className="anim-fade-up anim-delay-100 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4">
        <span
          className="anim-glow-border bg-white dark:bg-gray-900"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a
            className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-100 active:scale-105 transition dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
            href="https://interview-me.ianhitchman.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("intro.interviewMe")}{" "}
            <RiSpeakAiLine className="opacity-70 group-hover:translate-y-1 transition" />
          </a>
        </span>
      </div>
      <div
        aria-hidden={!showTooltip}
        className={`absolute px-2 py-2 mt-4 bg-black rounded-3xl shadow-lg transition-[opacity,visibility,translate] duration-800 ease-out motion-reduce:transition-none ${showTooltip
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0"
          }`}
      >
        <span className="text-gray-200">{t("intro.interviewTooltip")}</span>
      </div>
    </section>
  );
}
