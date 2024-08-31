import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LiaRobotSolid } from "react-icons/lia";
import veganparadiseImg from "@/public/veganparadise.png";
import genFaForm from "@/public/genFaForm.png";
import CdCHeader from "@/public/CdCHeader.png";
import gsheader from "@/public/gsheader.png";

export const links = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Automation Developer",
    location: "Remote",
    description:
      "Currently working on the development of integration solutions for external systems at Xtract.",
    icon: React.createElement(LiaRobotSolid),
    date: "November 2023 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "My primary stack includes React, Express, Node.js, and MongoDB. Including tools like POSTMAN and GitHub.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description: "Freelance front-end developer. Using mainly HTML/CSS/JS vanilla.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "100dev Agency",
    location: "Los Angeles, CA",
    description: "Extensive web development training program.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "GenFa",
    description:
      "Full-stack web application to create, record and download invoices as PDFs.",
    tags: ["React", "React-Bootstrap", "Node.js", "Express", "Mongoose"],
    githubLink: "https://github.com/imnotseneca/Invoice-withdb",
    deployLink: 'https://genfa.vercel.app/',
    imageUrl: genFaForm,
  },
  {
    title: "Vegan paradise",
    description:
      "E-commerce that integrates the checkout process via WhatsApp.",
    tags: ["React", "HTML", "CSS", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/Vegan-Paradise-2.0",
    deployLink: 'https://vegan-paradise.vercel.app/',
    imageUrl: veganparadiseImg,
  },
  {
    title: "Casa de estudiantes de Chivilcoy",
    description:
      "Landing page for an institution that serves young students.",
    tags: ["HTML", "CSS", "JS vanilla", "IOS animation", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/casadechivilcoy",
    deployLink: 'https://casadechivilcoy.vercel.app/',
    imageUrl: CdCHeader,
  },
  {
    title: "GS-Flexability",
    description:
      "Lading page designed for a Circus Artist. Tried to expose her skills and physical abilities for people on demand.",
    tags: ["JS vanilla", "HTML", "CSS", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/gs-flexibility",
    deployLink: 'https://gsot.netlify.app/',
    imageUrl: gsheader,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap 5",
  "Tailwind",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "Git",
] as const;
