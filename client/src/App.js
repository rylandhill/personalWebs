import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./pages/music";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import openDirectoryImg from "./assets/images/directory.png";
import closeDirectoryImg from "./assets/images/directoryClose.png";



function HomeScreen(){
  const [isFlying, setIsFlying] = useState(false);
  function ToggleButton(){
    var curr = document.getElementById("directoryImg").src;
    document.getElementById("linkBtn").style.visibility = "visible";
    if(curr == openDirectoryImg){
      document.getElementById("directoryImg").src = closeDirectoryImg;
      setIsFlying(true);
    }else{
      document.getElementById('directoryImg').src = openDirectoryImg;
      setIsFlying(false);
    }
  };
  const navigate = useNavigate();
  return(
    <div className="App">
      <div class="header">
      <h1 class="title">RYLAND HILL</h1>
      <div className="directoryButton" onClick={()=>ToggleButton()}>
        <img id="directoryImg" className="directoryImg" src={openDirectoryImg} alt="directory"/>
      </div>
      </div>
      <div id="linkBtn" className={`linkDiv ${isFlying ? "active" : "hidden"}`}>
        <button className="linkButton" onClick={()=>navigate("/")}>Home</button>
        <button className="linkButton" onClick={()=>navigate("/projects")}>Projects</button>
        <button className="linkButton" onClick={()=>navigate("/skills")}>Skills</button>
        <button className="linkButton" onClick={()=>navigate("/music")}>Music</button>
      </div>
    </div>
  );
}

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/music" element={<Music />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
