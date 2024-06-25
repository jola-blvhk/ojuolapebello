import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  text,
  color = "orange",
  className,
}) => {
  return (
    <div
      className={`w-full py-3 text-sm md:text-base cursor-pointer ${className || ""} ${
        color === "orange" &&
        "bg-secondary-orange-100 border-secondary-orange-100/20 text-white hover:bg-secondary-orange-100/50"
      }  ${
        color === "transparent" &&
        "bg-transparent text-primary-black-100 border-primary-black-100/5 hover:bg-primary-white-90 "
      } text-center border-2 rounded-[10px] `}
    >
      {text}
    </div>
  );
};

export default Button;
