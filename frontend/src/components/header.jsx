import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">

      <div className="text-container">
        <h1>Hello, I'm Vincent Tsui</h1>
        <p>
          I am a full-stack software engineer. As a full-stack developer I 
          enjoy ownership of the entire development cycle and building efficient
          back-end APIs along with clean, intuitive front-end UIs.
        </p>
      </div>
      <div className="picture-container">
        <img src="/dp.jpg" className="display-picture" alt="" />
      </div>
    </div>
  )
}

export default Header;