import React from "react";
import styled from "styled-components";
import brandingImage from "../images/branding.svg";

const StyledHero = styled.div`
  background-color: #f5f5f5;
  height: 502px;
  width: 100 vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  margin-top: 13rem;
`;

const StyledH1 = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 32px;
  margin-bottom: 12px;
`;

const StyledP = styled.p`
  font-size: 16px;
  margin-top: 0px;
`;

const StyledButton = styled.button`
  color: white;
  font-size: 14px;
  background: #3f03aa;
  border: 2px solid #3f03aa;
  border-radius: 6px;
  width: 156px;
  height: 36px;
  margin-top: 22px;
`;

const StyledImg = styled.img`
  width: 492px;
  height: 357px;
  margin-top: -23px;
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledH1>Learn in-demand tech skills in half the time</StyledH1>
      <StyledP>
        Hands-on courses help you learn without the hassle of setup
      </StyledP>
      <StyledButton>Explore Courses</StyledButton>
      <StyledImg src={brandingImage} />
    </StyledHero>
  );
};

export default Hero;
