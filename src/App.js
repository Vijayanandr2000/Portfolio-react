import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Navbar /> */}
      <About />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
