import React from "react";
import styled from "styled-components";
import pythonLogo from "../images/pythonLogo.svg";

const Gradient = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
`;

const FadedLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.25;
`;

const WhiteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  z-index: 2;
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
      <FadedLogo
        style={{
          background: `url("${logo}")`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <WhiteBox>
        <Logo src={logo} />
      </WhiteBox>
    </Gradient>
  );
};

export default CourseCardImage;
