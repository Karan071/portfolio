import "./App.css";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import {Routes, Route} from "react-router-dom"
import Experience from "./Pages/Experience";
import Certifications from "./Pages/Certifications";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skill/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/certifications" element={<Certifications/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  )
}

export default App;
