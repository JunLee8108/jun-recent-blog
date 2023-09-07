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
  developer2,
} from "./helpher/imgData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portfolio from "./helpher/Portfolio";
import TechStackModal from "./helpher/TechStackModal";

function HomeSection() {
  useEffect(() => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      let count = 0;
      const bg1 = document.querySelector(".top-1-flexbox2-emt1");
      const bg2 = document.querySelector(".top-1-flexbox2-emt2");
      let timer = setInterval(() => {
        if (count === 0) {
          bg1.style.opacity = 0;
          bg2.style.opacity = 1;
          count += 1;
        } else if (count === 1) {
          bg1.style.opacity = 1;
          bg2.style.opacity = 0;
          count -= 1;
        }
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const [controlStackModal, setControlStackModal] = useState(false);
  const [techStackModal, setTechStackModal] = useState(false);
  const [techStackName, setTechStackName] = useState("");
  const isMounted = useRef(false);

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
    const BrowserWidth = document.body.scrollWidth;

    // 4K
    if (BrowserWidth >= 3840) {
      if (window.scrollY > 445) {
        setScrollPortfolio(true);
      } else {
        setScrollPortfolio(false);
      }
      if (window.scrollY > 1300) {
        setScrollContact(true);
      } else {
        setScrollContact(false);
      }
    }

    // Laptop, FHD, QHD
    if (BrowserWidth <= 2560) {
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

    // Tablet
    if (BrowserWidth >= 768 && BrowserWidth <= 1280) {
      if (window.scrollY > 1053) {
        setScrollPortfolio(true);
      } else {
        setScrollPortfolio(false);
      }
      if (window.scrollY > 3350) {
        setScrollContact(true);
      } else {
        setScrollContact(false);
      }
    }

    // Phone
    if (BrowserWidth < 768) {
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

    // console.log(document.documentElement.scrollHeight);
    // console.log(document.body.scrollWidth);
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

  useEffect(() => {
    if (isMounted.current) {
      let timer;
      if (controlStackModal) {
        setTechStackModal(true);
      } else if (!controlStackModal) {
        timer = setTimeout(() => {
          setTechStackModal(false);
        }, 200);
      }
      return () => {
        clearTimeout(timer);
      };
    } else {
      isMounted.current = true;
    }
  }, [controlStackModal]);

  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      window.open(link, "_blank");
    } else {
      // document.body.style.cursor = "wait";
      window.location.href = link;
    }
  };

  /// Return
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
              ‣ Hello, my name is Jeong Hyun Lee. I'm a computer science student
              who seek a frontend developer.
            </p>

            <div className="social-icons text-center">
              <SocialIcon
                // url="https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
                network="linkedin"
                bgColor="white"
                fgColor="black"
                className="icon"
                style={{
                  marginRight: "15px",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  openInNewTab(
                    "https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
                  );
                }}
              />
              <SocialIcon
                // url="https://github.com/JunLee8108"
                network="github"
                bgColor="white"
                fgColor="black"
                className="icon"
                style={{
                  marginRight: "15px",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  openInNewTab("https://github.com/JunLee8108");
                }}
              />
              <SocialIcon
                // url="https://velog.io/@lejhn1"
                bgColor="white"
                fgColor="black"
                className="icon"
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
                onClick={() => {
                  openInNewTab("https://velog.io/@lejhn1");
                }}
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
            <h4 style={{ color: "grey" }}>Future Frontend Developer</h4>
            <p>
              I'm a dedicated computer science student who's on a path to
              becoming a frontend developer. With a strong foundation in
              programming and a passion for creating intuitive user interfaces,
              I proficiently work with HTML/CSS, JavaScript/TypeScript, React,
              and Next.js – the modern trending languages and frameworks of web
              development. Moreover, I am adept at utilizing Express with
              Node.js for backend development, enabling me to create full-stack
              applications. I'm eager to combine my technical skills with
              creativity to craft engaging web experiences. I'm excited about
              the opportunity to learn and grow in the world of frontend
              development.
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
          <img
            src={developer}
            className="top-1-flexbox2-emt1"
            alt="Developer emoticon"
          ></img>
          <img
            src={developer2}
            alt="Developer emoticon"
            className="top-1-flexbox2-emt2"
          ></img>
        </div>
      </div>

      {/* About Me 2 - Tech Stack */}
      <div className="home-top-2 container-layout">
        <h1 className="h1-green-left">Tech Stack</h1>
        <h4 style={{ color: "grey", paddingLeft: "20px" }}>
          Click each icon to see the details
        </h4>
        <div className="top-2-flex-container">
          {techStackImg.map(function (a, index) {
            return (
              <div
                className="top-2-flexbox"
                key={index}
                onClick={() => {
                  setControlStackModal(true);
                  setTechStackName(techStackImg[index].name);
                  document.body.style.overflow = "hidden";
                }}
              >
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

      {techStackModal ? (
        <TechStackModal
          setControlStackModal={setControlStackModal}
          controlStackModal={controlStackModal}
          techStackName={techStackName}
          isDark={isDark}
          modalDarkMode={modalDarkMode}
        />
      ) : null}

      {/* Portfolio */}
      <div className="home-mid container-layout" ref={portfolioRef}>
        <h1 className="h1-green-left">Portfolio</h1>
        <h4
          style={{ color: "grey", marginBottom: "30px", paddingLeft: "20px" }}
        >
          Jeong's Personal Projects
        </h4>

        <div
          className={`home-mid-textbox-container ${
            scrollPortfolio && "home-mid-textbox-container-scroll-event"
          }`}
        >
          <Portfolio openInNewTab={openInNewTab} />
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
                  <a
                    href={contactMeInfo[index].aHref}
                    onClick={() => {
                      document.body.style.cursor = "wait";
                    }}
                  >
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
