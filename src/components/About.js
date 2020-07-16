import React, { useState } from "react";
import { Grow, makeStyles, Typography, Box } from "@material-ui/core/";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./components.css";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  about: {
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 150,
    marginBottom: 150,
    [theme.breakpoints.down(1200)]: {
      paddingLeft: "18%",
      paddingRight: "18%",
      marginTop: 120,
    },
    [theme.breakpoints.down(1000)]: {
      paddingLeft: "15%",
      paddingRight: "15%",
      marginTop: 90,
    },
    [theme.breakpoints.down(900)]: {
      paddingLeft: "13%",
      paddingRight: "13%",
      marginTop: 90,
    },
    [theme.breakpoints.down(780)]: {
      paddingLeft: "10%",
      paddingRight: "10%",
      marginTop: 80,
    },
    [theme.breakpoints.down(450)]: {
      paddingLeft: "7%",
      paddingRight: "7%",
      marginTop: 50,
    },
  },
  typos: {
    paddingBottom: 10,
  },
  name: {
    paddingBottom: 30,
  },
  lambda: {
    color: "#ec3944",
    textDecoration: "none",
  },
  aboutHeader: {
    marginBottom: 50,
  },
  icons: {
  },
}));

export default function About() {
  const [animate, setAnimate] = useState(false);

  const classes = useStyles();

  return (
    <div className="about">
      <div className={classes.about}>
        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={650}>
            <Typography
              variant="h3"
              align="left"
              className={classes.aboutHeader}
            >
              <Box fontWeight="fontWeightBold">About me:</Box>
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1550}>
            <Typography align="left" className={classes.typos}>
              I'm a full stack software developer currently based in Los
              Angeles, California. I spend most of my time coding with
              Javascript and am experienced in a few others. I enjoy building
              beautiful and functional web apps.
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.name}>
              I am a student and graduate of{" "}
              <a
                className={classes.lambda}
                href="https://lambdaschool.com/"
                target="_blank"
              >
                Lambda School
              </a>
              . Here are a few technologies I've learned to use during my time
              there:
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              JavasScript
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              Node
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              Express
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              Python
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              HTML & CSS
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Grow in={animate} timeout={1950}>
            <Typography align="left" className={classes.typos}>
              <ArrowRightIcon fontSize="inherit"></ArrowRightIcon>
              React
            </Typography>
          </Grow>
        </Waypoint>
      </div>
    </div>
  );
}
