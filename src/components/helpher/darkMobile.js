// Dark Mode
let isDark = false;
const darkModeMobile = () => {
  // dark mode off
  if (isDark) {
    isDark = false;
    document.querySelector(".navbar-container").style.background =
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%)";
    document.querySelector(".navbar-container").style.color = "white";
    document.querySelector(".home").style.color = "black";
    document.querySelector(".about-me-introduction").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".about-me-tech-stack").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".portfolio").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".contact-me").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".contact-me-flexbox1").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".contact-me-flexbox1").style.color = "black";
    document.querySelector(".contact-me-flexbox2").style.background =
      "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)";
    document.querySelector(".contact-me-flexbox2").style.color = "black";
    document.querySelector(
      ".introduction-view-portfolio-btn"
    ).style.background = "linear-gradient(to top, #0ba360 0%, #3cba92 100%)";
    let borderDark = document.querySelectorAll(".h1-green-left");
    for (let i = 0; i < borderDark.length; i++) {
      document.querySelectorAll(".h1-green-left")[i].style.borderLeft =
        "solid #0ba360 5px";
    }
    const mobileNavbar = document.querySelectorAll(".navbar-mobile-flexbox");
    for (let j = 0; j < mobileNavbar.length; j++) {
      mobileNavbar[j].style.background =
        "linear-gradient(to top, #0ba360 0%, #3cba92 0%)";
    }
    document.body.style.backgroundColor = "white";
    let brown = document.querySelectorAll(".portfolio-flexbox-title h3");
    for (let j = 0; j < brown.length; j++) {
      brown[j].style.color = "#4b2d0b";
    }
    // dark mode on
  } else {
    isDark = true;
    document.querySelector(".navbar-container").style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    document.querySelector(".navbar-container").style.color = "white";
    document.querySelector(".home").style.color = "white";
    document.querySelector(".about-me-introduction").style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    document.querySelector(".about-me-tech-stack").style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    document.querySelector(".portfolio").style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    document.querySelector(".contact-me").style.background =
      "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)";
    document.querySelector(".contact-me-flexbox1").style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    document.querySelector(".contact-me-flexbox1").style.color = "white";
    document.querySelector(".contact-me-flexbox2").style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    document.querySelector(".contact-me-flexbox2").style.color = "white";
    document.querySelector(
      ".introduction-view-portfolio-btn"
    ).style.background =
      "radial-gradient(circle at 10% 20%, rgb(98, 114, 128) 0%, rgb(52, 63, 51) 90.1%)";
    let borderDark = document.querySelectorAll(".h1-green-left");
    for (let i = 0; i < borderDark.length; i++) {
      borderDark[i].style.borderLeft = "solid silver 5px";
    }
    const mobileNavbar = document.querySelectorAll(".navbar-mobile-flexbox");
    for (let j = 0; j < mobileNavbar.length; j++) {
      mobileNavbar[j].style.background = "grey";
    }
    document.body.style.backgroundColor = "black";
    let brown = document.querySelectorAll(".portfolio-flexbox-title h3");
    for (let j = 0; j < brown.length; j++) {
      brown[j].style.color = "#E2E2E2";
    }
  }
};

export { darkModeMobile };
