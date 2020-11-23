import React from 'react';
import './wrapper.css';
import Header from '../header/header';
import Home from '../home/home';
import Experience from '../experience/experience';
import Education from '../education/education';
import Project from '../project/project';
import Skills from '../skills/skills';
import About from '../about/about';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

import './wrapper.css';
function Wrapper() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Education />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Wrapper;
