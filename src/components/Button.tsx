import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`p-2 flex items-center justify-center gap-3 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
