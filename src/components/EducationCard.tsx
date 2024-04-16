import React from "react";
import CardWrapper from "./CardWrapper";

interface EducationCardProps {
  id: number;
  name: string;
  time: string;
  institute: string;
  location: string;
  grade: string;
}

const EducationCard = ({
  id,
  name,
  time,
  institute,
  location,
  grade,
}: EducationCardProps) => {
  return (
    <CardWrapper>
      <p className="text-slate-700">{time}</p>
      <h2 className="text-lg font-bold">{institute}</h2>
      <p className="text-slate-700">{location}</p>
      <p className="text-slate-700">{grade}</p>
    </CardWrapper>
  );
};

export default EducationCard;
