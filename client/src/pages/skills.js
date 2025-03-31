import '../App.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import openDirectoryImg from "../assets/images/directory.png";
import closeDirectoryImg from "../assets/images/directoryClose.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import jsImg from "../assets/images/javascript.png";
import pyImg from "../assets/images/python.png";
import javaImg from "../assets/images/java.avif";
import cImg from "../assets/images/c.png";
import cppImg from "../assets/images/cpp.png";
import sqlImg from "../assets/images/sql.png";
import vhdlImg from "../assets/images/vhdl.png";
import reactImg from "../assets/images/react.png";
import nodeImg from "../assets/images/node.png";
import expressImg from "../assets/images/express.png";
import seleneiumImg from "../assets/images/selenium.png";
import tensorflowImg from "../assets/images/tensorflow.png";
import mediapipeImg from "../assets/images/mediapipe.png";
import opencvImg from "../assets/images/opencv.png";
import flaskImg from "../assets/images/flask.png";
import dukeImg from "../assets/images/duke.png";
import gitImg from "../assets/images/git.png";
import awsImg from "../assets/images/aws.png";
import linuxImg from "../assets/images/linux.png";
import raspberryPiImg from "../assets/images/raspberrypi.png";
import wiresharkImg from "../assets/images/wireshark.png";
import vscodeImg from "../assets/images/vscode.png";

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
          <div className="iconList">
          <div className="itemIcon"><img src={htmlImg} alt="html icon" className="iconImg"/><div className="skillTitle">HTML</div></div>
          <div className="itemIcon"><img src={cssImg} alt="css icon" className="iconImg"/><div className="skillTitle">CSS</div></div>
          <div className="itemIcon"><img src={jsImg} alt="html icon" className="iconImg"/><div className="skillTitle">JavaScript</div></div>
          <div className="itemIcon"><img src={pyImg} alt="html icon" className="iconImg"/><div className="skillTitle">Python</div></div>
          <div className="itemIcon"><img src={javaImg} alt="html icon" className="iconImg"/><div className="skillTitle">Java</div></div>
          <div className="itemIcon"><img src={cImg} alt="html icon" className="iconImg"/><div className="skillTitle">C</div></div>
          <div className="itemIcon"><img src={cppImg} alt="html icon" className="iconImg"/><div className="skillTitle">C++</div></div>
          <div className="itemIcon"><img src={sqlImg} alt="html icon" className="iconImg"/><div className="skillTitle">SQL</div></div>
          <div className="itemIcon"><img src={vhdlImg} alt="html icon" className="iconImg"/><div className="skillTitle">VHDL</div></div>
          </div>
          <hr className="line"></hr>
        </div>
        <div className="head">
          <h1>Frameworks & Libraries</h1>
        <hr className="line"></hr>
        <div className="iconList">
        <div className="itemIcon"><img src={reactImg} alt="html icon" className="iconImg"/><div className="skillTitle">React</div></div>
        <div className="itemIcon"><img src={nodeImg} alt="html icon" className="iconImg"/><div className="skillTitle">Node.JS</div></div>
        <div className="itemIcon"><img src={expressImg} alt="html icon" className="iconImg"/><div className="skillTitle">Express</div></div>
        <div className="itemIcon"><img src={seleneiumImg} alt="html icon" className="iconImg"/><div className="skillTitle">Selenium</div></div>
        <div className="itemIcon"><img src={tensorflowImg} alt="html icon" className="iconImg"/><div className="skillTitle">Tensorflow</div></div>
        <div className="itemIcon"><img src={mediapipeImg} alt="html icon" className="iconImg"/><div className="skillTitle">Mediapipe</div></div>
        <div className="itemIcon"><img src={opencvImg} alt="html icon" className="iconImg"/><div className="skillTitle">OpenCV</div></div>
        <div className="itemIcon"><img src={flaskImg} alt="html icon" className="iconImg"/><div className="skillTitle">Flask</div></div>
        <div className="itemIcon"><img src={dukeImg} alt="html icon" className="iconImg"/><div className="skillTitle">JSwing</div></div>
        </div>
        <hr className="line"></hr>
        </div>
        <div className="head">
        <h1>Tools</h1>
        <hr className="line"></hr>
        <div className="iconList">
        <div className="itemIcon"><img src={gitImg} alt="html icon" className="iconImg"/><div className="skillTitle">Git</div></div>
        <div className="itemIcon"><img src={awsImg} alt="html icon" className="iconImg"/><div className="skillTitle">AWS</div></div>
        <div className="itemIcon"><img src={linuxImg} alt="html icon" className="iconImg"/><div className="skillTitle">Linux</div></div>
        <div className="itemIcon"><img src={raspberryPiImg} alt="html icon" className="iconImg"/><div className="skillTitle" id="rpiTitle">RaspberryPi</div></div>
        <div className="itemIcon"><img src={wiresharkImg} alt="html icon" className="iconImg"/><div className="skillTitle">Wireshark</div></div>
        <div className="itemIcon"><img src={vscodeImg} alt="html icon" className="iconImg"/><div className="skillTitle">VSCode</div></div>
        </div>
        </div>
      </div>
    );
}

export default Skills;