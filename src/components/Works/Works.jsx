import "./Works.css";
// import i1 from "../../../public/i1.jpg";
// import i2 from "../../../public/i2.jpg";
// import i3 from "../../../public/i3.jpg";
import i1 from "../../../public/assets/cal.png";
import i2 from "../../../public/assets/PLP.png";
import i3 from "../../../public/assets/Tic-Tac-Toe.png";
import i4 from "../../../public/assets/WD.png";
import w1 from "../../../public/w1.png";

const Works = () => {
  return (
    <>
      <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc">
          I take pride attention to the smallest details and making sure that my
          work is pixel perfect. I am excited to bring my skills and experience
          to help businesses achieve their goals and create a strong online
          presence.
        </span>
        <div className="worksImgs">
          <a href="https://ankit4dec.github.io/Calculator/" target="_blank">
            <img src={i1} alt="cal" className="worksImg" id="cal" />
          </a>
          <a
            href="https://ankit4dec.github.io/Product-Landing-Page/"
            target="_blank"
          >
            <img src={i2} alt="ap" className="worksImg" id="ap" />
          </a>
          <a
            href="https://ankit4dec.github.io/Tic-Tac-Toe-Game/"
            target="_blank"
          >
            <img src={i3} alt="ttg" className="worksImg" id="ttg" />
          </a>
          <a href="https://getclimatedetails.netlify.app/" target="_blank">
            <img src={w1} alt="wd" className="worksImg" id="wd" />
          </a>
        </div>
        <button className="workBtn">See More</button>
      </section>
    </>
  );
};

export default Works;
