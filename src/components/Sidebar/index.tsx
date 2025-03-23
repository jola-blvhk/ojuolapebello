"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/logo.svg";
import Button from "../Button";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";
import Instagram from "/public/social-media/instagram.svg";
import Linkedin from "/public/social-media/linkedin.svg";
import Medium from "/public/social-media/medium.svg";
import AllReviews from "../AllReviews";
import ProfilePicture from "/public/profile-picture.svg";
import GreenLight from "/public/green-light.svg";
import Location from "/public/location.svg";
interface SideBarProps {
  activeService: string;
  setActiveService: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar: React.FC<SideBarProps> = ({
  activeService,
  setActiveService,
}) => {
  const services = [
    "Projects and Case Studies",
    "Spline Interactive 3D",
    "Branding",
    "Copywriting",
    "About us",
  ];

  const skills = [
    { name: "Figma", icon: "/skills/figma.svg" },
    { name: "Spline", icon: "/skills/spline.svg" },
    { name: "Blender", icon: "/skills/blender.svg" },
    { name: "Adobe", icon: "/skills/adobe.svg" },
    { name: "Framer", icon: "/skills/adobe.svg" },
    { name: "Webflow", icon: "/skills/adobe.svg" },
    { name: "3d illustration" },
    { name: "User research and testing" },
    { name: "Animation" },
    { name: "Design Thinking & Problem-Solving" },
    { name: "Motion Design" },
    { name: "Interaction Design" },
    { name: "Wireframing & Prototyping" },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFollowUsClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const year = new Date().getFullYear();

  return (
    <div className="relative grid gap-y-6 lg:gap-y-0 h-full justify-between border-r border-[#D9D9D9] px-[30px] md:px-[34px] py-[20px] md:py-[20px]">
      <div className="grid justify-between pb-4 gap-y-5 h-full">
        <div className="border-b pb-4 border-[#D9D9D9] ">
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={70}
            className="mb-5"
          />
          <div className=" py-[5.59px] px-[9.04px] w-fit md:hidden mb-[17px] text-xs   gap-1.5  border border-primary-gray-100 rounded-[40px]  flex items-center">
            <Image
              src={GreenLight}
              alt="green-light"
              width={24}
              height={24}
              className="w-3 h-auto   "
            />
            <p>Open to work</p>
          </div>
          <div className="flex items-end lg:items-center gap-6 md:mb-[17px]">
            <Image
              src={ProfilePicture}
              width={56}
              height={56}
              alt="Jojo"
              quality={100}
              className="w-[56px] md:w-[68px] h-auto rounded-xl"
            />
            <div>
              <div className="hidden lg:flex items-center gap-2 mb-2 ">
                <div className=" py-[5.59px] px-[9.04px] w-fit   text-xs  gap-1.5  border border-primary-gray-100 rounded-[40px]  flex items-center">
                  <Image
                    src={GreenLight}
                    alt="green-light"
                    width={20}
                    height={20}
                    className="w-3 h-auto   "
                  />
                  <p>Open to work</p>
                </div>
                <div className=" py-[5.59px] px-[9.04px] w-fit   text-xs   gap-1.5  border border-primary-gray-100 rounded-[40px]  flex items-center">
                  <Image
                    src={Location}
                    alt="location"
                    width={20}
                    height={20}
                    className="w-3 h-auto   "
                  />
                  <p>Lisbon, Portugal</p>
                </div>
              </div>
              <h1 className="text-black text-2xl mb-2 lg:mb-0 font-semibold">
                Hi, I&rsquo;m Ojuolape{" "}
                <span className="hidden lg:inline">Bello</span>
              </h1>
            </div>
          </div>

          <p className="text-primary-black-90 mb-4 text-sm md:text-base">
            A Product Designer with 4 years + experience creating User
            Interfaces, 3D Models, graphics presentations etc, with a background
            in Architecture and Masters in Design and Visual culture at IADE
            Creative University Lisbon. I am also a certified Product manager.
          </p>
          <div className="">
            <Button text="Send me a mail" onclick={handleFollowUsClick} />
          </div>
        </div>

        <div className="grid gap-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 w-fit cursor-pointer ${
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
              <p className="text-base md:text-lg">{service}</p>
              <div className="w-5 h-5 bg-[#EDEDED] rounded-full grid items-center">
                <RiArrowDropRightLine className="m-auto text-secondary-orange-100 text-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-secondary-orange-100/10 pt-4">
          <h1 className="text-base md:text-lg w-fit mb-4 text-primary-black-100 font-semibold">
            Skills
          </h1>
          <div className="flex flex-wrap gap-y-3 gap-x-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex items-center w-fit py-0.5 text-[13px] md:text-sm rounded-2xl border-2 border-primary-black-100/5 px-3`}
              >
                {/* Show Icon if it exists */}
                {skill.icon && (
                  <Image
                    width={14}
                    height={14}
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 mr-2"
                  />
                )}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden border-t border-secondary-orange-100/10 pt-6">
          <AllReviews />
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
          onClick={handleClosePopup}
        >
          <div className="bg-white border border-secondary-orange-100/30 p-8 md:py-10 md:px-9 rounded-[10px] shadow-lg relative">
            <div className="flex gap-6  md:gap-10 items-center">
              <Link href="https://www.instagram.com/guabastudio/">
                <Image src={Instagram} width={34} height={40} alt="instagram" />
              </Link>
              <Link href="https://www.linkedin.com/company/guaba-design-studio/">
                <Image src={Linkedin} width={34} height={40} alt="linkedin" />
              </Link>
              <Link href="https://medium.com/@guabadesignstudio">
                <Image src={Medium} width={100} height={50} alt="medium" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
