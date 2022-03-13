import React from "react";
import ScriptTag from 'react-script-tag';
import Animated from "./Animation/Animated";

import './intro.css';
import './introfl'


function Intro() {
  return (
    <>
    <Animated/>
      <h1>
        <a
          href=" "
          class="typewrite"
          data-period="2000"
          data-type='[ "I am Mihir Sharma", "I Love To Code.", "I Love to Develop." ]'
        >
          <span class="wrap"></span>
        </a>
      </h1>
    <ScriptTag type="text/javascript" src='./introfl.js' />
    </>
  );
}

export default Intro;
