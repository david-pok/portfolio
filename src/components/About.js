import React, { useState } from "react";
import { Grow, makeStyles } from "@material-ui/core/";

import "./components.css";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles(theme => ({}));

export default function About(props) {
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  console.log("about props", props);
  const classes = useStyles();

  return (
    <div className="about">
      <Waypoint onEnter={() => setAnimate1(true)}>
        <Grow in={animate1} timeout={650}>
          <h1>test</h1>
        </Grow>
      </Waypoint>
      <Waypoint onEnter={() => setAnimate2(true)}>
        <Grow in={animate2} timeout={1550}>
          <h3>
            THIS IS SOME RANDOM FILLER STUFF ABOUT ME IM JUST FILLING IT WITH
            SOME TEXT
          </h3>
        </Grow>
      </Waypoint>
    </div>
  );
}
