"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "@/components/Project";
import { useSectionInView } from "@/lib/customhooks";

export default function Projects() {
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  const { ref } = useSectionInView("Projects", 0.75);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
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
