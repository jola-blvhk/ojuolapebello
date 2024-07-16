import Avvvatars from "avvvatars-react";
import Image from "next/image";
import React from "react";

interface ReviewBoxProps {
  review: string;
  reviewerName: string;
  reviewerJobPosition: string;
}
const ReviewBox: React.FC<ReviewBoxProps> = ({
  review,
  reviewerName,
  reviewerJobPosition,
}) => {
  const renderLongDescription = (description: any) => {
    return description
      ?.split("\n\n")
      .map((paragraph: string, index: number) => (
        <p key={index} className="text-sm md:text-base pb-1">
          {paragraph}
        </p>
      ));
  };
  return (
    <div className="px-4 py-[18px] text-primary-black-90 md:px-[46px] md:py-7 rounded-[10px] border border-secondary-orange-100/30 grid gap-y-[14px] md:gap-y-6">
      <h3 className="text-sm md:text-base ">{renderLongDescription(review)}</h3>
      <div className="flex gap-x-[9px]">
        <Avvvatars value={reviewerName} style="character" size={53} />
        <div className="text-sm md:text-base">
          <h4 className="font-medium text-[#2c2c2c]">{reviewerName}</h4>
          <p className=" text-[#676767]">{reviewerJobPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
