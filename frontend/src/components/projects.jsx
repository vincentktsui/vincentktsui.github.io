import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-internal-container">
        <a href="http://trippyaide.herokuapp.com/" target="_blank">
          <div className="trippy-aide">
            <section>
              <h3>TrippyAide</h3>
              <p>An attraction searching and reviewing app, inspired by TripAdvisor.<br/>
                Built using PostgreSQL, Ruby on Rails, React-Redux.js, GoogleMaps API
              </p>
            </section>
          </div>
        </a>

        <a href="http://bindingofjsaac.herokuapp.com/" target="_blank">
          <div className="binding-of-jsaac">
            <section>
              <h3>Binding Of Jsaac</h3>
              <p>A multiplayer roguelike game, inspired by Binding Of Isaac.<br />
                Built using Socket.IO, MongoDB, Express, Node.js, React-Redux.js, React-Konva
              </p>
            </section> 
          </div>
        </a>

        <a href="https://vincentktsui.github.io/River-Flow/" target="_blank">
          <div className="river-flow">
            <section>
              <h3>River Flow</h3>
              <p>A relaxing endless runner game.<br />
                Built using Three.js
              </p>
            </section> 
          </div>
        </a>

        
      </div>
    </div>
  )
}

export default Projects;