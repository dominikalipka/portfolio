import React from "react";

import linkedin from "../images/linkedin.png";
import github from "../images/github.png";


function Footer() {
  return (
    <div className="footer">
      <a target="_blank" href="https://www.linkedin.com/in/dominika-lipka/">
        <img src={linkedin} />
        <p>My LinkedIn</p>
      </a>
      <a target="_blank" href="https://github.com/dominikalipka">
        <img src={github} />
        <p>My GitHub</p>
      </a>
    </div>
  );
}

export default Footer;
