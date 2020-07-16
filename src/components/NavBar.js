import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Toolbar,
  AppBar,
  useScrollTrigger,
  Slide,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "../content/logo-32.png";
import { Link, animateScroll as scroll } from "react-scroll";

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
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  toolBar: {
    padding: "1%",
  },
  hidden: {
    padding: "1%",
  },
  icon: {
    marginRight: "auto",
    marginLeft: "7%",
  },
  miniContainer: {
    marginLeft: "auto",
  },
  links: {
    paddingRight: 20,
  },
  lastLink: {
    paddingRight: 0,
    marginRight: "7%",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.pageYOffset));

    return () =>
      window.removeEventListener("scroll", () => setY(window.pageYOffset));
  }, []);

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.nav} elevation={y === 0 ? 0 : 4}>
          <Toolbar className={classes.toolBar}>
            <Slide in={true} timeout={450}>
              <img
                className={classes.icon}
                src={logo}
                onClick={() => scrollToTop()}
                style={{ cursor: "pointer" }}
              />
            </Slide>
            <Slide in={true} timeout={950}>
              <Button className={classes.links}>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </Button>
            </Slide>
            <Slide in={true} timeout={1150}>
              <Button className={classes.links}>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </Button>
            </Slide>
            <Slide in={true} timeout={1350}>
              <Button className={classes.lastLink}>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>
            </Slide>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar className={classes.hidden} />
    </div>
  );
}
