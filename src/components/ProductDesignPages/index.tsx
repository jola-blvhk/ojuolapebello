import React, { useState } from "react";
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
  descriptionImage, // Default image used on other pages
  screensImage, // Optional for specific pages
  researchImage, // Optional for specific pages
}: any) => {
  // If both screensImage and researchImage exist, use state for toggling
  const hasMultipleImages = screensImage && researchImage;
  const [selectedTab, setSelectedTab] = useState<"screens" | "research">(
    "screens"
  );

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

        {/* Show toggle buttons only if multiple images exist */}
        {hasMultipleImages && (
          <div className="flex gap-x-[7px]  mx-auto mt-4 w-fit ">
            <button
              onClick={() => setSelectedTab("screens")}
              className={`px-4 py-[10px] rounded-[10px] border-2 w-[100px] sm:w-[160px]  ${
                selectedTab === "screens"
                  ? "bg-[#0D1D4A] text-white"
                  : "border-[#D9D9D9] text-[#444444]"
              }`}
            >
              Screens
            </button>
            <button
              onClick={() => setSelectedTab("research")}
              className={`px-4 py-[10px] rounded-[10px] border-2 w-[100px] sm:w-[160px] ${
                selectedTab === "research"
                  ? "bg-[#0D1D4A]  text-white"
                  : "border-[#D9D9D9] text-[#444444]"
              }`}
            >
              Research
            </button>
          </div>
        )}

        {/* Show the selected image if toggle is available, otherwise show the default image */}
        <div className="relative w-full h-auto mt-3 md:mt-4 lg:mt-5">
          <Image
            layout="intrinsic"
            src={
              hasMultipleImages
                ? selectedTab === "screens"
                  ? screensImage
                  : researchImage
                : descriptionImage // Default for pages that don’t have multiple images
            }
            alt={
              hasMultipleImages
                ? selectedTab === "screens"
                  ? "Screens"
                  : "Research"
                : "Project Image"
            }
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </DetailsLayout>
  );
};

export default ProductDesignPages;
