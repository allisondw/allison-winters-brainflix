import React from "react";
import Logo from "../../assets/images/logos/BrainFlix-logo.svg";
import Upload from "../../assets/images/icons/upload.svg";
import User from "../../assets/images/Mohan-muruge.jpg";
import "../../styles/Main.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo--link">
        <img src={Logo} alt="Brainflix Logo" className="header__logo--img" />
      </Link>
      <div className="header__div">
        <div className="header__div--form-div">
          <form>
            <input
              type="text"
              className="header__div--search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </form>
        </div>
        <button className="header__div--upload-btn">
          <Link to="/upload" className="header__link--upload">
            <img src={Upload} alt="upload" className="upload-btn-svg" />
            UPLOAD
          </Link>
        </button>
        <img
          src={User}
          className="header__div--user-pic"
          alt="mohan user pic"
        />
      </div>
    </header>
  );
};

export default Header;
