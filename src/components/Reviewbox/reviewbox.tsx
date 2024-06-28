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
  return (
    <div>
      <h3>{review}</h3>
      <div className="flex">
        <Avvvatars value={reviewerName} style="character" size={50} />
        <div>
          <h4>{reviewerName}</h4>
          <p>{reviewerJobPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
