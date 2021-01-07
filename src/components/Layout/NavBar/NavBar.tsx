import React from "react";
import YSLogo from "../../../assets/images/logo.png";
import classes from "./NavBar.module.scss";

const NavBar = () => (
  <nav className={classes.NavBar}>
    <img src={YSLogo} alt="Logo" className={classes.Image} />

    <ul className={classes.Links}>
      <li>Home</li>
      <li>Get Informed</li>
      <li>About Us</li>
      <li>Get Involved</li>
      <li>Contact</li>
    </ul>
  </nav>
);

export default NavBar;
