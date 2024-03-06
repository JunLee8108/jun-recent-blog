import "./Home.css";
import TechStackModal from "../../components/helpher/TechStackModal";
import { techStackImg } from "../../components/helpher/imgData";
import { developer, developer2 } from "../../components/helpher/imgData";

import { useRef, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [controlStackModal, setControlStackModal] = useState(false);
  const [techStackModal, setTechStackModal] = useState(false);
  const [techStackName, setTechStackName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // 이미지 로드 상태를 추적하는 state

  const isMounted = useRef(false);
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
      }, 4000);

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
        }, 400);
      }
      return () => {
        clearTimeout(timer);
      };
    } else {
      isMounted.current = true;
    }
  }, [controlStackModal]);

  return (
    <>
      {/* Introduction */}
      <div className="home-container container-layout">
        <h1 className="h1-green-left">Introduction </h1>
        <div className="about-me-introduction">
          <div className="introduction-flexbox-1">
            <h4>
              <FontAwesomeIcon
                icon="fa-solid fa-laptop"
                style={{ marginRight: "5px" }}
              />
              Future Full-Stack Developer
            </h4>
            <div className="introduction-text-box">
              <p>
                Hello, my name is Jeong Hyun Lee, and as a dedicated Computer
                Science student at Texas A&M University, I have honed my
                full-stack development skills through a blend of academic rigor
                and extensive hands-on experience. My technical repertoire
                includes advanced proficiency in C++ and Python, alongside
                substantial project work in web development using React,
                Next.js, Node.js, Vue.js, TypeScript and MongoDB, as well as
                desktop application development with Electron.js.
              </p>
              <p>
                These experiences have not only sharpened my technical acumen
                but also reinforced my ability to work effectively in
                team-oriented environments and adapt to evolving technological
                landscapes. Eager to apply my diverse skills in a dynamic team,
                I am poised to make impactful contributions in the realm of
                full-stack development.
              </p>
              <button
                className="introduction-view-button"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
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
        <h1 className="h1-green-left">Tech Stack</h1>
        <div className="about-me-tech-stack ">
          <h4 className="tech-stack-short-description">
            <FontAwesomeIcon
              icon="fa-solid fa-computer-mouse"
              style={{ marginRight: "6px" }}
            />
            Click each icon to see the details
          </h4>
          <div className="tech-stack-flex-container">
            {techStackImg.map(function (content, index) {
              return (
                <div
                  className="tech-stack-flexbox"
                  key={index}
                  onClick={() => {
                    setControlStackModal(true);
                    setTechStackName(content.name);
                    const BrowserWidth = document.body.scrollWidth;
                    if (BrowserWidth <= 1280) {
                      document.body.style.overflow = "hidden";
                    }
                  }}
                >
                  <div style={{ width: "100%" }}>
                    {index === 2 ? (
                      <>
                        <img
                          src={content.img}
                          alt="tech-stack"
                          className={!isLoaded ? "tech-stack-loading" : ""} // 로드 상태에 따라 클래스를 조정
                          onLoad={() => setIsLoaded(true)} // 이미지 로드 완료 시 상태 업데이트
                        ></img>
                        <img
                          src={content.img2}
                          alt="tech-stack"
                          className={!isLoaded ? "tech-stack-loading" : ""} // 로드 상태에 따라 클래스를 조정
                          onLoad={() => setIsLoaded(true)} // 이미지 로드 완료 시 상태 업데이트
                        ></img>
                      </>
                    ) : (
                      <img
                        src={content.img}
                        alt="tech-stack"
                        className={!isLoaded ? "tech-stack-loading" : ""} // 로드 상태에 따라 클래스를 조정
                        onLoad={() => setIsLoaded(true)} // 이미지 로드 완료 시 상태 업데이트
                      ></img>
                    )}
                  </div>
                  <h4 className="tech-stack-title">{content.name}</h4>
                  <div className="tech-stack-border-line"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {techStackModal ? (
        <TechStackModal
          setControlStackModal={setControlStackModal}
          controlStackModal={controlStackModal}
          techStackName={techStackName}
        />
      ) : null}
    </>
  );
}

export default Home;
