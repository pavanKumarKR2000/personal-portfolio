"use client";

import Heading from "@/components/Heading";
import SkillsCard from "@/components/SkillsCard";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const skills_info = [
  { id: 1, label: "HTML", img: "https://cdn.svgporn.com/logos/html-5.svg" },
  { id: 2, label: "CSS", img: "https://cdn.svgporn.com/logos/css-3.svg" },
  {
    id: 3,
    label: "Javascript",
    img: "https://cdn.svgporn.com/logos/javascript.svg",
  },
  {
    id: 4,
    label: "Typescript",
    img: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  },
  { id: 5, label: "Core java", img: "https://cdn.svgporn.com/logos/java.svg" },
  { id: 6, label: "React js", img: "https://cdn.svgporn.com/logos/react.svg" },
  {
    id: 7,
    label: "Next js",
    img: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  },
  {
    id: 8,
    label: "Tailwind css",
    img: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  },
  { id: 9, label: "figma", img: "https://cdn.svgporn.com/logos/figma.svg" },
  {
    id: 10,
    label: "Gsap",
    img: "https://cdn.svgporn.com/logos/greensock-icon.svg",
  },
  {
    id: 11,
    label: "Git",
    img: "https://cdn.svgporn.com/logos/git-icon.svg",
  },
];

const SkillsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: "0.7" }}
        exit={{ opacity: 0, y: "-50px" }}
        className="gradient-bg p-4 rounded-md space-y-6"
      >
        <Heading heading="Skills" />
        <div className="grid grid-cols-4 gap-4 items-center">
          {skills_info.map((item) => (
            <SkillsCard key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsPage;
