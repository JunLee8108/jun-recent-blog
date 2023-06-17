import "./HomeSection.css";
import { SocialIcon } from "react-social-icons";
import jun from "../assets/JunLee.webp";
import html from "../assets/html-5.webp";
import css from "../assets/css-3.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import vue from "../assets/vue.webp";
import nextJS from "../assets/nextjs.webp";
import nodeJS from "../assets/nodejs.webp";

function HomeSection() {
  return (
    <>
      <div className="navbar-container">
        <ul>
          <div className="profile text-center">
            <h3>Jeong Hyun Lee</h3>
            <img src={jun} />
          </div>

          <div>
            <p>
              ‣ Hello, my name is Jeong Hyun Lee. I'm a UI/UX designer, and a
              frontend developer.
            </p>

            <div className="social-icons text-center">
              <SocialIcon
                url="https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
                bgColor="white"
                fgColor="black"
                style={{ marginRight: "15px", width: "35px", height: "35px" }}
              />
              <SocialIcon
                url="https://github.com/JunLee8108"
                bgColor="white"
                fgColor="black"
                style={{ marginRight: "15px", width: "35px", height: "35px" }}
              />
              <SocialIcon
                url="https://velog.io/@lejhn1"
                bgColor="white"
                fgColor="black"
                style={{ width: "35px", height: "35px" }}
              />
            </div>

            <div className="navbar-item">
              <li>About Me</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Contact Me</li>
            </div>
          </div>
        </ul>
      </div>

      <div className="home-top-1 container-layout">
        <div className="top-1-flexbox1">
          <h1 className="h1-green-left">Jeong Hyun Lee</h1>
          <h4 style={{ color: "grey" }}>Frontend Developer</h4>
          <p style={{ lineHeight: "30px" }}>
            UI/UX Designer for designing beautiful and intuitive user
            experiences, and a developer who focuses on writing clean and
            efficient code and specialized in frontend development for complex
            web apps.
          </p>
          <button>View Portfolio</button>
        </div>
        <div className="top-1-flexbox2"></div>
      </div>

      <div className="home-top-2 container-layout">
        <h1 className="h1-green-left">Tech Stack</h1>
        <div className="top-2-flex-container">
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={html}></img>
              <img src={css}></img>
            </div>
            <p>HTML & CSS</p>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={js}></img>
            </div>
            <p>Vanilla Javascript</p>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={react}></img>
            </div>
            <p>React</p>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={vue}></img>
            </div>
            <p>Vue</p>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nextJS}></img>
            </div>
            <p>Next.js</p>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nodeJS}></img>
            </div>
            <p>Node.js</p>
          </div>
        </div>
      </div>

      <div className="home-mid container-layout">
        <h1 className="h1-green-left">Portfolio</h1>
        <h3>1. Hyundai Motors</h3>
      </div>
    </>
  );
}

export default HomeSection;
