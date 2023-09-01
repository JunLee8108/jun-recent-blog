import jun from "../../assets/JunLee.webp";
import html from "../../assets/html-5.webp";
import css from "../../assets/css-3.webp";
import js from "../../assets/js.webp";
import ts from "../../assets/typescript.webp";
import react from "../../assets/react.webp";
import vue from "../../assets/vue.webp";
import nextJS from "../../assets/nextjs.webp";
import nodeJS from "../../assets/nodejs.webp";
import email from "../../assets/mail.webp";
import resume from "../../assets/resume.webp";
import linkedin from "../../assets/linkedin.webp";
import me from "../../assets/user.webp";
import portfolio from "../../assets/profile.webp";
import contact from "../../assets/contact-information.webp";
import developer from "../../assets/code.webp";
import portfolio1 from "../../assets/hyundai-portfolio-1.webp";
import portfolio2 from "../../assets/hyundai-portfolio-2.webp";
import portfolio3 from "../../assets/hyundai-portfolio-3.webp";

const techStackImg = [
  {
    id: 0,
    name: "HTML & CSS",
    img: html,
    img2: css,
    description: [],
  },
  {
    id: 1,
    name: "JavaScript",
    img: js,
    description: [],
  },
  {
    id: 2,
    name: "TypeScript",
    img: ts,
    description: [],
  },
  {
    id: 3,
    name: "React",
    img: react,
    description: [
      {
        main: "State management",
        support:
          "Understand state management libraries like Redux for managing complex application states.",
      },
      {
        main: "Routing",
        support:
          "Familiarize myself with React Router or any other routing library to handle navigation in single-page applications.",
      },
      {
        main: "Responsive design and styling",
        support:
          "Master CSS and CSS frameworks like Bootstrap or CSS-in-JS libraries like styled-components.",
      },
      {
        main: "API Integration",
        support:
          "Make API requests using libraries like Axios or the built-in fetch API.",
      },
    ],
  },
  {
    id: 4,
    name: "Vue.js",
    img: vue,
    description: [],
  },
  {
    id: 5,
    name: "Next.js",
    img: nextJS,
    description: [],
  },
  {
    id: 6,
    name: "Node.js",
    img: nodeJS,
    description: [],
  },
];

const contactMeInfo = [
  {
    id: 0,
    name: "EMAIL",
    img: email,
    aHref: "mailto:lejhn1@gmail.com",
  },
  {
    id: 1,
    name: "LINKEDIN",
    img: linkedin,
    aHref: "https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/",
  },
  {
    id: 2,
    name: "RESUME",
    img: resume,
    aHref:
      "https://drive.google.com/file/d/14UDP8z1ogfYVtx4Z5vE08H7toz7ZxRkt/view?usp=sharing",
  },
];

const portfolioData = [
  {
    id: 1,
    title: "Refined Seoul",
    img: portfolio3,
    iconURL1: "https://main.d2t2zns6ieqh27.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/Refined",
    iconBgColor: "#E5C899",
    iconFgColor: "white",
    description: [
      "Fictional luxury fashion brand",
      "'Refined Seoul'",
      "Used React & Redux for frontend development",
      "Fully responsive on mobile",
    ],
  },
  {
    id: 2,
    title: "Hyundai Motors",
    img: portfolio1,
    iconURL1: "https://main.dv90aq3ksc428.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108",
    iconBgColor: "black",
    iconFgColor: "white",
    description: [
      "Redesign of Hyundai Motor's offical website",
      "Explore all vehicles and build your own car",
      "Used React for frontend development",
      "Used Styled Component",
      "Fully responsive on mobile",
    ],
  },
  {
    id: 3,
    title: "Woojoon's Gallery",
    img: portfolio2,
    iconURL1: "https://main.d2uscgl8cg14gb.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/woojoon-gallery",
    iconBgColor: "#77DD66",
    iconFgColor: "white",
    description: [
      "Fine art painter Woojoon Kim's gallery",
      "Virtual art gallery concept",
      "Used React for frontend development",
      "Fully responsive on mobile",
    ],
  },
];

export {
  jun,
  techStackImg,
  contactMeInfo,
  portfolioData,
  email,
  resume,
  linkedin,
  me,
  portfolio,
  contact,
  developer,
  portfolio1,
  portfolio2,
};
