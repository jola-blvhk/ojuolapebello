import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface ProductBoxProps {
  project: Project;
  onclick?: () => void;
}
const ProductBox: React.FC<ProductBoxProps> = ({ project, onclick }) => {
  return (
    <div
      className="h-[250px] relative md:h-[350px]  pt-6 pb-0.5 lg:h-[402px] cursor-pointer w-full rounded md:rounded-[10px] bg-[#F7F7F7]"
      onClick={onclick}
    >
      <div className="relative  w-full h-full ">
        <Image
          src={project.imageSrc}
          alt={project.title}
          layout="fill"
          className="w-full h-auto object-contain "
        />
      </div>
      <div className="absolute bottom-0 w-full  bg-[#f7f7f7]/90   p-[1px]  drop-shadow h-[28%]  lg:h-[25%]  rounded md:rounded-[10px] ">
        <div className="flex justify-between gap-x-3 items-center h-full w-full  text-sm   md:text-base lg:text-lg    py-2 px-3  md:px-6 lg:px-8   rounded md:rounded-[10px]">
          <h4 className="blur-none">{project?.title}</h4>
          <div className=" cursor-pointer">
            <BsArrowUpRightCircle className="text-2xl md:text-3xl text-[#4D4D4D]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
