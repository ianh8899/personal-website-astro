import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";
import { useTheme } from "../../context/theme-context";
import { useLanguage } from "../../context/language-context";
import type { TranslationKey } from "../../i18n/utils";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("experience.heading")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                    contentStyle={{
                        background:
                            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                    }}
                    date={t(`experience.${index}.date` as TranslationKey) as string}
                    icon={
                        <div style={{
                            backgroundImage: `url(${item.imgURL})`,
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            width: '100%',
                            height: '100%',
                        }}/>
                    }
                    iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                >
                    <h3 className="font-semibold capitalize">{item.company}</h3>
                    <p className="font-normal !mt-0">{item.title}</p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                        {t(`experience.${index}.description` as TranslationKey)}
                    </p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
