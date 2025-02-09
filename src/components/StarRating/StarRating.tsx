import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegStar } from "@fortawesome/free-regular-svg-icons";

// 점수를 받아서 별을 렌더링하는 컴포넌트
interface StarRatingProps {
  score: number;
}

const StarRating: React.FC<StarRatingProps> = ({ score }) => {
  const fullStars = Math.floor(score); // 완전한 별 개수
  const halfStars = score % 1 >= 0.5 ? 1 : 0; // 반 별 개수
  const emptyStars = 5 - fullStars - halfStars; // 빈 별 개수

  const stars = [
    ...Array(fullStars).fill(faStar), // 가득 찬 별
    ...Array(halfStars).fill(faStarHalfAlt), // 반 별
    ...Array(emptyStars).fill(faRegStar), // 빈 별
  ];

  return (
    <div>
      {stars.map((star, index) => (
        <FontAwesomeIcon key={index} icon={star} style={{ color: "#ffcc00", fontSize: "16px" }} />
      ))}
    </div>
  );
};

export default StarRating;
