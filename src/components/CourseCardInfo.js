import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const StyledH3 = styled.h3`
  text-align: left;
  font-size: 16px;
  margin-top: 20px;
`;

const cardInfoStyle = {
  fontSize: "14px",
  color: "#616161",
  marginTop: "6px",
};

const RatingSystem = styled.div`
  display: flex;
  align-items: baseline;

  p {
    font-size: 14px;
  }

  p:first-of-type {
    color: #ff9800;
    font-weight: bold;
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const CourseCardInfo = ({ courseInfo }) => {
  const { author, rating, reviewCount, title } = courseInfo;
  console.log({ courseInfo });
  return (
    <div>
      <StyledH3>{title}</StyledH3>
      <p style={cardInfoStyle}>{author}</p>
      <RatingSystem>
        <p>
          <span>{rating}</span>
        </p>
        <div>
          <StarRating rating={rating} />
        </div>
        <p>({reviewCount.toLocaleString("en-US")})</p>
      </RatingSystem>
    </div>
  );
};

export default CourseCardInfo;
