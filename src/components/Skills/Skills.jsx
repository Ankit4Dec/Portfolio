import "./Skills.css";
import UIDesign from "../../../public/logo.jpg";

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
              <p>This is a demo text, you can write your own contect here.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>
                This demo text can be changed while making the production ready
                site.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
