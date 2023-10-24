import { jun, me, portfolio, contact } from "./helpher/imgData";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  const [isModal, setModal] = useState(false);

  const navigate = useNavigate();

  const controlModal = () => {
    setModal((isModal) => !isModal);
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

  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile-flexbox">
          <h5>JEONG HYUN LEE</h5>
        </div>
        <div className="navbar-mobile-flexbox">
          {isModal ? (
            <button
              style={{
                border: "none",
                background: "transparent",
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
        <div className="navbar-modal-bg">
          <div
            className={
              //   modalDarkMode
              // ?
              // "navbar-modal-container navbar-modal-container-darkmode"
              // :
              "navbar-modal-container"
            }
          >
            <ul>
              {/* <li onClick={clickToHome}>About Me</li>
              <li onClick={clickToPortfolio}>Portfolio</li>
              <li onClick={clickToContact}>Contact Me</li> */}
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

            <div className="navbar-item-mobile">
              <li>
                <label className="switch" htmlFor="dark">
                  <input
                    type="checkbox"
                    onClick={() => {
                      //   darkModeMobile();
                      //   setModalDarkMode((modalDarkMode) => !modalDarkMode);
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
              {/* <li onClick={clickToHome} className="navbar-item1"> */}
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
