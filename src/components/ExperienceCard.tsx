import React from "react";
import CardWrapper from "./CardWrapper";

interface ExperienceCardProps {
  id: number;
  time: string;
  name: string;
  position: string;
  location: string;
}

const ExperienceCard = ({
  time,
  name,
  position,
  location,
}: ExperienceCardProps) => {
  return (
    <CardWrapper>
      <p className="text-slate-700">{time}</p>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-slate-700">{position}</p>
      <p className="text-slate-700">{location}</p>
    </CardWrapper>
  );
};

export default ExperienceCard;
