import "./Contact.css";
import fb from "../../../public/assets/fb.png";
import git from "../../../public/assets/git.png";
import ig from "../../../public/assets/ig.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
            <a
              href="https://www.facebook.com/profile.php?id=100022826412490"
              target="_blank"
            >
              <img src={fb} alt="Facebook" className="link" />
            </a>
            <a href="https://www.instagram.com/a.n.k_i_t_/" target="_blank">
              <img src={ig} alt="Instagram" className="link" />
            </a>
            <a href="https://github.com/Ankit4Dec" target="_blank">
              <img src={git} alt="GitHub" className="link" target="_blank" />
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
