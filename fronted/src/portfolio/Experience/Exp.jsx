import React, { useState } from "react";

import Byjus from "../../portfolio/Experience/Byjus.jsx";
import President from "../../portfolio/Experience/President.jsx";
import Assistant from "../../portfolio/Experience/Assistant.jsx";

export default function Exp() {
 
  return (
  
      <div className="experience-container">
        <h2>Experience</h2>
        <hr />
        <President/>
        <Assistant/>
        <Byjus/>
      </div>

  );
}
