"use client";

import { Brain, Code, GraduationCap, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const nav_items = [
  { id: 1, label: "Education", link: "/education", Icon: GraduationCap },
  { id: 2, label: "Experience", link: "/experience", Icon: Settings },
  { id: 3, label: "Skills", link: "/skills", Icon: Brain },
  { id: 4, label: "Projects", link: "/projects", Icon: Code },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ opacity: 0, y: "-50px" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: "0.7" }}
      exit={{ opacity: 0, y: "-50px" }}
      className="p-4 gradient-bg rounded-md"
    >
      <ul className="space-y-4">
        {nav_items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className={`flex flex-col items-center gap-y-2  rounded-md p-2 ${
                item.link === pathname
                  ? "bg-blue-500 text-white"
                  : "bg-slate-200"
              }`}
            >
              <div>{<item.Icon />}</div>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
