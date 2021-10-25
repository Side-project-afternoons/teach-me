import pythonLogo from "./images/pythonLogo.svg";
import reactLogo from "./images/reactLogo.svg";
import angularLogo from "./images/angularLogo.svg";

export const courses = [
  {
    name: "Python",
    courseInfo: {
      title: "Python Bootcamp From Zero to Hero in Python",
      author: "John Doe",
      rating: 4.1,
      reviewCount: 379593,
    },
    courseImage: {
      logo: pythonLogo,
      start: "#3F03AA",
      stop: "#A855F7",
      direction: "to top right",
    },
  },
  {
    name: "React",
    courseInfo: {
      title: "Master React and Redux with React Router and Webpack",
      author: "Stephen Grider",
      rating: 4.9,
      reviewCount: 472537,
    },
    courseImage: {
      logo: reactLogo,
      start: "#67D0FF",
      stop: "#2196F3",
      direction: "to bottom left",
    },
  },
  {
    name: "Angular",
    courseInfo: {
      title: "Angular Fundamentals from Scratch & Unit/Integration",
      author: "Jackie Danial",
      rating: 3.2,
      reviewCount: 1235,
    },
    courseImage: {
      logo: angularLogo,
      start: "#9C27B0",
      stop: "#F44336",
      direction: "to bottom left",
    },
  },
];
