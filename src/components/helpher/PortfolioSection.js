import { SocialIcon } from "react-social-icons";
import { portfolioData } from "./imgData";

export default function PortfolioSection({ openInNewTab }) {
  return (
    <>
      {portfolioData.map((a, index) => {
        return (
          <div className="portfolio-flexbox" key={index}>
            <div className="portfolio-img-container">
              <img
                src={portfolioData[index].img}
                alt=""
                onClick={() => {
                  // document.body.style.cursor = "wait";
                  openInNewTab(portfolioData[index].iconURL1);
                }}
              />
            </div>

            <div className="portfolio-flexbox-title text-center">
              <h3 className="title">{portfolioData[index].title}</h3>
            </div>

            <div className="portfolio-flexbox-iconbox">
              <h5>Demo: </h5>
              <SocialIcon
                // url={portfolioData[index].iconURL1}
                bgColor={portfolioData[index].iconBgColor}
                fgColor={portfolioData[index].iconFgColor}
                className="portfolio-icon cursor-pointer"
                style={{
                  width: "28px",
                  height: "28px",
                }}
                onClick={() => {
                  //   document.body.style.cursor = "wait";
                  openInNewTab(portfolioData[index].iconURL1);
                }}
              />
              <h5>Github: </h5>
              <SocialIcon
                network="github"
                bgColor={portfolioData[index].iconBgColor}
                fgColor={portfolioData[index].iconFgColor}
                className="portfolio-icon cursor-pointer"
                style={{ width: "28px", height: "28px" }}
                onClick={() => {
                  //   document.body.style.cursor = "wait";
                  openInNewTab(portfolioData[index].iconURL2);
                }}
              />
            </div>

            <div className="portfolio-flexbox-description">
              {portfolioData[index].description.map((a, index2) => {
                return (
                  <h4 key={index2}>
                    {portfolioData[index].description[index2]}
                  </h4>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
