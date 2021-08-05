import "./tobbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import { useState } from "react";
const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ehsan.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>0302-9422054</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>ehsanwebdev47@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
