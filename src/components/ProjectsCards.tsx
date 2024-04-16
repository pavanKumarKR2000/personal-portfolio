import React from "react";
import CardWrapper from "./CardWrapper";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface ProjectsCardsProps {
  id: number;
  name: string;
  link: string;
  img: string;
}

const ProjectsCards = ({ id, name, link, img }: ProjectsCardsProps) => {
  return (
    <CardWrapper>
      <h2 className="text-lg font-bold">{name}</h2>
      <Image
        src={img}
        width={300}
        height={200}
        alt="img"
        className="rounded-md"
      />
      <Button className="bg-blue-500 hover:bg-blue-400 transition-all">
        <Link href={link} target="_blank">
          Code
        </Link>
      </Button>
    </CardWrapper>
  );
};

export default ProjectsCards;
