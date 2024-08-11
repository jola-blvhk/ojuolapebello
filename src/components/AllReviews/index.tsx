import React from "react";
import { AllReviewsforProjects } from "@/constants/reviews";
import ReviewBox from "../Reviewbox/reviewbox";

const AllReviews = () => {
  return (
    <div>
      <h1 className="font-semibold text-base md:text-lg lg:text-xl">
        Feedback from our clients
      </h1>

      <div className="flex flex-col gap-y-6 md:gap-y-8 mt-4 md:mt-7">
        {AllReviewsforProjects?.map((review, index) => {
          const alignmentClass = index % 2 === 0 ? "self-start" : "self-end";
          return (
            <div key={index} className={`w-[90%]  ${alignmentClass}`}>
              <ReviewBox
                review={review?.review}
                reviewerName={review?.reviewerName}
                reviewerJobPosition={review?.reviewerJobPosition}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllReviews;
