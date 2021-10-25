import React from "react";
import styled from "styled-components";

const Gradient = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const FadedLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const Logo = styled.img`
  aspect-ratio: 1/1;
  width: 35px;
`;

const CourseCardImage = ({ courseImage }) => {
  const { direction, logo, start, stop } = courseImage;

  return (
    <Gradient
      style={{
        background: `linear-gradient(${direction}, ${start}, ${stop})`,
      }}
    >
      <FadedLogo>
        <WhiteBox>
          <Logo src={logo} />
        </WhiteBox>
      </FadedLogo>
    </Gradient>
  );
};

export default CourseCardImage;
