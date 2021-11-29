import React from "react";
import { Link } from "react-router-dom";

import contact from "../images/contact.png";

function Contact() {
  return (
    <div className="contact">
      <div>
        <img src={contact} />
      </div>
      <div >
        <h2>Contact me</h2>
        <div className="contact-data">
          <div>
            <p>Phone number:</p>
            <p>Email address:</p>
          </div>
          <div>
            <p>+49 0151 70814074</p>
            <p>dominika.lipka96@gmail.com</p>
          </div>
        </div>
        <div className="cv-container">
          {" "}
          <Link className="cv" to="/cv.pdf" target="_blank">
            Check out my CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
