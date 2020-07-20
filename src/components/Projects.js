import React, { useState } from "react";
import { Grow, makeStyles, Typography, Box, Grid } from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Waypoint } from "react-waypoint";
import Citric from "../content/citric.jpg";
import Songify from "../content/songify.png";

const useStyles = makeStyles((theme) => ({
  projects: {
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 150,
    marginBottom: 150,
  },
  containerHeader: {
    marginBottom: 20,
    marginTop: 50,
    [theme.breakpoints.down(600)]: {
      marginTop: -5,
    },
  },
  citTitle: {
    marginBottom: 20,
    marginTop: 50,
    [theme.breakpoints.down(600)]: {
      marginTop: -10,
    },
  },
  songTitle: {
    marginBottom: 20,
    marginTop: 25,
  },
  citDes: {
    paddingBottom: 25,
  },
  songDes: {
    paddingBottom: 25,
  },
  citContainer: {
    height: "100%",
    marginTop: 100,
    marginBottom: 100,
  },
  songContainer: {
    height: "100%",
    marginTop: 100,
    marginBottom: 100,
  },
  citPic: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down(600)]: {
      marginBottom: -10,
    },
  },
  songPic: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down(600)]: {
      paddingTop: 0,
    },
  },
  linksContainer1: {
    float: "right",
  },
  linksContainer2: {
    float: "left",
  },
}));

export default function Projects() {
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const classes = useStyles();

  return (
    <div className="projects">
      <div className={classes.projects}>
        <Waypoint onEnter={() => setAnimate1(true)}>
          <Grow in={animate1} timeout={650}>
            <Typography
              variant="h3"
              align="left"
              className={classes.containerHeader}
            >
              <Box fontWeight="fontWeightBold">A couple of my projects:</Box>
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate2(true)}>
          <Grow in={animate2} timeout={900}>
            <div className={classes.citContainer}>
              <Grid container spacing={7}>
                <Grid item xs={12} sm={6}>
                  <a>
                    <img src={Citric} className={classes.citPic} />
                  </a>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h4"
                    align="right"
                    className={classes.citTitle}
                  >
                    <Box fontWeight="fontWeightBold">Citrics</Box>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="right"
                    className={classes.citDes}
                  >
                    React | Redux | Node | Express | Postgres
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="right"
                    className={classes.citDes}
                  >
                    For the young professionals who are looking to relocate.
                    Citrics is an app that helps you relocate based on your
                    requirements, and lets you view and compare city data.
                  </Typography>

                  <div className={classes.linksContainer1}>
                    <a>
                      <GitHubIcon />
                    </a>
                    <a>
                      <ExitToAppIcon style={{ paddingLeft: "20" }} />
                    </a>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate3(true)}>
          <Grow in={animate2} timeout={1150}>
            <div className={classes.songContainer}>
              <Grid container spacing={7}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.songTitle}
                  >
                    <Box fontWeight="fontWeightBold">Songify</Box>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className={classes.citDes}
                  >
                    React | Redux | Node | Express | SQLite
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="left"
                    className={classes.songDes}
                  >
                    For music lovers who want to discover and find new music.
                    Simply input your song of choice and find suggestions based
                    off the Spotify API.
                  </Typography>
                  <div className={classes.linksContainer2}>
                    <a
                      href="https://github.com/Build-Week-Spotify-1/Web-Front-End"
                      target="_blank"
                    >
                      <GitHubIcon style={{ paddingRight: "20" }} />
                    </a>
                    <a href="https://songify.now.sh/" target="_blank">
                      <ExitToAppIcon />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <a href="https://songify.now.sh/" target="_blank">
                    <img src={Songify} className={classes.songPic} />
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grow>
        </Waypoint>
      </div>
    </div>
  );
}
