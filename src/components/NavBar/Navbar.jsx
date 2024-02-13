import "./Navbar.css";
import logo from "../../../public/logo3.png";
import contact from "../../../public/contact.png"
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Projects</Link>
        <Link className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg"/>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
