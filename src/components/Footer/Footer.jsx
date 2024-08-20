import React from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <CiLinkedin />
        <FaGithub />
        <CiTwitter />
        <CiInstagram />
        <CiFacebook />
      </div>
      <div className="right-footer">
        <h3>Copyright 2024 </h3>
        <FaCopyright className="fa" />
      </div>
    </div>
  );
};

export default Footer;
