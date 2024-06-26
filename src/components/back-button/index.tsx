"use client";

import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  onclick?: () => void;
}
const BackButton: React.FC<BackButtonProps> = ({ onclick }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className=" bg-[#FCFCFC7D] border border-secondary-orange-100/20 rounded-[10px] text-secondary-orange-100 cursor-pointer  md:rounded-[15px] w-fit p-4 md:p-5 hover:bg-secondary-orange-100/60 font-bold focus:bg-secondary-orange-100/60 focus:text-white  hover:text-white"
      onClick={onclick}
    >
      <IoChevronBackOutline className="lg:text-lg" />
    </div>
  );
};

export default BackButton;
