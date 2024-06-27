import Image, { StaticImageData } from "next/image";
import React from "react";
import BackButton from "../back-button";
import GuabaIcon from "/public/guaba-icon-white.svg";

interface DetailsSideBarProps {
  brandBgImage: any;
  brandLogo: any;
  date: any;
  brandName: any;
  description: any;
}
const DetailsSideBar: React.FC<DetailsSideBarProps> = ({
  brandBgImage,
  brandLogo,
  date,
  brandName,
  description,
}) => {
  return (
    <div className="relative z-0 p-5  md:px-[39px] md:py-[46px] text-white h-full">
      <div className="relative h-full  grid z-10 grid-rows-3">
        <div className="flex items-center h-fit justify-between">
          <BackButton onclick={() => {}} />
          <Image src={GuabaIcon} alt="guaba-icon" width={33} height={40} />
        </div>

        <div className="grid content-center justify-items-center">
          <Image
            src={brandLogo}
            alt="brandName"
            width={70}
            height={50}
            objectFit="contain m-auto w-fit h-fit"
          />
        </div>
        <div className="grid content-end align-bottom">
          <p>{date}</p>
          <h2>{brandName}</h2>
          <p>{description}</p>
        </div>
      </div>
      <Image
        src={brandBgImage}
        alt={brandName}
        className="w-full object-cover h-auto"
        fill={true}
      />
    </div>
  );
};

export default DetailsSideBar;
