import Image, { StaticImageData } from "next/image";
import React from "react";
import BackButton from "../back-button";
import GuabaIcon from "/public/guaba-icon-white.svg";
import { useRouter } from "next/navigation";

interface DetailsSideBarProps {
  brandBgImage: any;
  brandLogo: any;
  brandName: any;
  description: any;
  width: any;
  height: any;
}
const DetailsSideBar: React.FC<DetailsSideBarProps> = ({
  brandBgImage,
  brandLogo,
  brandName,
  description,
  width,
  height,
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="relative z-0 p-5  xl:px-[39px] xl:py-[46px] text-white h-full">
      <div className="relative h-full z-10 grid justify-between">
        <div className="flex items-center h-fit justify-between">
          <BackButton onclick={() => handleBack()} white />
          {/* <Image src={GuabaIcon} alt="guaba-icon" width={32} height={30} /> */}
        </div>

        <div className="grid content-center justify-items-center">
          <Image
            src={brandLogo}
            alt="brandName"
            width={width}
            height={height}
            objectFit="contain m-auto w-fit h-fit"
          />
        </div>
        <div className="grid content-end align-bottom gap-y-1 md:gap-y-2">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
            {brandName}
          </h2>
          <p className=" text-sm md:text-base xl:leading-6">{description}</p>
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
