import "./HomeSection.css";
import { SocialIcon } from "react-social-icons";
import { useRef } from "react";
import jun from "../assets/JunLee.webp";
import html from "../assets/html-5.webp";
import css from "../assets/css-3.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import vue from "../assets/vue.webp";
import nextJS from "../assets/nextjs.webp";
import nodeJS from "../assets/nodejs.webp";
import email from "../assets/mail.png";
import resume from "../assets/resume.png";
import linkedin from "../assets/linkedin.png";
import me from "../assets/user.png";
import portfolio from "../assets/profile.png";
import contact from "../assets/contact-information.png";

function HomeSection() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const clickToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
                className="icon"
                style={{ marginRight: "15px", width: "35px", height: "35px" }}
              />
              <SocialIcon
                url="https://github.com/JunLee8108"
                bgColor="white"
                fgColor="black"
                className="icon"
                style={{ marginRight: "15px", width: "35px", height: "35px" }}
              />
              <SocialIcon
                url="https://velog.io/@lejhn1"
                bgColor="white"
                fgColor="black"
                className="icon"
                style={{ width: "35px", height: "35px" }}
              />
            </div>

            <div className="navbar-item">
              <li onClick={clickToHome}>
                <img src={me}></img>
                About Me
              </li>
              <li onClick={clickToPortfolio}>
                <img src={portfolio}></img>
                Portfolio
              </li>
              <li onClick={clickToContact}>
                <img src={contact}></img>
                Contact Me
              </li>
              <li>Dark Mode</li>
            </div>
          </div>
        </ul>
      </div>

      <div className="home-top-1 container-layout" ref={homeRef}>
        <div className="top-1-flexbox1">
          <h1 className="h1-green-left">Jeong Hyun Lee</h1>
          <h4 style={{ color: "grey" }}>Frontend Developer</h4>
          <p style={{ lineHeight: "30px" }}>
            UI/UX Designer for designing beautiful and intuitive user
            experiences, and a developer who focuses on writing clean and
            efficient code and specialized in frontend development for complex
            web apps.
          </p>
          <button onClick={clickToPortfolio}>View Portfolio</button>
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
            <h4>HTML & CSS</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={js}></img>
            </div>
            <h4>Vanilla Javascript</h4>
          </div>
          <div className="top-2-flexbox">
            <img src={react}></img>

            <h4>React</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={vue}></img>
            </div>
            <h4>Vue</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nextJS}></img>
            </div>
            <h4>Next.js</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nodeJS}></img>
            </div>
            <h4>Node.js</h4>
          </div>
        </div>
      </div>

      <div className="home-mid container-layout" ref={portfolioRef}>
        <h1 className="h1-green-left">Portfolio</h1>
        <h3>1. Hyundai Motors</h3>
      </div>

      <div className="home-mid-3 container-layout" ref={contactRef}>
        <h1 className="h1-green-left">Contact Me</h1>

        <div className="mid-3-flex-container">
          <div className="mid-3-flexbox1">
            <form>
              <h2>Get In Touch With Me</h2>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="firstName">
                    <h4>First Name</h4>
                  </label>
                  <input type="text" id="firstName"></input>
                </div>
                <div style={{ width: "100%" }}>
                  <label htmlFor="lastName">
                    <h4>Last Name</h4>
                  </label>
                  <input type="text" id="lastName"></input>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="message">
                    <h4>Message</h4>
                  </label>
                  <textarea id="message"></textarea>
                </div>
              </div>

              <button type="submit" className="green-button">
                Submit
              </button>
            </form>
          </div>
          <div className="mid-3-flexbox2">
            <div className="flexbox">
              <h2>Email</h2>
              <a href="mailto:lejhn1@gmail.com">
                <img src={email} />
              </a>
            </div>
            <div className="flexbox">
              <h2>Linkedin</h2>
              <a href="https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/">
                <img src={linkedin} />
              </a>
            </div>
            <div className="flexbox">
              <h2>Resume</h2>
              <img src={resume} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
