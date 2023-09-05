"use client";

import Image from "next/image";
import ProfileImage from "@/public/ppic.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/customhooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function IntroContent() {
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Home");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImage}
              alt="Bruno portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-36 w-36 rounded-full object-cover  shadow-xl border-[0.35rem] border-white"
            ></Image>
            <motion.span
              className="absolute bottom-0 right-0 text-4x1 inline-flex items-center rounded-md bg-emerald-700 px-2 py-1 text-xs font-medium text-lime-50 ring-1 ring-inset ring-lime-600/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              Available
            </motion.span>
          </motion.div>
        </div>
        <motion.h1
          className="mt-3 mb-1 px-4 text-2xl !leading-[1.5] sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I&apos;m Bruno.
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl my-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Front-end developer.</span>
        </motion.p>
        <motion.p
          className="my-2 sm:text-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I enjoy building <span className="italic">sites & apps.</span>
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row px-2 gap-4 items-center justify-center text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white mt-4 sm:my-4 px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition w-[13rem] h-[3.5rem]"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="\BCdevCV.docx.pdf"
            className="group bg-white sm:my-4 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white-950 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 w-[13rem] h-[3.5rem]"
            download={true}
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>
        <motion.div
          className="flex row gap-2 p-2 w-full justify-evenly my-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <a
            href="https://linkedin.com/in/bruno-corrao"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-white-950 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/imnotseneca"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-white-950 hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
