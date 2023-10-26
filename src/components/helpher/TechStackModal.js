import "./TechStackModal.css";
import { techStackImg } from "./imgData";

export default function TechStackModal({
  setControlStackModal,
  controlStackModal,
  techStackName,
}) {
  const data = techStackImg.filter((data) => data.name === techStackName);

  const closeTechStackModal = () => {
    setControlStackModal(false);
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth <= 1280) {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <div
        className={
          controlStackModal
            ? "tech-stack-modal-bg animated-bg"
            : "tech-stack-modal-bg animated-hide-bg"
        }
        onClick={(e) => {
          const target = document.querySelector(".tech-stack-modal-bg");
          if (e.target === target) {
            closeTechStackModal();
          }
        }}
      >
        <div
          className={
            controlStackModal
              ? "tech-stack-modal animated"
              : "tech-stack-modal animated-hide"
          }
        >
          <h1>{techStackName}</h1>

          <div className="tech-stack-description">
            <h3>What I do</h3>
            {data[0].description.map((content, index) => {
              return (
                <div key={index}>
                  <li className="tech-stack-description-main">
                    {data[0].description[index].main}
                  </li>
                  <li className="tech-stack-description-sub">
                    {data[0].description[index].support}
                  </li>
                </div>
              );
            })}
            <center>
              <button
                className="tech-stack-modal-closeBtn"
                onClick={closeTechStackModal}
              >
                CLOSE
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
