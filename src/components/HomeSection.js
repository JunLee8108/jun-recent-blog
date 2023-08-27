import "./HomeSection.css";
import { SocialIcon } from "react-social-icons";
import { useRef, useEffect, useState } from "react";
import { darkMode } from "./helpher/dark";
import { darkModeMobile } from "./helpher/darkMobile";
import SendingEmailJS from "./helpher/SendingEmailJS";
import { techStackImg } from "./helpher/imgData";
import { contactMeInfo } from "./helpher/imgData";
import {
  jun,
  me,
  portfolio,
  contact,
  developer,
  portfolioData,
} from "./helpher/imgData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeSection() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const clickToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    setModal(false);
  };
  const clickToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    setModal(false);
  };
  const clickToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setModal(false);
  };

  let [scrollContact, setScrollContact] = useState(false);
  let [scrollPortfolio, setScrollPortfolio] = useState(false);

  const scrollEvent = () => {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    // Mobile & Tablet & 4K
    if (scrollHeight > 3900 && scrollHeight < 5500) {
      if (window.scrollY > 1350) {
        setScrollPortfolio(true);
      } else {
        setScrollPortfolio(false);
      }
      if (window.scrollY > 2400) {
        setScrollContact(true);
      } else {
        setScrollContact(false);
      }
    }
    // Laptop & FHD & QHD
    else if (scrollHeight < 3900) {
      if (window.scrollY > 350) {
        setScrollPortfolio(true);
      } else {
        setScrollPortfolio(false);
      }
      if (window.scrollY > 1015) {
        setScrollContact(true);
      } else {
        setScrollContact(false);
      }
    }

    // console.log(document.documentElement.scrollHeight);
    // console.log(scrollHeight);
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

  const [isModal, setModal] = useState(false);

  const controlModal = () => {
    setModal((isModal) => !isModal);
  };

  const [modalDarkMode, setModalDarkMode] = useState(false);
  const [isDark, setDark] = useState(false);

  return (
    <div className="home">
      {/* Side Navbar */}

      <div className="navbar-mobile">
        <div className="navbar-mobile-flexbox">
          <h5>JEONG HYUN LEE</h5>
        </div>
        <div className="navbar-mobile-flexbox">
          {isModal ? (
            <FontAwesomeIcon
              icon="fa-solid fa-circle-xmark"
              size="lg"
              onClick={() => {
                controlModal();
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              size="lg"
              onClick={() => {
                controlModal();
              }}
            />
          )}
        </div>
      </div>

      {isModal ? (
        <div
          className={
            modalDarkMode
              ? "navbar-modal-container navbar-modal-container-darkmode"
              : "navbar-modal-container"
          }
        >
          <ul>
            <li onClick={clickToHome}>About Me</li>
            <li onClick={clickToPortfolio}>Portfolio</li>
            <li onClick={clickToContact}>Contact Me</li>
          </ul>
        </div>
      ) : null}

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

            <div className="navbar-item-mobile">
              <li>
                <label className="switch" htmlFor="dark">
                  <input
                    type="checkbox"
                    onClick={() => {
                      darkModeMobile();
                      setModalDarkMode((modalDarkMode) => !modalDarkMode);
                    }}
                    id="dark"
                  />
                  <span className="slider round"></span>
                </label>
                <label
                  htmlFor="dark"
                  style={{ cursor: "pointer", fontSize: "14px" }}
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-moon"
                    size="xl"
                    style={{ color: "yellow" }}
                  />
                </label>
              </li>
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
              <li
                onClick={() => {
                  darkMode();
                  setDark((isDark) => !isDark);
                }}
              >
                {isDark ? (
                  <FontAwesomeIcon
                    icon="fa-solid fa-toggle-on"
                    size="xl"
                    style={{ marginRight: "16px", color: "silver" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-solid fa-toggle-off"
                    size="xl"
                    style={{ marginRight: "16px", color: "white" }}
                  />
                )}
                Dark Mode
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
          {techStackImg.map(function (a, index) {
            return (
              <div className="top-2-flexbox" key={index}>
                <div style={{ width: "100%" }}>
                  {index === 0 ? (
                    <>
                      <img src={techStackImg[index].img} alt="tech-stack"></img>
                      <img
                        src={techStackImg[index].img2}
                        alt="tech-stack"
                      ></img>
                    </>
                  ) : (
                    <img src={techStackImg[index].img} alt="tech-stack"></img>
                  )}
                </div>
                <h4>{techStackImg[index].name}</h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Portfolio */}
      <div className="home-mid container-layout" ref={portfolioRef}>
        <h1 className="h1-green-left">
          Portfolio <span style={{ fontSize: "15px" }}>- Projects</span>
        </h1>

        <div
          className={`home-mid-textbox-container ${
            scrollPortfolio && "home-mid-textbox-container-scroll-event"
          }`}
        >
          {portfolioData.map((a, index) => {
            return (
              <div className="home-mid-textbox-flexbox" key={index}>
                <a href={portfolioData[index].iconURL1}>
                  <img src={portfolioData[index].img} alt="" />
                </a>

                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "0",
                  }}
                >
                  <h3 className="home-mid-title">
                    {portfolioData[index].title}
                  </h3>
                </div>

                <div className="home-mid-description">
                  {portfolioData[index].description.map((a, index2) => {
                    return (
                      <h4 style={{ marginBottom: "0" }} key={index2}>
                        {portfolioData[index].description[index2]}
                      </h4>
                    );
                  })}
                </div>

                <div className="home-mid-textbox">
                  <h5>Demo: </h5>
                  <SocialIcon
                    url={portfolioData[index].iconURL1}
                    bgColor={portfolioData[index].iconBgColor}
                    fgColor={portfolioData[index].iconFgColor}
                    className="portfolio-icon"
                    style={{
                      width: "28px",
                      height: "28px",
                      marginRight: "30px",
                    }}
                  />
                  <h5>Github: </h5>
                  <SocialIcon
                    url={portfolioData[index].iconURL2}
                    bgColor={portfolioData[index].iconBgColor}
                    fgColor={portfolioData[index].iconFgColor}
                    className="portfolio-icon"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
              </div>
            );
          })}
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
            <SendingEmailJS />
          </div>
          <div className="mid-3-flexbox2">
            {contactMeInfo.map(function (a, index) {
              return (
                <div className="flexbox" key={index}>
                  <h2>{contactMeInfo[index].name}</h2>
                  <a href={contactMeInfo[index].aHref}>
                    <img src={contactMeInfo[index].img} alt="emoticon" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
