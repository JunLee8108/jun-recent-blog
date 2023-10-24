import PortfolioSection from "../components/helpher/PortfolioSection";
import "./Portfolio.css";

function Portfolio() {
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
      <div className="portfolio container-layout">
        <h1 className="h1-green-left">Portfolio</h1>
        <h4
          style={{ color: "grey", marginBottom: "30px", paddingLeft: "20px" }}
        >
          Jeong's Personal Projects
        </h4>

        <div className="portfolio-flex-container">
          <PortfolioSection
            openInNewTab={openInNewTab}
            // scrollPortfolio={scrollPortfolio}
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
