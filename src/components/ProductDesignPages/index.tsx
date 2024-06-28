import React from "react";
import DetailsLayout from "../Layout/DetailsLayout";
import ReviewBox from "../Reviewbox/reviewbox";

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

        <h3 className="text-sm md:text-base text-primary-black-90">{longDescription}</h3>
      </div>
    </DetailsLayout>
  );
};

export default ProductDesignPages;
