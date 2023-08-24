import "./navBar.scss";
import logo from "../../../assets/common/toddle_logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="toddle" width="159" height="63.6" />
      </div>
    </nav>
  );
};

export default NavBar;
