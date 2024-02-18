import "./Works.css";
// import i1 from "../../../public/i1.jpg";
// import i2 from "../../../public/i2.jpg";
// import i3 from "../../../public/i3.jpg";
import i1 from "../../../public/assets/cal.png";
import i2 from "../../../public/assets/PLP.png";
import i3 from "../../../public/assets/Tic-Tac-Toe.png";
import i4 from "../../../public/assets/WD.png";

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
          <img src={i1} alt="" className="worksImg" />
          <img src={i2} alt="" className="worksImg" />
          <img src={i3} alt="" className="worksImg" />
          <img src={i4} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
      </section>
    </>
  );
};

export default Works;
