import Image from "next/image";
import React from "react";

interface ProductBoxProps {
  title: string;
  imageSrc: string;
}
const ProductBox: React.FC<ProductBoxProps> = ({ title, imageSrc }) => {
  return (
    <div>
      <Image src={imageSrc} alt="title" />
      <div>
        <h4></h4>
      </div>
    </div>
  );
};

export default ProductBox;
