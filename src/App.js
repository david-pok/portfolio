import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Grow } from "@material-ui/core/";
import Zoom from "@material-ui/core/Zoom";
import { Waypoint } from "react-waypoint";

function App() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "Heebo, sans-serif"
        }
      }),
    []
  );

  const [animate, setAnimate] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <h1>asdfsadf</h1>
        <button>
          <a href="#testing">ASDFYASIDFI CLICK</a>
        </button>

        <Waypoint onEnter={() => setAnimate(true)}>
          <Zoom in={animate} timeout={650}>
            <h1 id="test">test</h1>
          </Zoom>
        </Waypoint>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Waypoint onEnter={() => setAnimate(true)}>
          <About animate={animate} setAnimate={setAnimate} />
        </Waypoint>

        <Projects />
        <Contact />
        <div id="testing">hash test</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
