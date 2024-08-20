import React from "react";
import "./Navbar.css";
import { TbHexagonLetterAFilled } from "react-icons/tb";

const Navbar = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) => {

    const handleClick = (e, section) => {
        e.preventDefault();
        switch (section) {
            case 'home':
                scrollToHome();
                break;
            case 'about':
                scrollToAbout();
                break;
            case 'projects':
                scrollToProjects();
                break;
            case 'contact':
                scrollToContact();
                break;
            default:
                break;
        }
    }

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <TbHexagonLetterAFilled className="navbar-icon" />
                <h4 onClick={(e) => handleClick(e, 'home')}>Ayhan Taha Pastutmaz</h4>
            </div>
            <div className="navbar-right">
                <a href="" onClick={(e) => handleClick(e, 'home')}>Home</a>
                <a href="" onClick={(e) => handleClick(e, 'about')}>About me</a>
                <a href="" onClick={(e) => handleClick(e, 'projects')}>My Projects</a>
                <a href="" onClick={(e) => handleClick(e, 'contact')}>Contact me</a>
            </div>
        </div>
    );
};

export default Navbar;
