import React from 'react'
import "./Projects.css"
import youtube from "../../assets/youtube.jpg"
import food from "../../assets/food.jpg"
import book from "../../assets/book.jpg"

const Projects = () => {
  return (
    <div className='projects-container'>
        <div className="projects-area">
            <div className="project-container">
                <img src={youtube} alt="" />
            </div>
         <h3>Youtube Clone App With React</h3>
        </div>
        <div className="projects-area">
            <div className="project-container">
                <img src={food} alt="" />
            </div>
         <h3>Food Application With React</h3>
        </div>
        <div className="projects-area">
            <div className="project-container">
                <img src={book} alt="" />
            </div>
         <h3>Full Stack Book Application</h3>
        </div>
        <div className="github-area">
            <h3>For More Projects, check to my <span>Github</span></h3>
            <a href="https://github.com/ayhan219"><h3>https://github.com/ayhan219</h3> </a>
        </div>
    </div>
  )
}

export default Projects