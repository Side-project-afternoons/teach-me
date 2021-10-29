import React from "react";
import styled from "styled-components";
import { courses } from "../listOfCourses";
import CourseCard from "./CourseCard";

const StyledWrapper = styled.div`
  width: 942px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 41px;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 32px;
  margin: 0px;
`;

const pStyle = {
  "fontSize": "16px",
  "textAlign": "left",
  "marginTop": "7px",
};

const StyledNav = styled.nav`
  width: 100%;
  margin: 30px 0px;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    li {
      color: #bdbdbd;
      cursor: pointer;
      text-decoration: none;
      list-style-type: none;
      font-weight: bold;
      font-size: 16px;
      &.active {
        color: black;
      }
    }
  }
`;

const StyledDiv = styled.div`
  border: 1px solid #bdbdbd;
  width: 100%;
  padding: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledH2 = styled.h2`
  font-size: 22px;
`;

const CourseCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-top: 40px;
`;

const Selectionofcourses = () => {
  return (
    <StyledWrapper>
      <StyledH1>A broad selection of courses</StyledH1>
      <p style={pStyle}>
        Choose from 155,000 online video courses with new additions published
        every month
      </p>
      <StyledNav>
        <ul>
          <li className="active">Latest</li>
          <li>Python</li>
          <li>Excel</li>
          <li>Web Development</li>
          <li>Javascript</li>
          <li>DataScience</li>
          <li>AWS Certification</li>
          <li>Drawing</li>
        </ul>
      </StyledNav>
      <StyledDiv>
        <StyledH2>
          Expand your career opportunities with Latest Technologies
        </StyledH2>
        <p style={pStyle}>
          Instructors on Teachme specialize in everything from software
          development to data analysis, and are known for their effective,
          friendly instruction for students of all levels.
        </p>
        <CourseCards>
          {courses.slice(0, 3).map((course) => {
            return (
              <CourseCard
                key={`${course.name}:${course.title}`}
                course={course}
              />
            );
          })}
        </CourseCards>
      </StyledDiv>
    </StyledWrapper>
  );
};

export default Selectionofcourses;
