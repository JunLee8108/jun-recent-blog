import "./Navbar.css";
import "./HomeSection.css";
import { jun, me, portfolio, contact } from "./helpher/imgData";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Navbar() {
  const [isModal, setModal] = useState(false);
  const [controlModalState, setControlModalState] = useState(false);

  const navigate = useNavigate();

  const controlModal = () => {
    setControlModalState((controlModalState) => !controlModalState);
  };

  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280 && link !== "mailto:lejhn1@gmail.com") {
      window.open(link, "_blank");
    } else {
      // document.body.style.cursor = "wait";
      window.location.href = link;
    }
  };

  useEffect(() => {
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
  }, [controlModalState]);

  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile-flexbox">
          <h5>JEONG HYUN LEE</h5>
        </div>
        <div className="navbar-mobile-flexbox">
          {controlModalState ? (
            <button
              style={{
                border: "none",
                background: "transparent",
                padding: "10px",
                color: "white",
                marginRight: "-5px",
              }}
              onClick={() => {
                controlModal();
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-xmark" size="xl" />
            </button>
          ) : (
            <button
              style={{
                border: "none",
                background: "transparent",
                padding: "10px",
                color: "white",
                marginRight: "-5px",
              }}
              onClick={() => {
                controlModal();
              }}
            >
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
            const target = document.querySelector(".navbar-modal-bg");
            if (e.target === target) {
              setControlModalState(false);
            }
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
                onClick={() => {
                  navigate("/");
                  setControlModalState(false);
                }}
              >
                About Me
              </li>
              <li
                onClick={() => {
                  navigate("/portfolio");
                  setControlModalState(false);
                }}
              >
                Portfolio
              </li>
              <li
                onClick={() => {
                  navigate("/contact");
                  setControlModalState(false);
                }}
              >
                Contact Me
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="navbar-container">
        <ul>
          <div className="profile text-center">
            <h3>Jeong Hyun Lee</h3>
            <img src={jun} alt="Jun's Profile" />
          </div>

          <div className="navbar-intro">
            <p>
              ‣ Hello, my name is Jeong Hyun Lee. I'm a computer science student
              who seek a Full-Stack developer.
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

            <center>
              <div className="navbar-mobile-loader">
                <ClimbingBoxLoader color="white" speedMultiplier={0.8} />
              </div>
            </center>

            <div className="navbar-item">
              <li
                onClick={() => {
                  navigate("/");
                }}
                className="navbar-item1"
              >
                <img src={me} alt="About emoticon"></img>
                About Me
              </li>
              <li
                className="navbar-item2"
                onClick={() => {
                  navigate("/portfolio");
                }}
              >
                <img src={portfolio} alt="Portfolio emoticon"></img>
                Portfolio
              </li>
              <li
                className="navbar-item3"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <img src={contact} alt="Contact emoticon"></img>
                Contact Me
              </li>

              <center style={{ marginTop: "30px" }}>
                <ClimbingBoxLoader color="white" speedMultiplier={0.8} />
              </center>

              {/* <li
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
              </li> */}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
