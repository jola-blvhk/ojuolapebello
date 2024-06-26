"use client"

import "animate.css";
import "animate.css/animate.min.css";
import { useEffect, useState } from "react";
import SideBar from "@/components/Sidebar";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Services from "@/components/Services";

const Home = () => {
  const [activeService, setActiveService] = useState<string>("product design");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(true);
        setActiveService("product design");
      }
    };

    window.addEventListener("resize", handleResize);

    // Set initial state
    if (window.innerWidth >= 1024) {
      setShowSidebar(true);
      setActiveService("product design");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-white h-screen lg:flex w-full">
      <div
        className={`w-full  lg:w-[35%] xl:w-[28%] h-screen ${
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

      <div className={`flex-1 overflow-y-scroll px-9  py-6 ${showSidebar && "hidden lg:block"}`}>
        <div className="relative">
          {!showSidebar && (
            <button
              className="top-2 left-2 lg:hidden"
              onClick={() => {
                setShowSidebar(true);
                setActiveService(""); // Reset active service on small screens
              }}
            >
              <RiArrowDropLeftLine size={24} />
            </button>
          )}
          <Services activeService={activeService} />
        </div>
      </div>
    </main>
  );
};

export default Home;
