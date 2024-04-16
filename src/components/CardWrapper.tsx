import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="space-y-2 bg-[rgba(255,255,255,0.5)] drop-shadow-sm p-4 rounded-md">
      {children}
    </div>
  );
};

export default CardWrapper;
