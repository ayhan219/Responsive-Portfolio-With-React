import React from 'react'
import "./Header.css"
import headerimg from "../../assets/images.jpg"
import { MdDeveloperMode } from "react-icons/md";


const Header = ({scrollToAbout,scrollToContact}) => {
  return (
    <div className='header-container'>
        <div className="header-left">
            <div className="header-left-title">
                <h3>Welcome To My Portfolio</h3>
                <h5>Ayhan Taha Pastutmaz</h5>
                <p>Full Stack Developer</p>
                <MdDeveloperMode />
            </div>
            <div className="buttons">
                <button onClick={scrollToAbout}>About Me</button>
                <button onClick={scrollToContact}>Contact Me</button>
            </div>
        </div>
        <div className="header-right">
            <img src={headerimg} alt="" />
        </div>
    </div>
  )
}

export default Header