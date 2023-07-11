
import jun from "../../assets/JunLee.webp";
import html from "../../assets/html-5.webp";
import css from "../../assets/css-3.webp";
import js from "../../assets/js.webp";
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

const techStackImg = [
    { 
        id: 0, 
        name: "HTML & CSS",
        img: html,
        img2: css,
    },
    {
        id: 1,
        name: "JavaScript",
        img: js
    },
    {
        id: 2,
        name: "React",
        img: react
    },
    {
        id: 3,
        name: "Vue",
        img: vue
    },
    {
        id: 4,
        name: "Next.js",
        img: nextJS
    },
    {
        id: 5,
        name: "Node.js",
        img: nodeJS
    },
]

const contactMeInfo = [
    {
        id: 0,
        name: "Email",
        img: email,
        aHref: "mailto:lejhn1@gmail.com"
    },
    {
        id: 1,
        name: "LinkedIn",
        img: linkedin,
        aHref: "https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
    },
    {
        id: 2,
        name: "Resume",
        img: resume,
        aHref: "#"
    },
]

export {jun, techStackImg, contactMeInfo, email, resume, linkedin, me, portfolio, contact, developer, portfolio1, portfolio2};