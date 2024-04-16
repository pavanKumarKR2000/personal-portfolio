"use client";
import EducationCard from "@/components/EducationCard";
import Heading from "@/components/Heading";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const education_info = [
  {
    id: 1,
    name: "10th",
    time: "2015-2016",
    institute: "Hongirana School of Excellence",
    location: "Sagar,Karnataka,India",
    grade: "9 CGPA",
  },
  {
    id: 2,
    name: "PUC",
    time: "2016-2018",
    institute: "Boscoss pre university college",
    location: "Mangalore,Karnataka,India",
    grade: "95%",
  },
  {
    id: 3,
    name: "BTECH in Information Science",
    time: "2018-2022",
    institute: "M.S Ramaiah institute of technology",
    location: "Bangalore,Karnataka,India",
    grade: "First class with distinction",
  },
];

const EducationPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: "0.7" }}
        exit={{ opacity: 0, y: "-50px" }}
        className="gradient-bg p-4 rounded-md space-y-6"
      >
        <Heading heading="Education" />
        <div className="grid grid-cols-3 gap-2">
          {education_info.map((item) => (
            <EducationCard key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EducationPage;
