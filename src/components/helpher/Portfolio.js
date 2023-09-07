import { SocialIcon } from "react-social-icons";
import { portfolioData } from "./imgData";

export default function Portfolio() {
  const openInNewTab = (link) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };
  return (
    <>
      {portfolioData.map((a, index) => {
        return (
          <div className="home-mid-textbox-flexbox" key={index}>
            <img
              src={portfolioData[index].img}
              alt=""
              onClick={() => {
                // document.body.style.cursor = "wait";
                openInNewTab(portfolioData[index].iconURL1);
              }}
            />

            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "0",
              }}
            >
              <h3 className="home-mid-title">{portfolioData[index].title}</h3>
            </div>

            <div className="home-mid-description">
              {portfolioData[index].description.map((a, index2) => {
                return (
                  <h4 style={{ marginBottom: "0" }} key={index2}>
                    {portfolioData[index].description[index2]}
                  </h4>
                );
              })}
            </div>

            <div className="home-mid-textbox">
              <h5>Demo: </h5>
              <SocialIcon
                // url={portfolioData[index].iconURL1}
                bgColor={portfolioData[index].iconBgColor}
                fgColor={portfolioData[index].iconFgColor}
                className="portfolio-icon"
                style={{
                  width: "28px",
                  height: "28px",
                  marginRight: "30px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  //   document.body.style.cursor = "wait";
                  openInNewTab(portfolioData[index].iconURL1);
                }}
              />
              <h5>Github: </h5>
              <SocialIcon
                // url={portfolioData[index].iconURL2}
                bgColor={portfolioData[index].iconBgColor}
                fgColor={portfolioData[index].iconFgColor}
                className="portfolio-icon"
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                onClick={() => {
                  //   document.body.style.cursor = "wait";
                  openInNewTab(portfolioData[index].iconURL2);
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
