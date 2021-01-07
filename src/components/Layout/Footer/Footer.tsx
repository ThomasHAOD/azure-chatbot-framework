import React from "react";
import classes from "./Footer.module.scss";
import Twitter from "../../../assets/icons/twitter.png";
import Facebook from "../../../assets/icons/facebook.png";
import Instagram from "../../../assets/icons/instagram.png";
import Youtube from "../../../assets/icons/youtube.png";

const Footer = () => (
  <footer className={classes.Footer}>
    <div>
      <h3>Follow Social Media</h3>
      <p>
        Check out our social media and get the latest news and information...
      </p>
    </div>
    <ul>
      <li>
        <img src={Facebook} alt="social logo" />
      </li>
      <li>
        <img src={Twitter} alt="social logo" />
      </li>
      <li>
        <img src={Instagram} alt="social logo" />
      </li>
      <li>
        <img src={Youtube} alt="social logo" />
      </li>
    </ul>
  </footer>
);

export default Footer;
