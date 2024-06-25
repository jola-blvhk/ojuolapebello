"use client";

import "animate.css";
import "animate.css/animate.min.css";
import { useEffect, useState } from "react";
import SideBar from "@/components/Sidebar";
import { RiArrowDropLeftLine } from "react-icons/ri";

const Home = () => {
  const [activeService, setActiveService] = useState<string>("productdesign");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set initial state
    if (window.innerWidth >= 1024) {
      setShowSidebar(true);
    }

    return () => window.removeEventListener("resize", handleResize);
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
      <div
        className={`w-full lg:w-[35%] xl:w-[28%] h-screen ${
          !showSidebar && "hidden lg:block"
        }`}
      >
        <SideBar
          activeService={activeService}
          setActiveService={(service) => {
            setActiveService(service);
            if (window.innerWidth < 1024) {
              setShowSidebar(false);
            }
          }}
        />
      </div>

      <div className={`flex-1 m-5  ${showSidebar && "hidden lg:block"}`}>
        <div className="relative">
          {!showSidebar && (
            <button
              className="top-2 left-2 lg:hidden"
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
