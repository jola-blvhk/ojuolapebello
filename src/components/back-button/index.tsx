"use client";

import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

interface BackButtonProps {
  onclick?: () => void;
  white?: boolean;
}
const BackButton: React.FC<BackButtonProps> = ({ onclick, white }) => {
  return (
    <div
      className={` border bg-[#FCFCFC]/50 ${
        white
          ? " text-white border-white hover:bg-transparent focus-transparent  "
          : "bg-white text-secondary-orange-100  border-secondary-orange-100/20 hover:bg-secondary-orange-100/60 focus:bg-secondary-orange-100/60"
      }    rounded-[10px] cursor-pointer  w-fit p-4   font-bold  focus:text-white  hover:text-white`}
      onClick={onclick}
    >
      <IoChevronBackOutline className="lg:text-lg" />
    </div>
  );
};

export default BackButton;
