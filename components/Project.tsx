"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { BsGithub, BsFillCursorFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

//This will define types for ProjectProps to be strictly and specific  same from any of the typeof projectsData elements
type ProjectProps = (typeof projectsData)[number];

//The animation should start when the bottom of the viewport "0" crosses the top of the target "1"
//The animation should end when the bottom of the viewport has gone 33% beyond the end of the target
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  deployLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  // const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden sm:pr-8 relative sm:h-[24rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem] gap-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-1 leading-relaxed text-gray-900 font-light dark:text-white/70">
            {description}
          </p>
          <div className="flex gap-2 my-2">
            <a
              href={githubLink}
              target="_blank"
              className="bg-white text-gray-700 w-14 h-14 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:bg-white-950 hover:text-gray-950/90 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
              aria-label="Link to github repository."
            >
              <IconContext.Provider value={{ size: "5em" }}>
                <BsGithub />
              </IconContext.Provider>
            </a>
            <a
              href={deployLink}
              target="_blank"
              className="bg-white text-gray-700 w-14 h-14 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:bg-white-950 hover:text-gray-950/90 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
              aria-label="Link to deployed app."
            >
              <IconContext.Provider value={{ size: "5em" }}>
                <BsFillCursorFill />
              </IconContext.Provider>
            </a>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-teal-50 rounded-full dark:text-slate-200"
                key={index}
              >
                {" "}
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
        
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:-right-[initial]
          group-even:-left-40
          "
          src={imageUrl}
          alt={`Project: ${title}`}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
