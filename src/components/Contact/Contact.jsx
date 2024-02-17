import "./Contact.css";
import icon from "../../../public/logo3.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1jk49p8", "template_ssbr9pi", form.current, {
        publicKey: "aVpWMJwut6yPP-2bM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="contactPage">
        <div className="contact">
          <h1 className="ContactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
            />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>
            <div className="links">
              <img src={icon} alt="Facebook" className="link" />
              <img src={icon} alt="Twitter" className="link" />
              <img src={icon} alt="YouTube" className="link" />
              <img src={icon} alt="Instagram" className="link" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
