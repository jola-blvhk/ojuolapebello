import { Project } from "@/types";
import Image from "next/image";
import React from "react";

interface ProductBoxProps {
  project: Project;
}
const ProductBox: React.FC<ProductBoxProps> = ({ project }) => {
  return (
    <div className="h-[250px] relative md:h-[350px] pt-6 pb-0.5 lg:h-[402px] cursor-pointer w-full rounded md:rounded-[10px] bg-[#F7F7F7]">
      <div className="relative  w-full h-full ">
        <Image
          src={project.imageSrc}
          alt={project.title}
          layout="fill"
          className="w-full h-auto object-contain "
        />
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-r p-[1px] drop-shadow-lg h-[20%]  lg:h-[25%]  rounded md:rounded-[10px] from-secondary-orange-90/10 to-secondary-orange-100/20">
        <div className=" h-full w-full  text-sm  md:text-base lg:text-lg   bg-[#f7f7f7] py-2 px-3  md:p-6 lg:p-8 grid items-center rounded md:rounded-[10px]">
          <h4>{project?.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
