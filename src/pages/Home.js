import "../components/HomeSection.css";
import TechStackModal from "../components/helpher/TechStackModal";
import { techStackImg } from "../components/helpher/imgData";
import { developer, developer2 } from "../components/helpher/imgData";

import { useRef, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
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
            {/* <p>
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
            </p> */}
            <p>
              As a dedicated Computer Science student at Texas A&M University, I
              have honed my full-stack development skills through a blend of
              academic rigor and extensive hands-on experience. My technical
              repertoire includes advanced proficiency in C++ and Python,
              alongside substantial project work in web development using React,
              Next.js, Node.js, Vue.js, TypeScript and MongoDB, as well as
              desktop application development with Electron.js.
            </p>
            <p>
              These experiences have not only sharpened my technical acumen but
              also reinforced my ability to work effectively in team-oriented
              environments and adapt to evolving technological landscapes. Eager
              to apply my diverse skills in a dynamic team, I am poised to make
              impactful contributions in the realm of full-stack development.
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
                      <img src={content.img} alt="tech-stack"></img>
                      <img src={content.img2} alt="tech-stack"></img>
                    </>
                  ) : (
                    <img src={content.img} alt="tech-stack"></img>
                  )}
                </div>
                <h4>{content.name}</h4>
                <div className="tech-stack-border-line"></div>
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

export default Home;
