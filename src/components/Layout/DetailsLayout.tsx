import React from "react";
import DetailsSideBar from "../Sidebar/DetailsSideBar";
import { StaticImageData } from "next/image";

interface DetailsLayoutProps {
  brandBgImage: any;
  children: React.ReactNode;
  brandLogo: any;
  brandName: any;
  description: any;
  width: any;
  height: any;
}
const DetailsLayout: React.FC<DetailsLayoutProps> = ({
  brandBgImage,
  children,
  brandLogo,
  brandName,
  description,
  width,
  height,
}) => {
  return (
    <div className="grid lg:flex">
      <div className="w-full lg:w-[32%] xl:w-[25%] h-[500px] md:h-[700px] lg:h-screen ">
        <DetailsSideBar
          brandBgImage={brandBgImage}
          brandLogo={brandLogo}
          brandName={brandName}
          description={description}
          width={width}
          height={height}
        />
      </div>

      <main className="flex-1 overflow-y-scroll px-5 lg:px-9  py-6">
        {children}
      </main>
    </div>
  );
};

export default DetailsLayout;
