import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">

      <div className="text-container">
        <h1>Hello, I'm Vincent Tsui</h1>
        <div>
          I am a full-stack software engineer based in the Bay Area. As a full-stack developer I 
          enjoy ownership of the entire development cycle and building efficient
          back-end APIs along with clean, intuitive front-end UIs. Aside from coding, 
          I enjoy playing badminton, piano, and games. 
        </div>
        <section>
          Find me on &nbsp;
          <a href="https://www.linkedin.com/in/vincent-tsui-6b1b76114/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          &nbsp; and &nbsp;
          <a href="https://angel.co/u/vincent-tsui-1" target="_blank"><i className="fab fa-angellist"></i></a>
          <br/>
          Shoot me an &nbsp;
          <a href="mailto:vincentktsui@gmail.com"><span className="far fa-envelope"></span></a>
          <br/>
          Check out my &nbsp;
          <a href="https://github.com/vincentktsui" target="_blank"><span className="fab fa-github"></span></a>
          &nbsp; and &nbsp;
          <a href="/VincentTsuiResume.pdf" target="_blank"><i className="fas fa-file-alt"></i></a>
        </section>
      </div>
      <div className="picture-container">
        <img src="/dp.jpg" className="display-picture" alt="" />
      </div>
    </div>
  )
}

export default Header;