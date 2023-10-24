import "./HomeSection.css";

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SendingEmailJS from "./helpher/SendingEmailJS";
import { techStackImg } from "./helpher/imgData";
import { contactMeInfo } from "./helpher/imgData";
import { developer, developer2 } from "./helpher/imgData";

import Portfolio from "./helpher/PortfolioSection";
import TechStackModal from "./helpher/TechStackModal";

function HomeSection() {
  const navigate = useNavigate();

  useEffect(() => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      let count = 0;
      const bg1 = document.querySelector(".developer-img-1");
      const bg2 = document.querySelector(".developer-img-2");
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

  // const clickToHome = () => {
  //   homeRef.current?.scrollIntoView();
  //   setModal(false);
  // };
  // const clickToPortfolio = () => {
  //   portfolioRef.current?.scrollIntoView();
  //   setModal(false);
  // };
  // const clickToContact = () => {
  //   contactRef.current?.scrollIntoView();
  //   setModal(false);
  // };

  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280 && link !== "mailto:lejhn1@gmail.com") {
      window.open(link, "_blank");
    } else {
      // document.body.style.cursor = "wait";
      window.location.href = link;
    }
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

    // if (window.scrollY < 1030) {
    //   document.querySelector(".navbar-item1").style.color = "black";
    //   document.querySelector(".navbar-item2").style.color = "white";
    //   document.querySelector(".navbar-item3").style.color = "white";
    // } else {
    //   document.querySelector(".navbar-item1").style.color = "white";
    // }

    // if (window.scrollY > 1030 && window.scrollY < 1820) {
    //   document.querySelector(".navbar-item1").style.color = "white";
    //   document.querySelector(".navbar-item2").style.color = "black";
    //   document.querySelector(".navbar-item3").style.color = "white";
    // } else {
    //   document.querySelector(".navbar-item2").style.color = "white";
    // }

    // console.log(document.documentElement.scrollHeight);
    // console.log(document.body.scrollWidth);
    // console.log(scrollHeight);
    // console.log(BrowserWidth);
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

  console.log(1);

  /// Return
  return (
    <div className="home">
      {/* Side Navbar */}

      {/* About Me 1 - Introduction */}
      <div className="about-me-introduction container-layout" ref={homeRef}>
        <div className="introduction-flexbox-1">
          <h1 className="h1-green-left">Jeong Hyun Lee</h1>
          <div className="introduction-text-box">
            <h4>Future Full-Stack Developer</h4>
            <p>
              I'm a dedicated computer science student who's on a path to
              becoming a Full-Stack developer. With a strong foundation in
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
          </div>
        </div>
        <div className="introduction-flexbox-2">
          <img
            src={developer}
            className="developer-img-1"
            alt="Developer emoticon"
          ></img>
          <img
            src={developer2}
            alt="Developer emoticon"
            className="developer-img-2"
          ></img>
        </div>
      </div>

      {/* About Me 2 - Tech Stack */}
      <div className="about-me-tech-stack container-layout">
        <h1 className="h1-green-left">Tech Stack</h1>
        <h4 className="short-description">
          Click each icon to see the details
        </h4>
        <div className="tech-stack-flex-container">
          {techStackImg.map(function (a, index) {
            return (
              <div
                className="tech-stack-flexbox"
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
    </div>
  );
}

export default HomeSection;
