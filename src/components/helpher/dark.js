// Dark Mode
let isDark = false;

const darkMode = () => {
  const body = document.body;
  const navbarContainer = document.querySelector(".navbar-container");
  const home = document.querySelector(".home");
  const aboutMeIntro = document.querySelector(".about-me-introduction");
  const aboutMeTech = document.querySelector(".about-me-tech-stack");
  const portfolio = document.querySelector(".portfolio");
  const contactMe = document.querySelector(".contact-me");
  const contactMeFlexbox1 = document.querySelector(".contact-me-flexbox1");
  const contactMeFlexbox2 = document.querySelector(".contact-me-flexbox2");
  const viewPortfolioBtn = document.querySelector(
    ".introduction-view-portfolio-btn"
  );
  const h1BorderLeft = document.querySelectorAll(".h1-green-left");
  const portfolioTitle = document.querySelectorAll(
    ".portfolio-flexbox-title h3"
  );

  // dark mode off
  if (isDark) {
    body.style.backgroundColor = "white";
    isDark = false;
    navbarContainer.style.background =
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%)";
    home.style.color = "black";
    aboutMeIntro.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    aboutMeTech.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    portfolio.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    contactMe.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    contactMeFlexbox1.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    contactMeFlexbox1.style.color = "black";
    contactMeFlexbox2.style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    contactMeFlexbox2.style.color = "black";
    viewPortfolioBtn.style.background =
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%)";

    for (let i = 0; i < h1BorderLeft.length; i++) {
      h1BorderLeft[i].style.borderLeft = "solid #0ba360 5px";
    }

    for (let j = 0; j < portfolioTitle.length; j++) {
      portfolioTitle[j].style.color = "#4b2d0b";
    }
    // dark mode on
  } else {
    isDark = true;
    body.style.backgroundColor = "black";
    navbarContainer.style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    home.style.color = "white";
    aboutMeIntro.style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    aboutMeTech.style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    portfolio.style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    contactMe.style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    contactMeFlexbox1.style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    contactMeFlexbox1.style.color = "white";
    contactMeFlexbox2.style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    contactMeFlexbox2.style.color = "white";
    viewPortfolioBtn.style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";

    for (let i = 0; i < h1BorderLeft.length; i++) {
      h1BorderLeft[i].style.borderLeft = "solid silver 5px";
    }

    for (let j = 0; j < portfolioTitle.length; j++) {
      portfolioTitle[j].style.color = "#E2E2E2";
    }
  }
};

export { darkMode };
