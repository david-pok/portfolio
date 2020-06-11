import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "Montserrat",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Intro />
        {/* <button>
          <a href="#testing">click to scroll to testing</a>
        </button> */}
        <About />

        <Projects />

        <Contact />

        <div id="testing">hash test</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
