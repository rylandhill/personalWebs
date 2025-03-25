import '../App.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import openDirectoryImg from "../assets/images/directory.png";
import closeDirectoryImg from "../assets/images/directoryClose.png";


function Skills() {
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
        <h1 class="title">SKILLS</h1>
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
        <div className="head">
          <h1>Languages</h1>
          <hr className="line"></hr>
          <ul className="itemList">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
          </ul>
          <hr className="line"></hr>
        </div>
        <div className="head">
          <h1>Frameworks/Libraries</h1>
        <hr className="line"></hr>
        </div>
      </div>
    );
}

export default Skills;