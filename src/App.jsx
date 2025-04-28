import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Work";
import Contact from "./components/Contact";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      green: "#2bd576",
      Pcolor:"#6f7378",
      bg:"#18191a"
    },
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <wrapper className="wrapper"> */}
        <div className="main">
          <BrowserRouter>
            <Header className="header" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      {/* </wrapper> */}
    </ThemeProvider>
  );
}

export default App;
