import React, { useState } from "react";
import { Grow, makeStyles, Typography } from "@material-ui/core/";

import "./components.css";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles(theme => ({
  about: {
    border: "1px solid red",
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 150,
    marginBottom: 150,
    [theme.breakpoints.down(1200)]: {
      paddingLeft: "18%",
      paddingRight: "18%",
      border: "1px solid blue",
    },
    [theme.breakpoints.down(1000)]: {
      paddingLeft: "15%",
      paddingRight: "15%",
      border: "1px solid green",
    },
    [theme.breakpoints.down(900)]: {
      paddingLeft: "13%",
      paddingRight: "13%",
      border: "1px solid orange",
    },
    [theme.breakpoints.down(780)]: {
      paddingLeft: "10%",
      paddingRight: "10%",
      border: "1px solid black",
    },
    [theme.breakpoints.down(450)]: {
      paddingLeft: "7%",
      paddingRight: "7%",
      border: "1px solid teal",
    },
  },
  typos: {
    paddingBottom: 10
  },
  name: {
    paddingBottom: 30
  }
}));

export default function About(props) {
  const [animate, setAnimate] = useState(false);

  console.log("about props", props);
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={650}>
          <Typography variant="h3" align="left">
            About me:
          </Typography>
        </Grow>
      </Waypoint>
      <br />
      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={1550}>
          <Typography align="left" className={classes.typos}>
            Hi, my name is
          </Typography>
        </Grow>
      </Waypoint>
      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={1950}>
          <Typography variant="h2" align="left" className={classes.name}>
            David Pok.
          </Typography>
        </Grow>
      </Waypoint>
      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={1950}>
          <Typography align="left" className={classes.typos}>
            I'm a full stack software developer and currently based in Los
            Angeles, CA.
          </Typography>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={2350}>
          <Typography align="left" className={classes.typos}>
            I mostly program with Javascript and am experienced in many other
            languages.
          </Typography>
        </Grow>
      </Waypoint>
    </div>
  );
}
