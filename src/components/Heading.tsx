import React from "react";

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="flex items-center gap-2 w-[60vw]">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <div className="h-[2px] bg-black w-[50%]"></div>
    </div>
  );
};

export default Heading;
