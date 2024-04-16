"use client";

import ExperienceCard from "@/components/ExperienceCard";
import Heading from "@/components/Heading";
import { motion, AnimatePresence } from "framer-motion";

const experience_info = [
  {
    id: 1,
    time: "2021 Aug - 2021 Oct",
    name: "Bolt iot",
    position: "Frontend intern",
    location: "remote",
  },
  {
    id: 2,
    time: "2023 Feb - 2023 Sept",
    name: "Respct/Dexy AI",
    position: "Frontend engineer",
    location: "remote",
  },
];

const ExperiencePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: "0.7" }}
        exit={{ opacity: 0, y: "-50px" }}
        className="gradient-bg p-4 rounded-md space-y-6"
      >
        <Heading heading="Experience" />
        <div className="grid grid-cols-3 gap-2">
          {experience_info.map((item) => (
            <ExperienceCard key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperiencePage;
