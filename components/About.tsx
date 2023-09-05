"use client";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/customhooks";

export default function About() {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  const { ref } = useSectionInView("About", 0.75);

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Healthcare</span>, I decided to pursue my
        passion for programming. Curiosity dig deep into me and started building
        a <span className="font-medium">software developer path</span>.{" "}
        <span className="italic">My favorite part of coding</span> is the
        problem-solving perspective. I{" "}
        <span className="underline">really enjoy</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Node.js, Express, and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">TypeScript</span> and frameworks like{" "}
        <span className="font-medium">Tailwind and Bootstrap</span>. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I teach other
        people to stand on their hands, nourish my own practice, and taste
        delicious vegan food. I also enjoy{" "}
        <span className="font-medium">reading</span>. Currently sneaking about{" "}
        <a
          href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms"
          className=" underline font-medium text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:bg-white-950 hover:text-gray-950 active:scale-105 transition dark:text-emerald-500 dark:hover:text-emerald-300"
          target="_blank"
          aria-label="Link to wikipedia Introduction to Algorithms"
        >
          Introduction to Algorithms
        </a>
        .{" "}
      </p>
    </section>
  );
}
