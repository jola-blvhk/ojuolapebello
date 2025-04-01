import React from "react";
import Image from "next/image";
import Art1 from "../../../public/art/one.png";
import Art2 from "../../../public/art/two.png";
import Art3 from "../../../public/art/three.png";
import Art4 from "../../../public/art/four.png";
import Art5 from "../../../public/art/five.png";
import Art6 from "../../../public/art/six.png";
import Art7 from "../../../public/art/seven.png";
import Art8 from "../../../public/art/eight.png";
import Art9 from "../../../public/art/nine.png";
import Art10 from "../../../public/art/ten.png";
import Art11 from "../../../public/art/eleven.png";
import Art12 from "../../../public/art/twelve.png";
import Art13 from "../../../public/art/thirteen.png";
import Art14 from "../../../public/art/fourteen.png";
import Art15 from "../../../public/art/fifteen.png";
import Art16 from "../../../public/art/sixteen.png";
import Art17 from "../../../public/art/seventeen.png";

const artData = [
  { id: 1, title: "Art 1", imageSrc: Art1 },
  { id: 2, title: "Art 2", imageSrc: Art2 },
  { id: 3, title: "Art 3", imageSrc: Art3 },
  { id: 4, title: "Art 4", imageSrc: Art4 },
  { id: 5, title: "Art 5", imageSrc: Art5 },
  { id: 6, title: "Art 6", imageSrc: Art6 },
  { id: 7, title: "Art 7", imageSrc: Art7 },
  { id: 8, title: "Art 8", imageSrc: Art8 },
  { id: 9, title: "Art 9", imageSrc: Art9 },
  { id: 10, title: "Art 10", imageSrc: Art10 },
  { id: 11, title: "Art 11", imageSrc: Art11 },
  { id: 12, title: "Art 12", imageSrc: Art12 },
  { id: 13, title: "Art 13", imageSrc: Art13 },
  { id: 14, title: "Art 14", imageSrc: Art14 },
  { id: 15, title: "Art 15", imageSrc: Art15 },
  { id: 16, title: "Art 16", imageSrc: Art16 },
  { id: 17, title: "Art 17", imageSrc: Art17 },
];

const Art = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px]  text-primary-black-90 text-sm md:text-base mx-auto">
      {artData.map((art) => (
        <div key={art.id} className="">
          <Image
            width={500}
            height={500}
            src={art.imageSrc.src}
            alt={art.title}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Art;
