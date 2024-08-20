import React from 'react'
import "./About.css"
import { GrPersonalComputer } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-left">
            <div className="about-title">
                <h2>Who Am I?</h2>
                <IoIosPerson className='about-icon' />
            </div>
            <div className="personal-information">
                <h4>Name:<span>Ayhan Taha</span></h4>
                <h4>Surname:<span>Pastutmaz</span></h4>
                <h4>From:<span>Turkey</span></h4>
            </div>
            <div className="title-ab">
                <h3>My Knowledge</h3>
            </div>
            <div className="language">
                <FaJava />
                <IoLogoJavascript />
                <FaNode />
                <SiExpress />
                <FaReact />
                <FaLinux />
                <FaCss3 />
                <FaHtml5 />

            </div>

        </div>
        <div className="about-right">
            <p>A pasionate <span>Full Stack Developer</span> from Turkey.</p>
            <div className="about-icon-right">
            <IoPersonSharp className='right-icon' />
            <GrPersonalComputer className='right-icon' />
            </div>
            
        </div>

    </div>
  )
}

export default About