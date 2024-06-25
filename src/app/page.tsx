"use client";

import "animate.css";
import "animate.css/animate.min.css";
import { useState, useEffect } from "react";
import SideBar from "@/components/Sidebar";
import { RiArrowDropLeftLine } from "react-icons/ri";

const Home = () => {
  const [activeService, setActiveService] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  // Set default active service to "Product Design" on large screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (mediaQuery.matches) {
      setActiveService("Product Design");
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        setActiveService("Product Design");
      } else {
        setActiveService("");
      }
    };

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

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
    <main className="bg-white lg:flex w-full">
      {showSidebar && (
        <div className="w-full lg:w-[35%] xl:w-[28%] h-screen">
          <SideBar
            activeService={activeService}
            setActiveService={(service) => {
              setActiveService(service);
              setShowSidebar(false);
            }}
          />
        </div>
      )}
      <div className={`flex-1 m-5 ${showSidebar ? "hidden md:block" : ""}`}>
        <div className="relative">
          {!showSidebar && (
            <button
              className=" top-2 left-2 md:hidden"
              onClick={() => setShowSidebar(true)}
            >
              <RiArrowDropLeftLine size={24} />
            </button>
          )}
          {renderContent()}
        </div>
      </div>
    </main>
  );
};

export default Home;
