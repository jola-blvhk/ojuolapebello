import React from "react";
import DetailsSideBar from "../Sidebar/DetailsSideBar";
import { StaticImageData } from "next/image";
import { TbBrandGoogleBigQuery } from "react-icons/tb";

interface DetailsLayoutProps {
  brandBgImage: StaticImageData | string;
  children: React.ReactNode;
}
const DetailsLayout: React.FC<DetailsLayoutProps> = ({
  brandBgImage,
  children,
}) => {
  return (
    <div className="md:flex">
      <DetailsSideBar brandBgImage={brandBgImage} />
      <main>{children}</main>
    </div>
  );
};

export default DetailsLayout;
