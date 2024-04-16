"use client";
import {
  ArrowDownToLine,
  Cake,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { animate, motion } from "framer-motion";
const socialMedias = [
  {
    id: 1,
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/pavankumar-k-r-032509198/",
  },
  { id: 2, Icon: Github, link: "https://github.com/pavanKumarKR2000" },
  { id: 3, Icon: Twitter, link: "https://twitter.com/PavanKavalakodu" },
];

const info = [
  { id: 1, label: "Phone", value: "+916362638152", Icon: Smartphone },
  { id: 2, label: "Email", value: "pavankavalakodu@gmail.com", Icon: Mail },
  { id: 3, label: "Location", value: "Bangalore,India", Icon: MapPin },
  { id: 4, label: "Birthday", value: "25-03-2000", Icon: Cake },
];

const variants = {
  entry: { opacity: 0, y: "-50px" },
  animate: { opacity: 1, y: "0px" },
};

const ProfileCard = () => {
  return (
    <motion.div
      variants={variants}
      initial="entry"
      animate="animate"
      transition={{ duration: "0.7" }}
      className="gradient-bg flex flex-col items-center gap-y-4 px-4 py-8  rounded-md w-fit"
    >
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-3xl font-bold">PavanKumar K R</h2>
        <p className="p-2 bg-slate-200 rounded-md">Frontend developer</p>
        <ul className="flex items-center gap-x-4">
          {socialMedias.map((item) => (
            <li key={item.id} className="p-2 bg-slate-200 rounded-md">
              <Link href={item.link} target="_blank">
                {" "}
                {<item.Icon />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" p-2 rounded-md">
        {info.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-3 p-2 ${
              index !== 3 && "border-b border-black"
            }`}
          >
            <div className="flex items-center justify-center">
              {<item.Icon />}
            </div>
            <div className="space-y-1 col-span-2">
              <p className="text-slate-700">{item.label}</p>
              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <Button className="bg-blue-500 hover:bg-blue-400 transition-all">
        <Link
          href="https://drive.google.com/file/d/11dKhCIlc6sBRyGsAnSk6lCmBgMcNR6NO/view?usp=sharing"
          target="_blank"
          className="flex items-center justify-center gap-3"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download CV
        </Link>
      </Button>
    </motion.div>
  );
};

export default ProfileCard;
