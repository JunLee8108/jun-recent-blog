import "./Portfolio.css";
import { portfolioData } from "../../components/helpher/imgData";

import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280 && link !== "mailto:lejhn1@gmail.com") {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <div className="portfolio container-layout">
        <h1 className="h1-green-left">Portfolio</h1>
        <h4 className="portfolio-subtitle">
          <FontAwesomeIcon
            icon="fa-solid fa-file"
            style={{ marginRight: "5px" }}
          />
          Jeong Hyun's Personal Projects
        </h4>

        <div className="portfolio-flex-container">
          {portfolioData.map((content, index) => {
            return (
              <div className="portfolio-flexbox" key={index}>
                <div className="portfolio-img-container">
                  <img
                    src={content.img}
                    alt=""
                    onClick={() => openInNewTab(content.iconURL1)}
                  />
                </div>

                <h3 className="portfolio-flexbox-title">{content.title}</h3>

                <div className="portfolio-flexbox-iconbox">
                  <h5>Demo: </h5>
                  <SocialIcon
                    bgColor={content.iconBgColor}
                    fgColor={content.iconFgColor}
                    className="portfolio-icon cursor-pointer"
                    onClick={() => openInNewTab(portfolioData[index].iconURL1)}
                  />
                  <h5>Github: </h5>
                  <SocialIcon
                    network="github"
                    bgColor={content.iconBgColor}
                    fgColor={content.iconFgColor}
                    className="portfolio-icon cursor-pointer"
                    onClick={() => openInNewTab(portfolioData[index].iconURL2)}
                  />
                </div>

                <div className="portfolio-flexbox-description">
                  {portfolioData[index].description.map(
                    (insideContent, insideIndex) => {
                      return <h4 key={insideIndex}>{insideContent}</h4>;
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
