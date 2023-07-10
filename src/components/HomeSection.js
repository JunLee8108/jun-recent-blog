import "./HomeSection.css";
import { SocialIcon } from "react-social-icons";
import { useRef, useEffect, useState } from "react";
import {
  jun,
  html,
  css,
  js,
  react,
  vue,
  nextJS,
  nodeJS,
  email,
  resume,
  linkedin,
  me,
  portfolio,
  contact,
  developer,
  portfolio1,
  portfolio2,
} from "./helpher/imgData";
import { darkMode } from "./helpher/dark";
import SendingEmailJS from "./helpher/SendingEmailJS";

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

  let [scrollContact, setScrollContact] = useState(false);
  let [scrollPortfolio, setScrollPortfolio] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 300 && window.scrollY < 1500) {
      setScrollPortfolio(true);
    } else {
      setScrollPortfolio(false);
    }

    if (window.scrollY > 1286) {
      setScrollContact(true);
    } else {
      setScrollContact(false);
    }

    // console.log(window.scrollY);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      window.addEventListener("scroll", scrollEvent);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className="home">
      {/* Side Navbar */}
      <div className="navbar-container">
        <ul>
          <div className="profile text-center">
            <h3>Jeong Hyun Lee</h3>
            <img src={jun} alt="Jun's Profile" />
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
                <img src={me} alt="About emoticon"></img>
                About Me
              </li>
              <li onClick={clickToPortfolio}>
                <img src={portfolio} alt="Portfolio emoticon"></img>
                Portfolio
              </li>
              <li onClick={clickToContact}>
                <img src={contact} alt="Contact emoticon"></img>
                Contact Me
              </li>
              <li>
                <label className="switch" htmlFor="dark">
                  <input type="checkbox" onClick={darkMode} id="dark" />
                  <span className="slider round"></span>
                </label>
                <label htmlFor="dark" style={{ cursor: "pointer" }}>
                  Dark Mode
                </label>
              </li>
            </div>
          </div>
        </ul>
      </div>

      {/* About Me 1 - Introduction */}
      <div className="home-top-1 container-layout" ref={homeRef}>
        <div className="top-1-flexbox1">
          <h1 className="h1-green-left">Jeong Hyun Lee</h1>
          <div className="top-1-introBox">
            <h4 style={{ color: "grey" }}>Frontend Developer</h4>
            <p style={{ lineHeight: "30px" }}>
              UI/UX Designer for designing beautiful and intuitive user
              experiences, and a developer who focuses on writing clean and
              efficient code and specialized in frontend development for complex
              web apps.
            </p>
            <button
              onClick={clickToPortfolio}
              className="top-1-flexbox1-button"
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="top-1-flexbox2">
          <img src={developer} alt="Developer emoticon"></img>
        </div>
      </div>

      {/* About Me 2 - Tech Stack */}
      <div className="home-top-2 container-layout">
        <h1 className="h1-green-left">Tech Stack</h1>
        <div className="top-2-flex-container">
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={html} alt="HTML"></img>
              <img src={css} alt="CSS"></img>
            </div>
            <h4>HTML & CSS</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={js} alt="JavaScript"></img>
            </div>
            <h4>Vanilla Javascript</h4>
          </div>
          <div className="top-2-flexbox">
            <img src={react} alt="React"></img>

            <h4>React</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={vue} alt="Vue"></img>
            </div>
            <h4>Vue</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nextJS} alt="NextJS"></img>
            </div>
            <h4>Next.js</h4>
          </div>
          <div className="top-2-flexbox">
            <div style={{ width: "100%" }}>
              <img src={nodeJS} alt="NodeJS"></img>
            </div>
            <h4>Node.js</h4>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="home-mid container-layout" ref={portfolioRef}>
        <h1 className="h1-green-left">Portfolio</h1>

        <div
          className={`home-mid-textbox-container ${
            scrollPortfolio && "home-mid-textbox-container-scroll-event"
          }`}
        >
          <h3>1. Hyundai Motors</h3>
          <img src={portfolio1} alt="Hyundai motors main" />
          <div className="home-mid-textbox">
            <h4>Demo: </h4>
            <SocialIcon
              url="https://main.dv90aq3ksc428.amplifyapp.com/"
              bgColor="black"
              fgColor="white"
              className="portfolio-icon"
              style={{ width: "30px", height: "30px", marginRight: "30px" }}
            />
            <h4>Github: </h4>
            <SocialIcon
              url="https://github.com/JunLee8108"
              bgColor="black"
              fgColor="white"
              className="portfolio-icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>

          <h3>2. Woojoon's Gallery</h3>
          <img src={portfolio2} alt="Woojoon's gallery main" />
          <div className="home-mid-textbox">
            <h4>Demo: </h4>
            <SocialIcon
              url="https://main.d2uscgl8cg14gb.amplifyapp.com/"
              bgColor="rgb(85, 88, 218)"
              fgColor="white"
              className="portfolio-icon"
              style={{ width: "30px", height: "30px", marginRight: "30px" }}
            />
            <h4>Github: </h4>
            <SocialIcon
              url="https://github.com/JunLee8108/woojoon-gallery"
              bgColor="rgb(85, 88, 218)"
              fgColor="white"
              className="portfolio-icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className="home-mid-3 container-layout" ref={contactRef}>
        <h1 className="h1-green-left">Contact Me</h1>
        <div
          className={`mid-3-flex-container ${
            scrollContact && "mid-3-scroll-event"
          }`}
        >
          <div className="mid-3-flexbox1">
            <SendingEmailJS></SendingEmailJS>
          </div>
          <div className="mid-3-flexbox2">
            <div className="flexbox">
              <h2>Email</h2>
              <a href="mailto:lejhn1@gmail.com">
                <img src={email} alt="Email emoticon" />
              </a>
            </div>
            <div className="flexbox">
              <h2>Linkedin</h2>
              <a href="https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/">
                <img src={linkedin} alt="LinkedIn emoticon" />
              </a>
            </div>
            <div className="flexbox">
              <h2>Resume</h2>
              <img src={resume} alt="Resume emoticon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
