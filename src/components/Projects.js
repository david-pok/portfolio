import React, { useState } from "react";
import { Grow, makeStyles, Typography } from "@material-ui/core/";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  projects: {
    paddingLeft: "23%",
    paddingRight: "23%",
    marginTop: 150,
    marginBottom: 150,
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
            <Typography variant="h3" align="left">
              A couple of my projects:
            </Typography>
          </Grow>
        </Waypoint>
      </div>
    </div>
  );
}
