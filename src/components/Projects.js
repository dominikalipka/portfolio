import React from "react";

import juniors4seniors1 from '../images/juniors4seniors-1.png'
import juniors4seniors2 from "../images/juniors4seniors-2.png";
import juniors4seniors3 from "../images/juniors4seniors-3.png";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-title">
        <h2>My awesome projects</h2>
        <div className="text-underline"></div>
      </div>
      <div className="project-container-1">
        <div className="project-description">
          <h3>juniors4seniors</h3>
          <a
            className="links"
            href="https://juniors4seniors.netlify.app/"
            target="_blank"
          >
            DEMO
          </a>
          <h4>Technologies used:</h4>
          <div className="technologies">
            <p>React.js</p>
            <p>JavaScript</p>
            <p>HTML & CSS</p>
            <p>REST API</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </div>
          <h5>About the project:</h5>
          <p>This website was created to help seniors in need.</p>
          <p>
            Sometimes seniors need material support ( clothes, cosmetics),
            sometimes they need help (with buying food, going to the doctor),
            sometimes all they need is a companion.
          </p>
            <p>If the user is not logged-in, they can read general information about the seniors, read information how the website works and search seniors by country.</p>
          <p>
            If the user is logged-in, they can read details about all the
            seniors. If the user clicks "I want to help" in the profile of a
            particular senior, they will be assigned as their helper, and they
            will be able to edit their needs. The user can add new needs if the
            senior would like help with something else. The user can edit a need
            if something changed. The user can delete a need if the need has
            been met.
          </p>
        </div>
        <div className="project-screenshots">
          <img src={juniors4seniors1} />
          <img src={juniors4seniors2} />
          <img src={juniors4seniors3} />
        </div>
      </div>
      <div className="project-container-2">
        <div className="project-screenshots"></div>
        <div className="project-description">
          <h3>SPACE SNEK</h3>
          <h4>Technologies used:</h4>
          <div className="technologies">
            <p>JavaScript - OOP & DOM</p>
            <p>HTML & CSS</p>
          </div>
          <h5>About the project:</h5>
        </div>
      </div>
      <div className="project-container-1">
        <div className="project-description">
          <h3>plantin'</h3>
          <h4>Technologies used:</h4>
          <div className="technologies">
            <p>JavaScript</p>
            <p>HTML & CSS</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>Express.js</p>
          </div>
          <h5>About the project:</h5>
        </div>
        <div className="project-screenshots"></div>
      </div>
    </div>
  );
}

export default Projects;
