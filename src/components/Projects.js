import React, { useState } from "react";
import { Grow, makeStyles, Typography, Grid } from "@material-ui/core/";
import { Waypoint } from "react-waypoint";
import Citric from "../content/citric.jpg";

const useStyles = makeStyles((theme) => ({
  projects: {
    paddingLeft: "23%",
    paddingRight: "23%",
    marginTop: 150,
    marginBottom: 150,
  },
  projHeader: {
    marginBottom: 150,
  },
  firstProj: {
    border: "1px solid red",
  },
}));

export default function Projects() {
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
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
          <Grow in={animate2} timeout={800}>
            <div className={classes.firstProj}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img src={Citric} width="600" />
                </Grid>
              </Grid>
            </div>
          </Grow>
          {/* <Grow in={animate2} timeout={800}>
            <Grid item xs={12} sm={6}>
              <img src={Citric} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" align="right">
                Citrics
              </Typography>
            </Grid>
          </Grow> */}
        </Waypoint>
      </div>
    </div>
  );
}
