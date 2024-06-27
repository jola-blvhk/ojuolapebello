import React from "react";
import ProductBox from "../ProductBox.tsx";
import { Project } from "@/types/index.js";
import NFTTrace from "/public/services/NFTTrace.png";
import Hardsands from "/public/services/Hardsands.png";
import Spaces from "/public/services/Spaces.png";
import Becomy from "/public/services/Becomy.png";
import Molang from "/public/services/molang.png";
import Hardsandscard from "/public/services/hardsandscard.png";
import Mango from "/public/services/mango.png";

interface ServicesProps {
  activeService: string;
}

export const services = [
  {
    id: 1,
    title: "product design",
    projects: [
      {
        id: 1,
        title: "NFTrace by PIKD : An NFT gamification app",
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
        title: "Hi, I’m Molang interactive 3D : click to interact",
        imageSrc: Molang,
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
        title: "Mango Nomads",
        imageSrc: "/path/to/your/image.png",
      },
      {
        id: 2,
        title: "Hardsands CRM (Customer relationship Platform) Platform",
        imageSrc: "/path/to/your/image.png",
      },
    ],
  },
];

const Services: React.FC<ServicesProps> = ({ activeService }) => {
  const activeProjects = services.find(
    (service) => service.title === activeService.toLowerCase()
  )?.projects;

  const handleClick = (title: string) => {
    const urlTitle = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    window.location.href = `/productdesign/${urlTitle}`;
  };

  const handleProjectClick = (projectTitle: string) => {
    if (activeService.toLowerCase() === "product design") {
      handleClick(projectTitle);
    }
  };
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
        <div>Select a service to see the content</div>
      )}
    </div>
  );
};

export default Services;
