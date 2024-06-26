import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  imageSrc: StaticImageData | string; // Allow both StaticImageData and string
}
