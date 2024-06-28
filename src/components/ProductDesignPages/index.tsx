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
          <ReviewBox
            review={review}
            reviewerJobPosition={reviewerJobPosition}
            reviewerName={reviewerName}
          />
        )}
      </div>
    </DetailsLayout>
  );
};

export default ProductDesignPages;
