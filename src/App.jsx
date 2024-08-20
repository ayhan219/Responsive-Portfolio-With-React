import React from 'react';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: document.getElementById('projects').offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById('contact').offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar 
        scrollToAbout={scrollToAbout} 
        scrollToProjects={scrollToProjects} 
        scrollToContact={scrollToContact} 
        scrollToHome={scrollToHome}
      />
      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
      <Contact />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
