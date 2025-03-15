import '../App.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import openDirectoryImg from "../assets/images/directory.png";
import closeDirectoryImg from "../assets/images/directoryClose.png";
import connect4Img from "../assets/images/connect4.png";
import insightUpImg from "../assets/images/insightup.png";
import snakeImg from "../assets/images/snake.png";
import raspberryPiImg from "../assets/images/rpi.png";


function Projects() {
    const photoArr = [connect4Img,insightUpImg,snakeImg,raspberryPiImg];
    const descriptionArr = ["The popular board game built in Java using swing","A pure HTML/CSS/JS website for blood results comprehension","The game snake made in HTML/CSS/JS","A raspberry pi zero wh with an epaper display updating text every 24hrs"];
    var index = 0;
    const [isFlying, setIsFlying] = useState(false);
    function UpdateScreen(){
      document.getElementById("projPhoto").src = photoArr[index];
      document.getElementById("description").innerHTML = descriptionArr[index];
    }
    function NextImage(){
      index+=1;
      index%=4;
      UpdateScreen();
    }
    function LastImage(){
      index-=1;
      if(index<0){index = 3;}
      UpdateScreen();
    }
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
        <h1 class="title">PROJECTS</h1>
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
        <div className="projectContainer">
          <button id="returnProj" className="projectBtn" onClick={()=>LastImage()}>&lt;</button>
          <img id="projPhoto" src={connect4Img}></img>
          <button id="advanceProj" className="projectBtn" onClick={()=>NextImage()}>&gt;</button>
        </div>
        <div className="descriptionBox">
          <h5 id="description">The popular board game built in Java using swing</h5>
          <button id="moreInfo">Learn More</button>
        </div>
        <br></br><br></br><br></br>
      </div>
    );
}

export default Projects;