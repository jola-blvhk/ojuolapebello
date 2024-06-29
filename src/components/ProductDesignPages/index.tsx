import React from "react";
import DetailsLayout from "../Layout/DetailsLayout";
import ReviewBox from "../Reviewbox/reviewbox";
import Image from "next/image";

const ProductDesignPages = ({
  brandBgImage,
  brandLogo,
  brandName,
  description,
  width,
  height,
  review,
  reviewerJobPosition,
  reviewerName,
  longDescription,
  descriptionImage,
}: any) => {
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
        {review && (
          <div className="mb-6 md:mb-10 lg:mb-12">
            <ReviewBox
              review={review}
              reviewerJobPosition={reviewerJobPosition}
              reviewerName={reviewerName}
            />
          </div>
        )}

        <h3 className="text-sm md:text-base text-primary-black-90">
          {longDescription}
        </h3>

        <div className="relative w-full h-auto  mt-3 md:mt-4 lg:mt-5">
          <Image
            layout="intrinsic"
            src={descriptionImage}
            alt="project images"
            className=" object-contain w-full h-full"
          />
        </div>
      </div>
    </DetailsLayout>
  );
};

export default ProductDesignPages;
