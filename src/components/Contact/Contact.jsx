import "./Contact.css";
import icon from "../../../public/logo3.png";

const Contact = () => {
  return (
    <>
      <div id="contactPage">
        <div className="contact">
          <h1 className="ContactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your Email" />
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
