import Image, { StaticImageData } from "next/image";
import React from "react";

interface DetailsSideBarProps {
  brandBgImage: StaticImageData | string;
}
const DetailsSideBar: React.FC<DetailsSideBarProps> = ({ brandBgImage }) => {
  return (
    <div className="grid justify-between">
      <Image
        src={brandBgImage}
        alt="brandName"
        className="w-full object-cover h-auto"
        fill={true}
      />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DetailsSideBar;
