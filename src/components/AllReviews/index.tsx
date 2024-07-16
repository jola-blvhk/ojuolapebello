import React from "react";
import { AllReviewsforProjects } from "@/constants/reviews";
import ReviewBox from "../Reviewbox/reviewbox";

const AllReviews = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg md:text-xl">
        Feedback from Our Clients
      </h1>

      <div className="flex flex-col gap-y-6 md:gap-y-8 mt-4 md:mt-7">
        {AllReviewsforProjects?.map((review, index) => {
          const alignmentClass = index % 2 === 0 ? "self-start" : "self-end";
          return (
            <div
              key={index}
              className={`md:w-[90%]  ${alignmentClass}`}
            >
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
