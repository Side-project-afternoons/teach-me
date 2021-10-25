import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const starStyle = {
  color: "#FF9800",
  height: "15px",
  width: "15px",
};

const StarRating = ({ rating }) => {
  let filledStarCount = Math.floor(rating);
  let outputRating = [];
  for (let i = 0; i < 5; i++) {
    if (filledStarCount > 0) {
      outputRating.push(1);
    } else {
      outputRating.push(0);
    }
    filledStarCount -= 1;
  }
  return (
    <div>
      {outputRating.map((char) => {
        if (char === 1) {
          return <FontAwesomeIcon icon={faStar} style={starStyle} />;
        } else {
          return <FontAwesomeIcon icon={farStar} style={starStyle} />;
        }
      })}
    </div>
  );
};

export default StarRating;
