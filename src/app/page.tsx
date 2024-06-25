"use client"

import "animate.css";
import "animate.css/animate.min.css";
import { useState } from "react";
import SideBar from "@/components/Sidebar";

const Home = () => {
  const [activeService, setActiveService] = useState<string>("");

  const renderContent = () => {
    switch (activeService.toLowerCase().replace(/ /g, "")) {
      case "productdesign":
        return <div>Product Design Content</div>;
      case "splineinteractive3d":
        return <div>Spline Interactive 3D Content</div>;
      case "branding":
        return <div>Branding Content</div>;
      case "copywriting":
        return <div>Copywriting Content</div>;
      case "aboutus":
        return <div>About Us Content</div>;
      default:
        return <div>Select a service to see the content</div>;
    }
  };

  return (
    <main className="bg-white md:flex w-full">
      <div className="w-full lg:w-[35%] xl:w-[28%] h-screen">
        <SideBar
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </div>
      <div className="flex-1 m-5 border border-red-500">{renderContent()}</div>
    </main>
  );
};

export default Home;
