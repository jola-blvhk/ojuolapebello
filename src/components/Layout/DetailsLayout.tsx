import React from "react";
import DetailsSideBar from "../Sidebar/DetailsSideBar";
import { StaticImageData } from "next/image";

interface DetailsLayoutProps {
  brandBgImage: any;
  children: React.ReactNode;
  brandLogo: any;
  date: any;
  brandName: any;
  description: any;
}
const DetailsLayout: React.FC<DetailsLayoutProps> = ({
  brandBgImage,
  children,
  brandLogo,
  date,
  brandName,
  description,
}) => {
  return (
    <div className="grid lg:flex">
      <div className="w-full lg:w-[32%] xl:w-[25%] h-[500px] md:h-[700px] lg:h-screen ">
        <DetailsSideBar
          brandBgImage={brandBgImage}
          brandLogo={brandLogo}
          date={date}
          brandName={brandName}
          description={description}
        />
      </div>

      <main className="flex-1 overflow-y-scroll px-5 lg:px-9  py-6">
        {children}
      </main>
    </div>
  );
};

export default DetailsLayout;
