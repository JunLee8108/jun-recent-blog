import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./SendingEmailJS.css";

function SendingEmailJS() {
  const form = useRef();
  const handleSubmit = (e) => {
    let firstName = document.querySelector("#FN").value;
    let lastName = document.querySelector("#LN").value;
    let email = document.querySelector("#EM").value;
    let message = document.querySelector("#MA").value;

    if (firstName === "") {
      e.preventDefault();
      alert("Please enter your first name!");
    } else if (lastName === "") {
      e.preventDefault();
      alert("Please enter your last name!");
    } else if (email === "") {
      e.preventDefault();
      alert("Please enter your email!");
    } else if (message === "") {
      e.preventDefault();
      alert("Please enter the message!");
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_wmziyym",
          "template_88iu1vq",
          form.current,
          "pcJjne1oLOj6u9K6j"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      window.location.reload();
      window.scrollTo(0, 0);
      alert("Your message was successfully sent!");
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <h2>Get In Touch With Me</h2>
      <div className="input-flex-container">
        <div className="input-flexbox">
          <label htmlFor="FN">
            <h4>First Name</h4>
          </label>
          <input type="text" name="firstName" id="FN"></input>
        </div>

        <div className="input-flexbox">
          <label htmlFor="LN">
            <h4>Last Name</h4>
          </label>
          <input type="text" name="lastName" id="LN"></input>
        </div>
      </div>

      <div className="display-flex">
        <div style={{ width: "100%" }}>
          <label htmlFor="EM">
            <h4>Email</h4>
          </label>
          <input name="email" type="email" id="EM"></input>
        </div>
      </div>
      <div className="display-flex">
        <div style={{ width: "100%" }}>
          <label htmlFor="MA">
            <h4>Message</h4>
          </label>
          <textarea name="message" id="MA"></textarea>
        </div>
      </div>

      <button type="submit" className="submit-button cursor-pointer">
        Submit
      </button>
    </form>
  );
}

export default SendingEmailJS;
