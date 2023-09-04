import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "100dev Agency",
    location: "Los Angeles, CA",
    description: "Extensive web development agency training program.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description: "Freelance front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Express, Node.js and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Genfa",
    description:
      "GenFa is an application created for people who need to have a record of the invoices made to a receiver",
    tags: ["React", "React-Bootstrap", "Node.js", "Express", "Mongoose"],
    githubLink: "https://github.com/imnotseneca/Invoice-withdb",
    deployLink: 'https://genfa.vercel.app/',
    imageUrl: genFaForm,
  },
  {
    title: "Vegan paradise",
    description:
      "E-commerce with a shopping cart for purchasing products and completing the checkout process via WhatsApp.",
    tags: ["React", "HTML", "CSS", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/Vegan-Paradise-2.0",
    deployLink: 'https://vegan-paradise.vercel.app/',
    imageUrl: veganparadiseImg,
  },
  {
    title: "Casa de estudiantes de Chivilcoy",
    description:
      "Institution that serves young students, it provides information about annual enrollment and eligibility for residence.",
    tags: ["HTML", "CSS", "JS vanilla", "IOS animation", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/casadechivilcoy",
    deployLink: 'https://casadechivilcoy.vercel.app/',
    imageUrl: CdCHeader,
  },
  {
    title: "GS-Flexability",
    description:
      "Designed for a Circus Artist where we try to expose her teaching skills and physical abilities for people on demand",
    tags: ["JS vanilla", "HTML", "CSS", "Mobile First"],
    githubLink: "https://github.com/imnotseneca/gs-flexibility",
    deployLink: 'https://imnotseneca.github.io/gs-flexibility/',
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
