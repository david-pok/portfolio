import React from "react";
import {
  makeStyles,
  Toolbar,
  AppBar,
  Typography,
  useScrollTrigger,
  Slide
} from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "./logo-32.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#ffffff",
    color: "#000000"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

export default function NavBar(props) {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link onClick={() => scrollToTop()} style={{ cursor: "pointer" }}>
              <img src={logo} />
            </Link>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              className="scroll-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link>Projects</Link>
            {/* <Link>Experience</Link> */}
            <Link>Contact</Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
