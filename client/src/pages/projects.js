import '../App.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import openDirectoryImg from "../assets/images/directory.png";
import closeDirectoryImg from "../assets/images/directoryClose.png";
import connect4Img from "../assets/images/connect4.png";
import insightUpImg from "../assets/images/insightup.png";
import snakeImg from "../assets/images/snake.png";
import raspberryPiImg from "../assets/images/rpi.png";
import xImg from "../assets/images/x.png";


function Projects() {
    const [isFlying, setIsFlying] = useState(false);
    const [isCovered, setIsCovered] = useState(false);
    document.addEventListener("keydown", (e) => {
      setIsCovered(false);
      document.body.style.overflow = "auto";
    });
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
    function learnMore(which){
      setIsCovered(true);
      document.body.style.overflow = "hidden";
      if(which==1){
        document.getElementById("description").innerHTML = "<h1>Connect 4</h1><br></br><h3>Connect 4 made in Java using Swing for the interface.</h3>";
      }else if(which==2){
        document.getElementById("description").innerHTML = '<h1>InsightUp</h1><br></br><h3>A website (pure HTML/CSS/JS) I was commissioned to make allowing you to input your blood test results and recieve information about what the rsults mean, and external sources which will allow you to learn more about your personal issues/possible treatment. The website can be found at this <a href="https://insightup.neocities.org/" target="_blank">link</a>.</h3>';
      }else if(which==3){
        document.getElementById("description").innerHTML = '<h1>snake</h1><br></br><h3>The game snake built in HTML/CSS/JS available at this <a href="/snake.html" target="_blank">link</a>.</h3>';
      }else if(which==4){
        document.getElementById("description").innerHTML = "<h1>Raspberry Pi</h1><br></br><h3>A Raspberry Pi Zero WH configured to update it's epaper display output every 24 hours.";
      }
    }
    function closeLearn(){
      setIsCovered(false);
      document.body.style.overflow = "auto";
    }
    const navigate = useNavigate();
    return(
        <div className="App">
        <div class="header">
        <h1 className="title">PROJECTS</h1>
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
        <div></div>
        <div>
          <div className="projectPanel" id="proj1">
            <img className="projectImage" src={connect4Img} alt="connect4 image"></img>
            <div className="overlay">
              <div className="description">
              <h1>CONNECT 4</h1>
              <button className="learn" id="connect4Btn" onClick={()=>learnMore(1)}>Learn More</button>
              </div>
            </div>
          </div>
          <br></br>
          <div className="projectPanel" id="proj2">
          <img className="projectImage" src={insightUpImg} alt="insightup image"></img>
          <div className="overlay">
              <div className="description">
              <h1>INSIGHTUP</h1>
              <button className="learn" id="insightBtn" onClick={()=>learnMore(2)}>Learn More</button>
              </div>
            </div>
          </div>
          <br></br>
          <div className="projectPanel" id="proj3">
          <img className="projectImage" src={snakeImg} alt="snake image"></img>
          <div className="overlay">
              <div className="description">
              <h1>SNAKE</h1>
              <button className="learn" id="snakeBtn" onClick={()=>learnMore(3)}>Learn More</button>
              </div>
            </div>
          </div>
          <br></br>
          <div className="projectPanel" id="proj4">
          <img className="projectImage" src={raspberryPiImg} alt="raspberry pi image"></img>
          <div className="overlay">
              <div className="description">
                <h1>RASPBERRY PI</h1>
                <button className="learn" id="rpiBtn" onClick={()=>learnMore(4)}>Learn More</button>
                </div>
            </div>
          </div>
          <br></br><br></br><br></br>
          <div className={`bigOverlay ${isCovered ? "active" : "hidden"}`}>
          <div id="closeBtn"><img src={xImg} alt="Close" id="closeLearn" onClick={()=>closeLearn()}></img></div>
            <div className="learnContent" id="overlayContent">
              
              <div id="description"></div>
            </div>
          </div>
        </div>
      </div>
      
    );
}
export default Projects;