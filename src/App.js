import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
          fontSize: 16,
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
