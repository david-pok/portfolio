import React, { useState } from "react";
import { Grow, makeStyles, Typography } from "@material-ui/core/";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles(theme => ({
  intro: {
    // border: "1px solid red",
    paddingLeft: "23%",
    paddingRight: "23%",
    marginTop: 250,
    marginBottom: 150,
    [theme.breakpoints.down(1200)]: {
      paddingLeft: "18%",
      paddingRight: "18%",
      // border: "1px solid blue",
      marginTop: 200,
      marginBottom: 280,
    },
    [theme.breakpoints.down(1000)]: {
      paddingLeft: "15%",
      paddingRight: "15%",
      // border: "1px solid green",
      marginTop: 200,
      marginBottom: 300,
    },
    [theme.breakpoints.down(900)]: {
      paddingLeft: "13%",
      paddingRight: "13%",
      // border: "1px solid orange",
      marginTop: 190
    },
    [theme.breakpoints.down(780)]: {
      paddingLeft: "10%",
      paddingRight: "10%",
      // border: "1px solid black",
      marginTop: 80
    },
    [theme.breakpoints.down(450)]: {
      paddingLeft: "7%",
      paddingRight: "7%",
      // border: "1px solid teal",
      marginTop: 50
    }
  },
  typos: {
    paddingBottom: 10
  },
  name: {
    paddingBottom: 30,
    paddingLeft: 110,
    [theme.breakpoints.down(550)]: {
      paddingLeft: 5
    }
  }
}));

export default function Intro() {
  const [animate, setAnimate] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={1550}>
          <Typography align="left" className={classes.typos}>
            Hi, my name is
          </Typography>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate(true)}>
        <Grow in={animate} timeout={1950}>
          <Typography variant="h1" align="left" className={classes.name}>
            David Pok.
          </Typography>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography variant ="h5" align="left" className={classes.typos}>
              I'm a full stack software developer and I build things.
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography variant="h4" align="left" className={classes.typos}>
              Welcome to my site.
            </Typography>
          </Grow>
        </Waypoint>
    </div>
  );
}
