import React from "react";
import styled from "styled-components";
import pythonLogo from "../images/pythonLogo.svg";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const CardImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 10px;
  background: linear-gradient(to top right, #3f03aa, #a855f7);
`;

const StyledH3 = styled.h3`
  text-align: left;
  font-size: 16px;
`;

const cardInfoStyle = {
  "fontSize": "14px",
};

const Coursecard = ({ courseName }) => {
  let courseHeading;
  let courseAuthor;
  let numberRating;
  let starRating;
  let numberOfReviews;
  let background;
  let logo;
  switch (courseName) {
    case "Python":
      courseHeading = "Python Bootcamp From Zero to Hero in Python";
      courseAuthor = "John Doe";
      numberRating = 4.1;
      numberOfReviews = "379,593";
      background = {
        "background": `linear-gradient(to top right, #3F03AA, #A855F7)`,
      };
      logo = pythonLogo;
      break;
    case "React":
      courseHeading = "Master React and Redux with React Router and Webpack";
      courseAuthor = "Stephen Grider";
      numberRating = 4.1;
      numberOfReviews = "379,593";
      background = {
        "background": `linear-gradient(to bottom left, #67D0FF, #2196F3)`,
      };
      break;
    case "Angular":
      courseHeading =
        "Angular Fundamentals from Scratch & Unit/Integration Testing";
      courseAuthor = "Jackie Danial";
      numberRating = 4.1;
      numberOfReviews = "379,593";
      background = {
        "background": `linear-gradient(to bottom left, #9C27B0, #F44336)`,
      };
      break;
    default:
      break;
  }
  return (
    <CardWrapper>
      <CardImage style={background}>
        <div
          style={{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "width": "100%",
            "height": "100%",
          }}
        >
          <div
            style={{
              "display": "flex",
              "justifyContent": "center",
              "alignItems": "center",
              "width": "100%",
              "height": "100%",
            }}
          >
            <div
              style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "backgroundColor": "white",
                "width": "60px",
                "height": "60px",
                "borderRadius": "8px",
              }}
            >
              <img
                src={logo}
                alt={`Course Logo`}
                style={{ "width": "34px", "height": "35px" }}
              />
            </div>
          </div>
        </div>
      </CardImage>
      <StyledH3>{courseHeading}</StyledH3>
      <p style={cardInfoStyle}>{courseAuthor}</p>
      <div style={{ ...cardInfoStyle, "display": "flex" }}>
        <p>{numberRating}</p>
        <div>{starRating}</div>
        <p>{numberOfReviews}</p>
      </div>
    </CardWrapper>
  );
};

export default Coursecard;
