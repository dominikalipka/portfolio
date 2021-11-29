import React from "react";
import { Link } from "react-router-dom";
import myphoto from "../images/me.jpg";

import skill1 from "../images/1.png";
import skill2 from "../images/2.png";
import skill3 from "../images/3.png";

function Home() {
  return (
    <div>
      <div className="homepage">
        <div className="homepage-one">
          <h1>Hello! I'm Dominika</h1>
          <h2>and I build things.</h2>
        </div>
        <div>
          <h3>I'm open for opportunities!</h3>
        </div>
      </div>
      <div className="homepage-two">
        <div className="about-me">
          <h2>About me</h2>
          <div className="text-underline"></div>
          <p>Problem solving is what drives me.</p>
          <p>Social change is what is important for me.</p>
          <p>
            Putting theory and ideas into practice is what I need on a daily
            basis.
          </p>
          <p>
            I'm a web developer who's focused on learning constantly. I have
            decided to switch career because although I enjoyed my previous
            positions, I was missing the spark, this drive that keeps you going
            further and further. And, with first JavaScript tutorial watched, I
            knew I'm on the right path.
          </p>
          <p></p>
          <p></p>
          <p></p>
          <div className="cv-container">
            {" "}
            <Link className="cv" to="/cv.pdf" target="_blank">
              Check out my CV
            </Link>
          </div>
        </div>
        <div>
          <img src={myphoto} alt="" />
        </div>
      </div>
      <div className="homepage-three">
        <div>
          <h2>My skills</h2>
        </div>
        <div className="skills">
          <div className="skill-container">
            <h3>FRONT-END</h3>
            <div className="text-underline"></div>
            <img src={skill1} alt="skill 1" />
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6, OOP, DOM)</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="skill-container">
            <h3>BACK-END</h3>
            <div className="text-underline"></div>
            <img src={skill2} alt="skill 2" />
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-container">
            <h3>SOFT SKILLS</h3>
            <div className="text-underline"></div>
            <img src={skill3} alt="skill 3" />
            <ul>
              <li>Team player</li>
              <li>Fast learner</li>
              <li>Problem-solver</li>
              <li>Well-organized</li>
              <li>Reliable and professional</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
