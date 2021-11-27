import React from "react";

function Projects() {
  return (
    <div>
      <div className="projects-title">
        <h2>My awesome projects</h2>
        <div className="text-underline"></div>
      </div>
      <div className="project-container">
        <div className="project-description">
          <h3>juniors4seniors</h3>
          <h4>Technologies used:</h4>
          <h5>About the project:</h5>
        </div>
        <div className="project-screenshots"></div>
      </div>
      <div className="project-container">
        <div className="project-screenshots"></div>
        <div className="project-description">
          <h3>SPACE SNEK</h3>
          <h4>Technologies used:</h4>
          <h5>About the project:</h5>
        </div>
      </div>
      <div className="project-container">
        <div className="project-description">
          <h3>plantin'</h3>
          <h4>Technologies used:</h4>
          <h5>About the project:</h5>
        </div>
        <div className="project-screenshots"></div>
      </div>
      {/* 
            About each prodject - small description, technologies, links to repos and demo:
            - Space Snek
            - plantin'
            - juniors4seniors
             */}
    </div>
  );
}

export default Projects;
