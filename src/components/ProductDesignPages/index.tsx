import React from "react";
import DetailsLayout from "../Layout/DetailsLayout";
import { StaticImageData } from "next/image";

interface ProductDesignPagesProps {
  brandBgImage: any;
  brandLogo: any;
  brandName: any;
  description: any;
  width: any;
  height: any;
}

const ProductDesignPages: React.FC<ProductDesignPagesProps> = ({
  brandBgImage,
  brandLogo,
  brandName,
  description,
  width,
  height,
}) => {
  return (
    <DetailsLayout
      brandBgImage={brandBgImage}
      brandLogo={brandLogo}
      brandName={brandName}
      description={description}
      width={width}
      height={height}
    >
      <div>
        <h1>{brandName}</h1>
        <p>{description}</p>

        {/* Add more content here as needed */}
      </div>
    </DetailsLayout>
  );
};

export default ProductDesignPages;
