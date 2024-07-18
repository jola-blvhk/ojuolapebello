"use client";

import "animate.css";
import "animate.css/animate.min.css";
import { useEffect, useState } from "react";
import SideBar from "@/components/Sidebar";
import Services from "@/components/Services";
import BackButton from "@/components/back-button";
import GuabaIcon from "/public/guaba-icon.svg";
import Image from "next/image";
import AllReviews from "../AllReviews";

const Home = () => {
  const [activeService, setActiveService] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  useEffect(() => {
    const setInitialActiveService = () => {
      if (window.innerWidth >= 1024) {
        setActiveService("Product Design");
      }
    };

    setInitialActiveService();

    // const handleResize = () => {
    //   if (window.innerWidth >= 1024) {
    //     setShowSidebar(true);
    //     setActiveService("Product Design");
    //   } else {
    //     setActiveService("");
    //   }
    // };

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(activeService)
  return (
    <main className="bg-white h-screen lg:flex w-full">
      <div
        className={`w-full lg:w-[35%] xl:w-[28%] lg:h-screen ${
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

      <div
        className={`flex-1 overflow-y-scroll px-5 md:px-9 py-6 ${
          showSidebar && "hidden lg:block"
        }`}
      >
        <div className="relative">
          {!showSidebar && (
            <div className="flex justify-between items-center lg:hidden mb-7">
              <BackButton
                onclick={() => {
                  setShowSidebar(true);
                  setActiveService(""); // Reset active service on small screens
                }}
              />
              <h2 className="text-center text-[#2C2C2C] font-medium text-lg">
                {activeService}
              </h2>
              <Image src={GuabaIcon} alt="guaba-icon" width={33} height={40} />
            </div>
          )}
          <div className="grid gap-16 md:gap-20">
            <Services activeService={activeService} />
            <div
              className={`hidden ${
                activeService === "About us" ? "hidden" : "lg:block"
              } `}
            >
              <AllReviews />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
