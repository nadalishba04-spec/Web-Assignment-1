import "./App.css";

import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Objectives from "./components/Objectives";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="container">
      <Intro />
      <AboutMe />
      <Objectives />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
