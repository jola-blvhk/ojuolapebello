import React from "react";
import ProductBox from "../ProductBox.tsx";
import { Project } from "@/types/index.js";
import NFTTrace from "/public/services/NFTTrace.png";
import Hardsands from "/public/services/Hardsands.png";
import Spaces from "/public/services/Spaces.png";
import Becomy from "/public/services/Becomy.png";
import Molang from "/public/services/molang.png";
import BlackGirl from "/public/services/black girl.jpg";
import RoomPractice from "/public/services/room-practice.jpg";
import Hardsandscard from "/public/services/hardsandscard.png";
import Mango from "/public/services/mango.png";
import Indeed from "/public/services/indeed.png";
import Copypress from "/public/services/copypress.png";
import VPNOverview from "/public/services/vpnoverview.png";
import AboutUs from "../AboutUs";
import AllReviews from "../AllReviews";

interface ServicesProps {
  activeService: string;
}

export const services = [
  {
    id: 1,
    title: "projects and case studies",
    projects: [
      {
        id: 1,
        title:
          "PIKD : A Token, location and Augmented reality based gamified platform",
        imageSrc: NFTTrace,
      },
      {
        id: 2,
        title: "Hardsands CRM (Customer relationship Platform) Platform",
        imageSrc: Hardsands,
      },
      {
        id: 3,
        title: "Spaces Interior Marketplace",
        imageSrc: Spaces,
      },
      {
        id: 4,
        title: "Becomy Page Builder",
        imageSrc: Becomy,
      },
    ],
  },
  {
    id: 2,
    title: "spline interactive 3d",
    projects: [
      {
        id: 1,
        title: "Black Girl 3D",
        imageSrc: BlackGirl,
      },
      {
        id: 2,
        title: "Hi, I’m Molang interactive 3D : click to interact",
        imageSrc: Molang,
      },
      {
        id: 3,
        title: "Room Practice",
        imageSrc: RoomPractice,
      },
    ],
  },
  {
    id: 3,
    title: "branding",
    projects: [
      {
        id: 1,
        title: "Mango Nomads",
        imageSrc: Mango,
      },
      {
        id: 2,
        title: "Hardsands CRM (Customer relationship Platform) Platform",
        imageSrc: Hardsandscard,
      },
    ],
  },
  {
    id: 3,
    title: "copywriting",
    projects: [
      {
        id: 1,
        title: "Indeed",
        imageSrc: Indeed,
      },
      {
        id: 2,
        title: "Copypress",
        imageSrc: Copypress,
      },
      {
        id: 2,
        title: "VPNOverview",
        imageSrc: VPNOverview,
      },
    ],
  },
];

const Services: React.FC<ServicesProps> = ({ activeService }) => {
  const activeProjects = services.find(
    (service) => service.title === activeService.toLowerCase()
  )?.projects;

  const handleClick = (title: string, urlService: string) => {
    const urlTitle = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    window.location.href = `/${urlService}/${urlTitle}`;
  };

  const handleProjectClick = (projectTitle: string) => {
    if (activeService.toLowerCase() === "projects and case studies") {
      handleClick(projectTitle, "projectsandcasestudies");
    } else if (activeService.toLowerCase() === "branding") {
      handleClick(projectTitle, "branding");
    } else if (
      activeService.toLowerCase() === "spline interactive 3d" &&
      projectTitle === "Hi, I’m Molang interactive 3D : click to interact"
    ) {
      window.location.href =
        "https://my.spline.design/molang-60ec6596005fa063aa54a577871aa834/";
    } else if (
      activeService.toLowerCase() === "spline interactive 3d" &&
      projectTitle === "Black Girl 3D"
    ) {
      window.location.href =
        "https://my.spline.design/blackgirl3d-7d478dcfacb23736d7b3eac706b42c3c/";
    } else if (
      activeService.toLowerCase() === "spline interactive 3d" &&
      projectTitle === "Room Practice"
    ) {
      window.location.href =
        "https://my.spline.design/roompractice-dd1c10c6aa69c7e6e6347cc2bcefdc18/";
    } else if (
      activeService.toLowerCase() === "copywriting" &&
      projectTitle === "Indeed"
    ) {
      window.location.href = "https://ng.indeed.com/";
    } else if (
      activeService.toLowerCase() === "copywriting" &&
      projectTitle === "Copypress"
    ) {
      window.location.href = "https://www.copypress.com/";
    } else if (
      activeService.toLowerCase() === "copywriting" &&
      projectTitle === "VPNOverview"
    ) {
      window.location.href =
        "https://vpnoverview.com/?_gl=1*16w9czs*_up*MQ.._ga*MjU5NTA3OTI2LjE3MTkxNDAzNTQ. _ga_V13F0K93MP*MTcxOTE0MDM1MS4xLjAuMTcxOTE0MDM1MS4wLjAuMA..";
    }
  };

  if (activeService.toLowerCase() === "about us") {
    return <AboutUs />;
  }

  return (
    <div className="grid gap-y-6 md:gap-y-8">
      {activeProjects ? (
        activeProjects.map((project: Project) => (
          <ProductBox
            key={project.id}
            project={project}
            onclick={() => handleProjectClick(project.title)}
          />
        ))
      ) : (
        <div></div>
      )}
      {activeService === "projects and case studies" && (
        <div className="hidden lg:block border-t border-secondary-orange-100/10 pt-6">
          <AllReviews />
        </div>
      )}
    </div>
  );
};

export default Services;
