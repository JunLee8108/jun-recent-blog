import { SocialIcon } from "react-social-icons";
import { portfolioData } from "./imgData";

export default function PortfolioSection({ openInNewTab }) {
  return (
    <>
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

            <div className="portfolio-flexbox-title text-center">
              <h3 className="title">{content.title}</h3>
            </div>

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
    </>
  );
}
