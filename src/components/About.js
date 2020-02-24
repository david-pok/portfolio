import React, { useState } from "react";
import { Grow } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import "./components.css";

const useStyles = makeStyles(theme => ({
  
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <div className="about">
      <Grow in={props.animate} timeout={700}>
        <h1>ABOUT ME!!!!</h1>
      </Grow>
      <Grow in={props.animate} timeout={1000}>
        <p>
          SOME TEXT ABOUT ME. THIS IS JUST SOME FILLER FOR A TEST. BLAH BLAH
          BLAH
        </p>
      </Grow>
    </div>
  );
}
