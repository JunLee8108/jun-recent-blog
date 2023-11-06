import jun from "../../assets/JunLee.webp";
import html from "../../assets/html-5.webp";
import css from "../../assets/css-3.webp";
import js from "../../assets/js.webp";
import ts from "../../assets/typescript.webp";
import react from "../../assets/react.webp";
import vue from "../../assets/vue.webp";
import nextJS from "../../assets/nextjs.webp";
import nodeJS from "../../assets/nodejs.webp";
import mongo from "../../assets/mongo.webp";
import email from "../../assets/mail.webp";
import resume from "../../assets/resume.webp";
import linkedin from "../../assets/linkedin.webp";
import me from "../../assets/user.webp";
import portfolio from "../../assets/profile.webp";
import contact from "../../assets/contact-information.webp";
import developer from "../../assets/code.webp";
import developer2 from "../../assets/code2.webp";
import portfolio1 from "../../assets/hyundai-portfolio-1.webp";
import portfolio2 from "../../assets/hyundai-portfolio-2.webp";
import portfolio3 from "../../assets/hyundai-portfolio-3.webp";
import pg1 from "../../assets/pg1.webp";
import pg3 from "../../assets/pg3.webp";

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
    description: [
      {
        main: "TypeScript Basics",
        support:
          "TypeScript's basic types, such as string, number, boolean, array, tuple, enum, and any.",
      },
      {
        main: "Classes and Inheritance",
        support:
          "Define classes, interfaces for classes, and inheritance with TypeScript.",
      },
      {
        main: "Generics",
        support:
          "Know concept of generics, which allow me to write flexible and reusable functions and classes.",
      },
      {
        main: "Type Guards and Type Assertions",
        support:
          "Type guards to narrow down types within conditional statements.",
      },
      {
        main: "Union and Intersection Types",
        support:
          "Union types to handle values that can be one of several types, and intersection types to combine multiple types.",
      },
    ],
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
          "API requests using libraries like Axios or the built-in fetch API. Handle data from APIs and update the component state accordingly",
      },
      {
        main: "Component Architecture",
        support:
          "design and organize components in a modular and reusable manner.",
      },
    ],
  },
  {
    id: 4,
    name: "Vue.js",
    img: vue,
    description: [
      {
        main: "Vue Fundamentals:",
        support:
          "solid foundation by understanding Vue's core concepts: data binding, directives, computed properties, and watchers.",
      },
      {
        main: "Vue Router",
        support: "Dynamic routing, route guards, and nested routes.",
      },
      {
        main: "State Management with Vuex",
        support:
          "Manage complex application states using Vuex, Vue's official state management library, and know concepts like actions, mutations, modules, and getters.",
      },
      {
        main: "Lifecycle Hooks",
        support:
          "Familiar with Vue's component lifecycle hooks and understand when to use them for initialization, manipulation, or cleanup.",
      },
      {
        main: "Vue CLI and Tooling",
        support:
          "Use Vue CLI to scaffold, build, and manage Vue applications and Vue DevTools for efficient debugging.",
      },
      {
        main: "Testing with Jest",
        support:
          "Test Vue components and applications using the Jest testing framework.",
      },
    ],
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
    description: [
      {
        main: "Node.js Core Concepts",
        support:
          "Know core concepts of Node.js, such as the event loop, modules, streams, buffers, and the CommonJS module system.",
      },
      {
        main: "Express.js Framework",
        support:
          "Use Express.js to build APIs and web applications. Learn about routing, middleware, and request/response handling.",
      },
      {
        main: "Database Integration",
        support:
          "Use different databases like MongoDB, MySQL, PostgreSQL, or Redis. Know how to perform CRUD operations and manage connections.",
      },
      {
        main: "Authentication and Authorization",
        support:
          "Implement secure authentication and authorization mechanisms using packages like Passport.js or JWT.",
      },
      {
        main: "Websockets and Real-Time Applications",
        support:
          "implement real-time features using WebSockets and libraries like Socket.IO.",
      },
    ],
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
    id: 0,
    title: "VocaVista",
    img: pg1,
    iconURL1: "https://voca-vista.vercel.app/",
    iconURL2: "https://github.com/JunLee8108/VocaVista",
    iconBgColor: "#8c65d3",
    iconFgColor: "white",
    description: [
      "Korean E-Learning Platform with Adaptive Learning",
      "Created API endpoints to fetch data from MongoDB",
      "Utilized JWT and bcrypt for registration and login",
      "Developed a community feature allowing users to write, edit, and delete posts",
      "Incorporated a gamification feature to enhance the learning experience",
      "Implemented a modern and stylish design using updated CSS skills",
      "Optimized for mobile devices",
      "Tech stack: Next.js, TypeScript, CSS and MongoDB",
    ],
  },
  {
    id: 1,
    title: "IntelliCart",
    img: pg3,
    iconURL1: "https://main.dth2vcti3zp62.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/IntelliCart",
    iconBgColor: "#39ff14",
    iconFgColor: "white",
    description: [
      "AI-Powered E-Commerce Shop",
      "Implemented secure login authentication and authorization mechanisms using JWT in Node.js",
      "Developed user email verification using Nodemailer for registration and forgot password features",
      "Improved initial loading speed with React's 'lazy' and 'Suspense' features",
      "Developed an AI chatbot system",
      "Implemented a modern and stylish design using updated CSS skills",
      "Optimized for mobile devices",
      "Tech stack: React, TypeScript, CSS, Node.js, MongoDB, and Tensorflow",
    ],
  },
  {
    id: 2,
    title: "Refined Seoul",
    img: portfolio3,
    iconURL1: "https://main.d2t2zns6ieqh27.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/Refined",
    iconBgColor: "#E5C899",
    iconFgColor: "white",
    description: [
      "Fictional luxury fashion brand",
      "Utilized Redux with the Redux toolkit for state management",
      "Fetched JSON data locally using Axios",
      "Modularized components for improved code maintenance",
      "Implemented Lazy loading of components using React's 'lazy' and 'Suspense'",
      "Used scroll events to trigger dynamic web animations and effects",
      "Optimized for mobile devices",
      "Tech stack: React and CSS",
    ],
  },
  {
    id: 3,
    title: "Hyundai Motors",
    img: portfolio1,
    iconURL1: "https://main.dv90aq3ksc428.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/Hyundai",
    iconBgColor: "black",
    iconFgColor: "white",
    description: [
      "Redesign of Hyundai Motor's offical website",
      "Used CSS-in-JS libraries styled-components",
      "Implemented 3D car models using Three.js (currently in progress)",
      "Optimized for mobile devices",
      "Tech stack: React and CSS",
    ],
  },
  {
    id: 4,
    title: "Woojoon's Gallery",
    img: portfolio2,
    iconURL1: "https://main.d2uscgl8cg14gb.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/woojoon-gallery",
    iconBgColor: "#77DD66",
    iconFgColor: "white",
    description: [
      "Fine art painter Woojoon Kim's gallery",
      "Designed Virtual art gallery concept",
      "Optimized for mobile devices",
      "Tech stack: React and CSS",
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
  developer2,
  portfolio1,
  portfolio2,
};
