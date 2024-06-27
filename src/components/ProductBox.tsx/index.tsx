import { Project } from "@/types";
import Image from "next/image";
import React from "react";

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
        <div className=" h-full w-full  text-sm   md:text-base lg:text-lg    py-2 px-3  md:p-6 lg:p-8 grid items-center rounded md:rounded-[10px]">
          <h4 className="blur-none">{project?.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
