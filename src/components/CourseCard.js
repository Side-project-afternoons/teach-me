import React from "react";
import styled from "styled-components";
import CourseCardImage from "./CourseCardImage";
import CourseCardInfo from "./CourseCardInfo";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const Coursecard = ({ course }) => {
  console.log(course);
  return (
    <CardWrapper>
      <CourseCardImage courseImage={course.courseImage} />
      <CourseCardInfo courseInfo={course.courseInfo} />
    </CardWrapper>
  );
};

export default Coursecard;
