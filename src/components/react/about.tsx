import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I spent 8 years working in procurement within the automotive industry
        after graduating in{" "}
        <span className="font-medium">Mechanical Engineering</span>, managing
        global supply chains and working closely with stakeholders to deliver
        complex projects. I’ve since transitioned into software engineering,
        where I now have a{" "}
        <span className="font-medium">proven track record</span> of building
        scalable applications using{" "}
        <span className="font-medium">modern web technologies</span>. I bring
        skills in communication, problem-solving and collaboration into my
        professional work, with a strong focus on{" "}
        <span className="italic">maintainability</span>, performance and user
        experience.
      </p>
      <p>
        When I'm not coding, I'm often{" "}
        <span className="italic">cooking and traveling</span> with my partner. I
        thoroughly enjoy{" "}
        <span className="font-medium">learning new things</span>, currently I'm
        learning <span className="font-medium">dutch</span>.
      </p>
    </motion.section>
  );
}
