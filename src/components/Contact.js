import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Button,
  Grow,
  Box,
  Link,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  contHeader: {
    paddingBottom: 40,
  },
  contDesc: {
    paddingBottom: 40,
  },
  contButton: {
    marginBottom: 40,
  },
  iconContainer: {
    paddingBottom: 40,
  },
  githubIcon: {
    paddingRight: 10,
  },
  linkedIcon: {
    paddingLeft: 10,
  },
  builtBy: {
    marginTop: 100,
    paddingTop: 100,
    textDecoration: "none",
    "&:hover": {
      color: "#A9A9A9",
    },
  },
  builtByCont: {
    marginTop: 100,
    paddingTop: 100,
  },
}));

export default function Contact() {
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);
  const [animate5, setAnimate5] = useState(false);

  const classes = useStyles();
  return (
    <div className="contact">
      <Waypoint onEnter={() => setAnimate1(true)}>
        <Grow in={animate1} timeout={650}>
          <Typography
            variant="h3"
            align="center"
            className={classes.contHeader}
          >
            <Box fontWeight="fontWeightBold">Get in contact:</Box>
          </Typography>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate2(true)}>
        <Grow in={animate1} timeout={900}>
          <Typography
            variant="body1"
            align="center"
            className={classes.contDesc}
          >
            I'm open to queries. You can email me or checkout my other stuff by
            clicking below.
          </Typography>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate3(true)}>
        <Grow in={animate1} timeout={1250}>
          <Button variant="outlined" className={classes.contButton}>
            <a
              href="mailto:david.pok@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Email me
            </a>
          </Button>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate4(true)}>
        <Grow in={animate1} timeout={1500}>
          <div className={classes.iconContainer}>
            <a
              href="https://github.com/david-pok"
              className={classes.githubIcon}
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dpok/"
              className={classes.linkedIcon}
            >
              <LinkedInIcon />
            </a>
          </div>
        </Grow>
      </Waypoint>

      <Waypoint onEnter={() => setAnimate5(true)}>
        <Grow in={animate5} timeout={1750}>
          <div className={classes.builtByCont}>
            <a
              href="https://github.com/david-pok/portfolio"
              className={classes.builtBy}
            >
              <Typography>Built by David Pok</Typography>
            </a>
          </div>
        </Grow>
      </Waypoint>
    </div>
  );
}
