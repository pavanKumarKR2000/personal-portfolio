import React from "react";
import CardWrapper from "./CardWrapper";
import Image from "next/image";

interface SkillsProps {
  id: number;
  label: string;
  img: string;
}

const SkillsCard = ({ label, img }: SkillsProps) => {
  return (
    <CardWrapper>
      <div className="flex items-center gap-6 p-2 h-16">
        <Image src={img} height={30} width={40} alt="img" />
        <p>{label}</p>
      </div>
    </CardWrapper>
  );
};

export default SkillsCard;
