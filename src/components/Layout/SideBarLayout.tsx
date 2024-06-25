"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/logo.svg";
import Button from "../Button";
import { RiArrowDropRightLine } from "react-icons/ri";

const SideBarLayout = () => {
  const services = [
    "Product Design",
    "Spline Interactive 3D",
    "Branding",
    "Copywriting",
    "About us",
  ];

  const clients = [
    "Indeed",
    "Equipe Technique",
    "PIKD",
    "Hardsands Tech",
    "Mango Nomads",
    "Copypress",
    "Spaces Marketplace",
    "VPN Overview",
  ];

  const [activeService, setActiveService] = useState("Product Design");

  const year = new Date().getFullYear();

  return (
    <div className="grid h-full justify-between  border-r border-secondary-orange-100/10 px-[30px] md:px-[34px] py-[20px] md:py-[30px]">
      <div className=" grid justify-between pb-4 gap-y-6   h-full">
        <div className="border-b border-secondary-orange-100/10 pb-6">
          <Image
            src={Logo}
            alt="logo"
            width={93}
            height={93}
            className="mb-6 md:mb-8"
          />
          <h1 className=" text-xl md:text-2xl mb-2  md:mb-4">
            A Design Studio for founders
          </h1>
          <p className="text-primary-black-90 mb-4 text-sm md:text-base">
            Let us transform your ideas / vision and create captivating design
            experiences
          </p>
          <div className="grid gap-y-[12px] md:gap-y-[18px]">
            <Button text="Book a free consultation" color="orange" />
            <Button text="Follow us" color="transparent" />
          </div>
        </div>
        <div className="grid gap-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-5  w-fit cursor-pointer  ${
                activeService === service
                  ? "text-primary-black-100 font-semibold"
                  : "text-primary-grey-100 hover:text-primary-black-100 hover:font-semibold"
              }`}
              onClick={() =>
                activeService === service
                  ? setActiveService("")
                  : setActiveService(service)
              }
            >
              <p className={` text-base md:text-lg  `} tabIndex={1}>
                {service}
              </p>
              <div className=" w-5 h-5 bg-[#EDEDED] rounded-full grid items-center">
                <RiArrowDropRightLine className="m-auto text-secondary-orange-100 text-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-secondary-orange-100/10 pt-6">
          <h1 className="text-base md:text-lg w-fit mb-4 text-primary-black-100 font-semibold">
            Some of our clients
          </h1>
          <div className="flex flex-wrap gap-y-3 gap-x-2">
            {clients?.map((client, index) => (
              <div
                key={index}
                className={`w-fit py-0.5 text-[13px] md:text-sm rounded-2xl border-2 border-primary-black-100/5 ${
                  index % 2 === 0 ? "px-4" : "px-6"
                }`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" h-full place-content-end">
        <p className="text-center text-sm h-fit  text-primary-black-90/45">
          © Guaba Design Studio {year}
        </p>
      </div>
    </div>
  );
};

export default SideBarLayout;
