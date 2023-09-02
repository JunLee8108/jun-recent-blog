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
    description: [
      {
        main: "Strong Foundation",
        support:
          "Master CSS fundamentals, including selectors, properties, values, and how styles cascade.",
      },
      {
        main: "Responsive Design",
        support:
          "Know how to create responsive layouts using techniques like media queries and flexbox/grid layouts.",
      },
      {
        main: "Browser Compatibility",
        support:
          "Familiar with cross-browser compatibility issues and learn how to write CSS that works consistently across different browsers.",
      },
      {
        main: "Animation and Transitions",
        support:
          "Master CSS animations and transitions to add subtle or eye-catching effects to your web interfaces.",
      },
      {
        main: "Performance Optimization",
        support:
          "Techniques to optimize CSS for performance, like minification, reducing redundancy, and using efficient selectors.",
      },
    ],
  },
  {
    id: 1,
    name: "JavaScript",
    img: js,
    description: [
      {
        main: "ES6+ Mastery",
        support:
          "Familiar with ES6+ features like arrow functions, destructuring, classes, template literals, async/await, and promises.",
      },
      {
        main: "Functional Programming",
        support:
          "Functional programming concepts like higher-order functions, pure functions, immutability, and working with arrays and objects.",
      },
      {
        main: "DOM Manipulation",
        support:
          "Know the Document Object Model (DOM) and how to manipulate it to create dynamic and interactive web interfaces",
      },
      {
        main: "Event Handling",
        support:
          "Event handling in JavaScript, including event propagation, delegation, and working with event listeners.",
      },
      {
        main: "AJAX and Fetch API",
        support:
          "Know how to make asynchronous requests to APIs using the Fetch API or XMLHttpRequest for dynamic data retrieval.",
      },
    ],
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
        main: "State Management",
        support:
          "Use state management libraries like Redux for managing complex application states.",
      },
      {
        main: "Routing",
        support:
          "Familiar with React Router or any other routing library to handle navigation in single-page applications.",
      },
      {
        main: "Responsive Design and Styling",
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
    description: [
      {
        main: "React Fundamentals",
        support:
          "Strong understanding of React, as Next.js builds upon React concepts.",
      },
      {
        main: "Pages and Routing",
        support:
          "Know Next.js's file-based routing system and dynamic routing capabilities.",
      },
      {
        main: "API Routes",
        support:
          "Know how to build API routes in Next.js, allowing me to create backend functionality within your frontend application.",
      },
      {
        main: "Data Fetching",
        support:
          "Various data fetching methods in Next.js, including getStaticProps, getServerSideProps, and getInitialProps.",
      },
      {
        main: "Authentication and Authorization",
        support:
          "Techniques for implementing user authentication and authorization in a Next.js application.",
      },
      {
        main: "Error Handling and Debugging",
        support:
          "Debugging techniques specific to Next.js, such as diagnosing server-side errors and rendering issues.",
      },
    ],
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
      "React for frontend development",
      "Redux for state management",
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
      "React for frontend development",
      "Used CSS-in-JS libraries styled-components",
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
