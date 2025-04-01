import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onclick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text,

  className,
  onclick,
}) => {
  return (
    <button
      className={`relative z-0 w-full border-2    bg-cover  py-3 text-sm md:text-base cursor-pointer ${
        className || "text-white"
      }   text-center border-2 rounded-[10px] overflow-hidden`}
      onClick={onclick}
    >
      {/* Text */}
      <p className="relative z-50  ">{text}</p>
    </button>
  );
};

export default Button;
