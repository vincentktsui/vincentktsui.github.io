import React from 'react';
import Skills from './skills';

import "./main.css";
import About from './about';
// import Projects from './projects';
const Main = () => {
  return (
    <div className="main-container">
      <About />
      {/* <Projects /> */}
      <Skills />
    </div>
  )

}

export default Main;