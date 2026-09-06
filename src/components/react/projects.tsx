import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../../lib/data";
import Project from "./project";
import { useSectionInView } from "../../lib/hooks";
import { useLanguage } from "../../context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const { t } = useLanguage();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projects.heading")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
