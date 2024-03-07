import "./ContactMe.css";
import { contactMeInfo } from "../../components/helpher/imgData";
import SendingEmailJS from "../../components/helpher/SendingEmailJS";

import { useEffect } from "react";

function ContactMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Contact Me */}
      <div className="contact-me container-layout">
        <h1 className="h1-green-left h1-green-left-contact-me">Contact Me</h1>
        <div className="contact-me-flex-container">
          <div className="contact-me-flexbox">
            <SendingEmailJS />
          </div>
          <div className="contact-me-flexbox">
            {contactMeInfo.map(function (content, index) {
              return (
                <div className="flexbox" key={index}>
                  <h2>{content.name}</h2>
                  <img
                    src={content.img}
                    alt="emoticon"
                    onClick={() => openInNewTab(content.aHref)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
