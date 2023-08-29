import "./navBar.scss";
import logo from "../../../../assets/common/toddle_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="toddle" width="159" height="53" />
      </div>
      <div>
        <ul className="nav-menu-ul">
          <Link to="/" className="nav-link">
            <li className="nav-menu-li">HOME</li>
          </Link>
          <Link to="/features" className="nav-link">
            <li className="nav-menu-li">FEATURES</li>
          </Link>
          <Link to="/pricing" className="nav-link">
            <li className="nav-menu-li">PRICING</li>
          </Link>
          <Link to="/contact" className="nav-link">
            <li className="nav-menu-li">CONTACT US</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
