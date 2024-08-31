"use client";

import React, { useContext } from "react";
import { useSectionInView } from "@/lib/customhooks";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.75);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mt-40 mb-28 sm:mb-40 ">
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: theme === 'light' ? "0 3px 0 rgba(0,0,0,0.75)" : "0 3px 0 #ddd",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.05)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.05)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold text-emerald-900 capitalize dark:text-white/90">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description.includes("Xtract") ? (
                  <span>
                    {experience.description.split("Xtract").map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < experience.description.split("Xtract").length - 1 && (
                          <a
                          aria-label="Link to Xtract's homepage"
                            href="https://xtract.app/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-medium text-gray-950 focus:scale-[1.15] hover:scale-[1.15] hover:bg-white-950 hover:text-gray-950 active:scale-105 transition dark:text-indigo-500 dark:hover:text-indigo-400"
                          >
                            Xtract
                          </a>
                        )}
                      </React.Fragment>
                    ))}
                  </span>
                ) : (
                  experience.description
                )}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
