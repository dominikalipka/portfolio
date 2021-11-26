import React from "react"
import { Link } from "react-router-dom";
import myphoto from '../images/me.jpg'

function Home() {
    return (
      <div>
        <div className="homepage">
          <div className="homepage-one">
            <h1>Hello! I'm Dominika</h1>
            <h2>and I build things.</h2>
          </div>
          <div>
            <h3>Welcome to my portfolio!</h3>
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
              positions, I was missing the spark, this drive that keeps you
              going further and further. And, with first JavaScript tutorial
              watched, I knew I'm on the right path.
            </p>
            <p></p>
            <p></p>
            <p></p>
            <div className="cv-container">
              {" "}
              <Link className="cv" to="/cv.pdf" target="_blank" download>
                Download my CV
              </Link>
            </div>
          </div>
          <div>
            <img src={myphoto} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Home