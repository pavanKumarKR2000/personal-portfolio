"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import ProjectsCards from "@/components/ProjectsCards";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const projects_info = [
  {
    id: 1,
    name: "Spotify clone",
    link: "https://github.com/pavanKumarKR2000/spotify-clone",
    img: "https://github.com/pavanKumarKR2000/spotify-clone/raw/main/spotify-clone.png?raw=true",
  },
  {
    id: 2,
    name: "Jotion",
    link: "https://github.com/pavanKumarKR2000/notion-clone",
    img: "https://github.com/pavanKumarKR2000/notion-clone/raw/main/jotion.png?raw=true",
  },
  {
    id: 3,
    name: "Employee management system",
    link: "https://github.com/pavanKumarKR2000/employee-management-system",
    img: "https://github.com/pavanKumarKR2000/commutatus-task/raw/main/chart.jpeg?raw=true",
  },
];
const ProjectsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: "0.7" }}
        exit={{ opacity: 0, y: "-50px" }}
        className="gradient-bg p-4 rounded-md space-y-6"
      >
        <Heading heading="Projects" />
        <div className="grid grid-cols-3 gap-4">
          {projects_info.map((item) => (
            <ProjectsCards key={item.id} {...item} />
          ))}
        </div>
        <Button className="bg-blue-500 hover:bg-blue-400 transition-all">
          <Link
            href="https://github.com/pavanKumarKR2000?tab=repositories"
            target="_blank"
          >
            more
          </Link>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsPage;
