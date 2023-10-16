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
      className="mb-30 mt-30 max-w-[45rem] leading-8 sm:mb-28 sm:mt-28 scroll-mt-28 relative"
    >
      <div className="bg-[#ebeabf] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#704d4e]"></div>

      <div className="bg-[#8b7f80] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#504d34]"></div>

      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Healthcare</span>, I decided to pursue my
        passion for programming. Curiosity ran deep within me, and I started
        crafting a path towards becoming a{" "}
        <span className="font-medium">software developer</span>.{" "}
      </p>
      <p className="mb-3">
        My favorite aspect of coding is the{" "}
        <span className="italic">problem-solving perspective</span>. I{" "}
        <span className="underline">thoroughly enjoy</span> the feeling of
        finally figuring out a solution to a problem. I&apos;m always eager to{" "}
        <span className="underline">learn new technologies</span> and am
        currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.{" "}
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I teach others
        how to perform handstands, nurture my own practice, and savor delicious
        vegan food. I also enjoy <span className="font-medium">reading</span>.
        Currently sneaking about{" "}
        <a
          href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms"
          className=" underline font-medium text-gray-950 focus:scale-[1.15] hover:scale-[1.15] hover:bg-white-950 hover:text-gray-950 active:scale-105 transition dark:text-emerald-500 dark:hover:text-emerald-300"
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
