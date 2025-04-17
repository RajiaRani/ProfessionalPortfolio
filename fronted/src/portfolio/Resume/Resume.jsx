import React from "react";
import "./Resume.css";

export default function Resume(){
  return (
   <>
   <div className="main-container">
   <div className="resume-section">
      <h2>My Resume</h2>

      {/* Display Resume inside an iframe */}
      <iframe
        src="/Chenchaiah.pdf"
        width="100%"
        height="800px"
        title="Resume"
      ></iframe>

      {/* Download Button */}
      <div className="download-btn">
        <a href="/Chenchaiah.pdf" download="Chenchaiah.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
   </div>
   </>
  );
};


