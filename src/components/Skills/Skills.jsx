import "./Skills.css";
// import UIDesign from "../../../public/logo.jpg";
// import WebDesign from "../../../public/web-design.png";
import Genral from "../../../public/skill.png";
import Visual from "../../../public/studio.png";
import Setting from "../../../public/programming.png";
import Responsive from "../../../public/responsive.png";
import User from "../../../public/people.png";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate Web Designer with experience in creating
          visually appealing and user-friendly <br /> websites. I have a strong
          understanding of design and a keen eye for details. I am proficient in
          HTML, CSS, <br /> and JavaScript as well as JavaScript framework such
          as React.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Genral} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>General Statement</h2>
              <p>
                Dedicated to creating visually appealing and functional website
                designs that effectively communicate brands and engage users.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Visual} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Focus on Visual Design</h2>
              <p>
                Specializing in the art of web design, I bring creativity and
                precision to craft visually stunning websites that leave a
                lasting impression.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Setting} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Emphasize Functionality</h2>
              <p>
                My expertise lies in designing websites that not only look great
                but also function seamlessly, ensuring a positive user
                experience.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Responsive} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Highlight Responsive Design</h2>
              <p>
                Passionate about responsive web design, I create websites that
                adapt seamlessly across devices, providing a consistent and
                enjoyable user experience
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={User} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>User-Centric Approach</h2>
              <p>
                Driven by a user-centric approach, I design websites that
                prioritize ease of use, emphasizing an intuitive and accessible
                interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
