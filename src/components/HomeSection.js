import "./HomeSection.css";

import { useRef, useEffect, useState } from "react";

import { techStackImg } from "./helpher/imgData";
import { developer, developer2 } from "./helpher/imgData";

import TechStackModal from "./helpher/TechStackModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeSection() {
  const [controlStackModal, setControlStackModal] = useState(false);
  const [techStackModal, setTechStackModal] = useState(false);
  const [techStackName, setTechStackName] = useState("");
  const isMounted = useRef(false);

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

  return (
    <div className="home">
      {/* About Me 1 - Introduction */}
      <div className="about-me-introduction container-layout">
        <div className="introduction-flexbox-1">
          <h1 className="h1-green-left">Jeong Hyun Lee </h1>
          <div className="introduction-text-box">
            <h4>
              <FontAwesomeIcon
                icon="fa-solid fa-laptop"
                style={{ marginRight: "5px" }}
              />
              Future Full-Stack Developer
            </h4>
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
          <FontAwesomeIcon
            icon="fa-solid fa-computer-mouse"
            style={{ marginRight: "6px" }}
          />
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
        />
      ) : null}
    </div>
  );
}

export default HomeSection;
