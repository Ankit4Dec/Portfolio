import "./Skills.css";
import UIDesign from "../../../public/logo.jpg";
import WebDesign from "../../../public/web-design.png";

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
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>
                Specializing in crafting visually appealing and user-friendly
                websites, ensuring a seamless user experience
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>
                Focused on creating captivating website designs that enhance
                brand identity and drive user engagement.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>
                Experienced in designing sleek and user-friendly mobile
                applications for iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
