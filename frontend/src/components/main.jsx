import React from 'react';
import Skills from './skills';

import "./main.css";
import About from './about';
import Header from './header';
import Projects from './projects'
// import Projects from './projects';
const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <Projects />
      <About />
      <Skills />
    </div>
  )

}

export default Main;