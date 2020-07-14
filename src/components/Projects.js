import React, { useState } from "react";
import { Grow, makeStyles, Typography, Grid } from "@material-ui/core/";
import { Waypoint } from "react-waypoint";
import Citric from "../content/citric.jpg";

const useStyles = makeStyles((theme) => ({
  projects: {
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 150,
    marginBottom: 150,

  },
  projHeader: {
    marginBottom: 20,
    marginTop: 50,
    [theme.breakpoints.down(600)]: {
      marginTop: 10,
    },
  },
  projDes: {
    marginRight: "2%",
  },
  projContainer: {
    marginTop: 100,
    marginBottom: 100,

  },
  projPic: {
    width: "100%",
    height: "100%",
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
              className={classes.projHeader}
            >
              A couple of my projects:
            </Typography>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate2(true)}>
          <Grow in={animate2} timeout={900}>
            <div className={classes.projContainer}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <img src={Citric} className={classes.projPic} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h4"
                    align="right"
                    className={classes.projHeader}
                  >
                    Citrics
                  </Typography>
                  <Typography
                    variant="body1"
                    align="right"
                    className={classes.projDes}
                  >
                    For the young professionals who are looking to relocate.
                    Citrics is an app that helps you relocate based on your
                    requirements, and lets you view and compare city data.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grow>
        </Waypoint>

        <Waypoint onEnter={() => setAnimate3(true)}>
          <Grow in={animate2} timeout={1150}>
            <div className={classes.projContainer}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.projHeader}
                  >
                    Citrics
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    className={classes.projDes}
                  >
                    For the young professionals who are looking to relocate.
                    Citrics is an app that helps you relocate based on your
                    requirements, and lets you view and compare city data.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={Citric} className={classes.projPic} />
                </Grid>
              </Grid>
            </div>
          </Grow>
        </Waypoint>
      </div>
    </div>
  );
}
