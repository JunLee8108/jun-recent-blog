import SendingEmailJS from "../components/helpher/SendingEmailJS";
import { contactMeInfo } from "../components/helpher/imgData";

function ContactMe() {
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
      {/* Contact Me */}
      <div className="contact-me container-layout">
        <h1 className="h1-green-left">Contact Me</h1>
        <div className="contact-me-flex-container">
          <div className="contact-me-flexbox1">
            <SendingEmailJS />
          </div>
          <div className="contact-me-flexbox2">
            {contactMeInfo.map(function (a, index) {
              return (
                <div className="flexbox" key={index}>
                  <h2>{contactMeInfo[index].name}</h2>
                  <img
                    src={contactMeInfo[index].img}
                    alt="emoticon"
                    onClick={() => {
                      openInNewTab(contactMeInfo[index].aHref);
                    }}
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
