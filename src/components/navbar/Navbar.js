import "./Navbar.css";

import { jun, me, portfolio, blog, contact } from "../helpher/imgData";
import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Navbar() {
  const [isModal, setModal] = useState(false);
  const [controlModalState, setControlModalState] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isMounted = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const controlModal = () => {
    setControlModalState((controlModalState) => !controlModalState);
  };

  const closeModalWhenYouClickBG = (e) => {
    const target = document.querySelector(".navbar-modal-bg");
    if (e.target === target) {
      setControlModalState(false);
    }
  };

  const mobileNavigate = (path) => {
    setTimeout(() => {
      setControlModalState(false);
    }, 300);

    handleNavigation(path);
  };

  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280 && link !== "mailto:lejhn1@gmail.com") {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    // if (location.pathname.includes(path)) {
    //   navigate("refresh");
    //   setTimeout(() => {
    //     navigate(path);
    //   }, 100);
    // }
  };

  useEffect(() => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth <= 1280) {
      if (isMounted.current) {
        let timer;
        if (controlModalState) {
          setModal(true);
        } else {
          timer = setTimeout(() => {
            setModal(false);
          }, 300);
        }

        return () => {
          clearTimeout(timer);
        };
      } else {
        isMounted.current = true;
        return;
      }
    }
  }, [controlModalState]);

  useEffect(() => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      if (location.pathname === "/") {
        setActiveIndex(0);
      } else if (location.pathname === "/portfolio") {
        setActiveIndex(1);
      } else if (location.pathname.includes("/blog")) {
        setActiveIndex(2);
      } else if (location.pathname === "/contact") {
        setActiveIndex(3);
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="navbar-mobile">
        <div className="navbar-mobile-flexbox">
          <h5 onClick={() => mobileNavigate("/")}>JEONG HYUN LEE</h5>
        </div>
        <div className="navbar-mobile-flexbox">
          {controlModalState ? (
            <button className="navbar-mobile-icon" onClick={controlModal}>
              <FontAwesomeIcon icon="fa-solid fa-circle-xmark" size="xl" />
            </button>
          ) : (
            <button className="navbar-mobile-icon" onClick={controlModal}>
              <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
            </button>
          )}
        </div>
      </div>

      {isModal ? (
        <div
          className={
            controlModalState
              ? "navbar-modal-bg animation-bg"
              : "navbar-modal-bg animation-bg-hide"
          }
          onClick={(e) => {
            closeModalWhenYouClickBG(e);
          }}
        >
          <div
            className={
              controlModalState
                ? "navbar-modal-container animation"
                : "navbar-modal-container animation-hide"
            }
          >
            <ul>
              <li
                onClick={() => mobileNavigate("/")}
                className="navber-mobile-list"
              >
                About Me
              </li>
              <li
                onClick={() => mobileNavigate("/portfolio")}
                className="navber-mobile-list"
              >
                Portfolio
              </li>
              <li
                onClick={() => mobileNavigate("/blog")}
                className="navber-mobile-list"
              >
                Blog
              </li>
              <li
                onClick={() => mobileNavigate("/contact")}
                className="navber-mobile-list"
              >
                Contact Me
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      {/* PC NAVBAR */}
      <div className="navbar-container">
        <ul>
          <div className="navbar-profile text-center">
            <h3>Jeong Hyun Lee</h3>
            <img src={jun} alt="Jun's Profile" />
          </div>

          <div className="navbar-intro">
            <p className="navbar-intro-text">
              ‣ Hello, my name is Jeong Hyun Lee. I'm a computer science student
              who seek a Full-Stack developer.
            </p>

            <p className="navbar-intro-text-mobile">Jeong Hyun Lee</p>

            <div className="navbar-social-icon-container text-center">
              <SocialIcon
                network="linkedin"
                bgColor="white"
                fgColor="black"
                className="navbar-social-icon"
                style={{
                  marginRight: "15px",
                }}
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
                  )
                }
              />
              <SocialIcon
                network="github"
                bgColor="white"
                fgColor="black"
                className="navbar-social-icon"
                style={{
                  marginRight: "15px",
                }}
                onClick={() => openInNewTab("https://github.com/JunLee8108")}
              />
              <SocialIcon
                bgColor="white"
                fgColor="black"
                className="navbar-social-icon"
                onClick={() => openInNewTab("https://velog.io/@lejhn1")}
              />
            </div>

            {/* MOBILE LOADER */}
            <center>
              <div className="navbar-mobile-loader">
                <ClimbingBoxLoader color="white" speedMultiplier={0.8} />
                <p className="loader-title">Keep Growing..</p>
              </div>
            </center>

            <div className="navbar-item">
              <li
                onClick={() => navigate("/")}
                className={
                  activeIndex === 0
                    ? "navbar-list navbar-list-active"
                    : "navbar-list"
                }
              >
                <img src={me} alt="About emoticon"></img>
                About Me
              </li>
              <li
                onClick={() => handleNavigation("/portfolio")}
                className={
                  activeIndex === 1
                    ? "navbar-list navbar-list-active"
                    : "navbar-list"
                }
              >
                <img src={portfolio} alt="Portfolio emoticon"></img>
                Portfolio
              </li>
              <li
                onClick={() => handleNavigation("/blog")}
                className={
                  activeIndex === 2
                    ? "navbar-list navbar-list-active"
                    : "navbar-list"
                }
              >
                <img src={blog} alt="Blog emoticon"></img>
                Blog
              </li>
              <li
                onClick={() => handleNavigation("/contact")}
                className={
                  activeIndex === 3
                    ? "navbar-list navbar-list-active"
                    : "navbar-list"
                }
              >
                <img src={contact} alt="Contact emoticon"></img>
                Contact Me
              </li>

              <center style={{ marginTop: "30px" }}>
                <ClimbingBoxLoader color="white" speedMultiplier={0.8} />
                <p className="loader-title">Keep Growing..</p>
              </center>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
