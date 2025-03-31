import '../App.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import openDirectoryImg from "../assets/images/directory.png";
import closeDirectoryImg from "../assets/images/directoryClose.png";
import amparadoxImg from "../assets/images/albumCovers/amparadox.png";
import appaloosaImg from "../assets/images/albumCovers/appaloosa.png";
import automaticImg from "../assets/images/albumCovers/automatic.png";
import balloonerismImg from "../assets/images/albumCovers/balloonerism.png";
import blondeImg from "../assets/images/albumCovers/blonde.jpeg";
import boysAImg from "../assets/images/albumCovers/boysA.jpg";
import boysBimg from "../assets/images/albumCovers/boysB.jpg";
import brightsideImg from "../assets/images/albumCovers/brightside.png";
import businessImg from "../assets/images/albumCovers/business.jpeg";
import bybyImg from "../assets/images/albumCovers/byby.jpg";
import caampImg from "../assets/images/albumCovers/caamp.jpeg";
import cafeImg from "../assets/images/albumCovers/cafeRacer.jpeg";
import circlesImg from "../assets/images/albumCovers/circles.png";
import cleopatraImg from "../assets/images/albumCovers/cleopatra.jpg";
import damnImg from "../assets/images/albumCovers/damn.png";
import declanImg from "../assets/images/albumCovers/declan.jpg";
import demonImg from "../assets/images/albumCovers/demondays.png";
import dukeJImg from "../assets/images/albumCovers/dukeJohn.jpg";
import eveningImg from "../assets/images/albumCovers/eveningMachines.jpg";
import facesImg from "../assets/images/albumCovers/faces.jpg";
import fromUnderImg from "../assets/images/albumCovers/fromunder.jpg";
import gkmcImg from "../assets/images/albumCovers/gkmc.jpg";
import goodAMImg from "../assets/images/albumCovers/goodam.jpg";
import harmonyIng from "../assets/images/albumCovers/harmony.jpg";
import hemisphereImg from "../assets/images/albumCovers/hemisphere.jpeg";
import hozierImg from "../assets/images/albumCovers/hozier.png";
import iiiImg from "../assets/images/albumCovers/iii.png";
import ilovelifeImg from "../assets/images/albumCovers/ilovelife.jpg";
import betweenDreamsImg from "../assets/images/albumCovers/inbetweendreams.jpg";
import infinityImg from "../assets/images/albumCovers/infinityOnHigh.jpg";
import kellyBlueImg from "../assets/images/albumCovers/kellyBlue.jpg";
import kidsImg from "../assets/images/albumCovers/kids.jpg";
import laurynHillImg from "../assets/images/albumCovers/laurynHill.png";
import lavenderDaysImg from "../assets/images/albumCovers/lavenderdays.png";
import lonesomeDreamsImg from "../assets/images/albumCovers/lonesomeDreams.png";
import lumineersImg from "../assets/images/albumCovers/lumineers.jpg";
import macadelicImg from "../assets/images/albumCovers/macadelic.jpeg";
import madvillainyImg from "../assets/images/albumCovers/madvillainy.jpg";
import melophobiaImg from "../assets/images/albumCovers/melophobia.jpg";
import mrMoraleImg from "../assets/images/albumCovers/mrMorale.png";
import neonPillImg from "../assets/images/albumCovers/neonPill.png";
import normalImg from "../assets/images/albumCovers/normal.jpeg";
import nothingHappensImg from "../assets/images/albumCovers/nothingHappens.png";
import processImg from "../assets/images/albumCovers/process.jpg";
import saveRockImg from "../assets/images/albumCovers/saverock.jpg";
import socialCuesImg from "../assets/images/albumCovers/socialCues.jpg";
import sonderSonImg from "../assets/images/albumCovers/sonderson.jpeg";
import stardustImg from "../assets/images/albumCovers/stardust.png";
import sticksznImg from "../assets/images/albumCovers/stickszn.png";
import strangeTrailsImg from "../assets/images/albumCovers/strangeTrails.jpg";
import sundayImg from "../assets/images/albumCovers/sunday.jpeg";
import swimmingImg from "../assets/images/albumCovers/swimming.png";
import thatSeaImg from "../assets/images/albumCovers/thatSea.jpeg";
import tpabImg from "../assets/images/albumCovers/tpab.png";
import uncomfortableImg from "../assets/images/albumCovers/uncomfortable.jpeg";
import unrealImg from "../assets/images/albumCovers/unreal.png";
import wastelandImg from "../assets/images/albumCovers/wasteland.png";
import weathermanImg from "../assets/images/albumCovers/weatherman.jpg";
import wmwtsoImg from "../assets/images/albumCovers/wmwtso.jpg";
import youImg from "../assets/images/albumCovers/you.png";
import heartImg from "../assets/images/heart.png";


class song {
  artistInt;
  nameInt;
  albumInt;
  coverInt;
  constructor(artist, name, album, cover){
    this.artistInt = artist;
    this.nameInt = name;
    this.albumInt = album;
    this.coverInt = cover;
  }
  get artist(){
    return this.artistInt;
  }
  get name(){
    return this.nameInt;
  }
  get album(){
    return this.albumInt;
  }
  get cover(){
    return this.coverInt;
  }
}

function Music() {
    const [isFlying, setIsFlying] = useState(false);
    var entries = [new song("Mac Miller","2009","Swimming",swimmingImg),new song("Mac Miller","Stoned","Balloonerism",balloonerismImg),new song("Mac Miller","Funny Papers","Balloonerism",balloonerismImg),new song("Mac Miller","Colors and Shapes","Faces",facesImg),new song("Mac Miller","New Faces v2 (feat. Earl Sweatshirt and Da$h)","Faces",facesImg),new song("Mac Miller","Perfect Circle / God Speed","GO:OD AM",goodAMImg),new song("Mac Miller","Just a Kid","I Love Life, Thank You",ilovelifeImg),new song("Mac Miller","Nikes On My Feet","K.I.D.S",kidsImg),new song("Mac Miller","Clarity","Macadelic",macadelicImg),new song("Mac Miller","The Quest","Watching Movies With The Sound Off",wmwtsoImg),new song("Mac Miller","Woods","Circles",circlesImg),new song("Mac Miller","Once A Day","Circles",circlesImg),new song("The Lumineers","You're all I got","Automatic",automaticImg),new song("The Lumineers","Keys on the Table","Automatic",automaticImg),new song("The Lumineers","A.M. Radio","Brightside",brightsideImg),new song("The Lumineers","In The Light","Cleopatra",cleopatraImg),new song("The Lumineers","Gloria","III",iiiImg),new song("The Lumineers","Classy Girls","The Lumineers",lumineersImg),lumineersImg,new song("The Lumineers","Slow It Down","The Lumineers",lumineersImg),new song("The Lumineers","Charlie Boy","The Lumineers",lumineersImg),new song("Caamp","26","Boys (Side A)",boysAImg),new song("Caamp","Books","Boys (Side B)",boysBimg),new song("Caamp","Moonsmoke","By and By",bybyImg),new song("Caamp","All the Debts I Owe","Caamp",caampImg),new song("Caamp","Iffy","Caamp",caampImg),new song("Caamp","Mockingbird Song","Caamp",caampImg),new song("Caamp","Lavender Girl","Lavender Days",lavenderDaysImg),new song("Gregory Alan Isakov","The Fall","Appaloosa Bones",appaloosaImg),new song("Gregory Alan Isakov","San Luis","Evening Machines",eveningImg),new song("Gregory Alan Isakov","Southern Star","Evening Machines",eveningImg),new song("Gregory Alan Isakov","The Stable Song","That Sea, the Gambler",thatSeaImg),new song("Gregory Alan Isakov","Unwritable Girl","That Sea, the Gambler",thatSeaImg),new song("Gregory Alan Isakov","Living Proof","The Weatherman",weathermanImg),new song("Gregory Alan Isakov","Suitcase Full of Sparks","The Weatherman",weathermanImg),new song("Gregory Alan Isakov","She Always Takes It Black","The Weatherman",weathermanImg),new song("Gregory Alan Isakov","Big Black Car","This Empty Northern Hemisphere",hemisphereImg),new song("Sampha","Blood On Me","Process",processImg),new song("Cage the Elephant","Spiderhead","Melophobia",melophobiaImg),new song("Cage the Elephant","Cigarette Daydreams","Melophobia",melophobiaImg),new song("Cage the Elephant","Rainbow","Neon Pill",neonPillImg),new song("Cage the Elephant","Ready to Let Go","Social Cues",socialCuesImg),new song("Kendrick Lamar","PRIDE.","DAMN.",damnImg),new song("Kendrick Lamar","DUCKWORTH.","DAMN.",damnImg),new song("Kendrick Lamar","Swimming Pools (Drank)","Good kid, m.A.A.d city",gkmcImg),new song("Kendrick Lamar","United in Grief","Mr. Morale & The Big Steppers",mrMoraleImg),new song("Kendrick Lamar","Count Me Out","Mr. Morale & The Big Steppers",mrMoraleImg),new song("Kendrick Lamar","Crown","Mr. Morale & The Big Steppers",mrMoraleImg),new song("Kendrick Lamar","These Walls (feat. Bilal, Anna Wise & Thundercat)","To Pimp a Butterfly",tpabImg),new song("Kendrick Lamar","You Ain't Gotta Lie (Momma Said)","To Pimp a Butterfly",tpabImg),new song("Lauryn Hill","Lost Ones","The Miseducation of Lauryn Hill",laurynHillImg),new song("Lauryn Hill","Forgive Them Father","The Miseducation of Lauryn Hill",laurynHillImg),new song("Brent Faiyaz","Invite Me","A.M. Paradox",amparadoxImg),new song("Brent Faiyaz","So Far Gone / Fast Life Bluez","Sonder Son",sonderSonImg),new song("Brent Faiyaz","Needed","Sonder Son",sonderSonImg),new song("Declan McKenna","Brazil","What Do You Think About the Car?",declanImg),new song("Fall Out Boy","Sugar, We're Goin Down","From Under the Cork Tree",fromUnderImg),new song("Fall Out Boy","Thnks Fr Th Mmrs","Infinity On High",infinityImg),new song("Fall Out Boy","Alone Together","Save Rock And Roll",saveRockImg),new song("Fall Out Boy","Just One Yesterday (feat. Foxes)","Save Rock And Roll",saveRockImg),new song("Fall Out Boy","Young Volcanoes","Save Rock And Roll",saveRockImg),new song("Fall Out Boy","The Kintsugi Kid (Ten Years)","So Much (For) Stardust",stardustImg),new song("Frank Ocean","Ivy","Blonde",blondeImg),new song("Frank Ocean","Nights","Blonde",blondeImg),new song("Gorillaz","Kids With Guns","Demon Days",demonImg),new song("Gorillaz","Dirty Harry","Demon Days",demonImg),new song("Gorillaz","Feel Good Inc.","Demon Days",demonImg),new song("Hozier","Angel of Small Death and the Codeine Scene","Hozier",hozierImg),new song("Hozier","From Eden","Hozier",hozierImg),new song("Hozier","Hymn to Virgil","Unreal Unearth",unrealImg),new song("Hozier","De Selby (Part 2)","Unreal Unearth",unrealImg),new song("Hozier","Francesca","Unreal Unearth",unrealImg),new song("Hozier","Would That I","Wasteland, Baby!",wastelandImg),new song("Hozier","Wasteland, Baby!","Wasteland, Baby!",wastelandImg),new song("Jack Johnson","Good People","In Between Dreams",betweenDreamsImg),new song("Jack Johnson","Do You Remember","In Between Dreams",betweenDreamsImg),new song("Duke Ellington & John Coltrane","In a Sentimental Mood","Duke Ellington & John Coltrane",dukeJImg),new song("Larry Lovestein","A Moment 4 Jazz","You",youImg),new song("Lord Huron","She Lit a Fire","Lonesome Dreams",lonesomeDreamsImg),new song("Lord Huron","Meet Me in the Woods","Strange Trails",strangeTrailsImg),new song("Lord Huron","The Night We Met","Strange Trails",strangeTrailsImg),new song("Madvillain","Fancy Clown (feat. Viktor Vaughn)","Madvillainy",madvillainyImg),new song("Men At Work","Who Can It Be Now","Business As Usual",businessImg),new song("Noah Kahan","Orange Juice","Stick Season",sticksznImg),new song("Noah Kahan","Call Your Mom","Stick Season",sticksznImg),new song("Sumbuck","Tigersharks","Oh Sweet Cafe Racer",cafeImg),new song("Sumbuck","Kid","Oh Sweet Cafe Racer",cafeImg),new song("Wallows","Sidelines","Nothing Happens",nothingHappensImg),new song("Wallows","Are You Bored Yet? (feat. Clairo)","Nothing Happens",nothingHappensImg),new song("Wallows","Remember When","Nothing Happens",nothingHappensImg),new song("Wallows","Do Not Wait","Nothing Happens",nothingHappensImg),new song("Wallows","Uncomfortable","Uncomfortable",uncomfortableImg),new song("Wynton Kelly","Willow Weep for Me","Kelly Blue",kellyBlueImg),new song("347Aidan","HARMONY","CHASING HARMONY",harmonyIng),new song("347Aidan","Normal","Normal",normalImg),new song("347Aidan","SUNDAY","SUNDAY",sundayImg)];
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
    function updateList(){
      var k = entries.length;
      document.getElementById("songListContainer").innerHTML = "";
      for(var i = 0;i<k;i++){
        document.getElementById("songListContainer").innerHTML += `<div id="song${i}" class="songElement"><div class="divider"></div><div class="albumCover"><img src=${entries[i].cover} alt="album cover" class="albumImg"/></div><div class="divider"></div><div class="songContent artistName">${entries[i].artist}</div><div class="divider"></div><div class="songContent songName">${entries[i].name}</div><div class="divider"></div><div class="songContent albumTitle">${entries[i].album}</div><div class="divider"></div><div class="likeButton"><img src=${heartImg} alt="like" class="likeButtonImg"/></div><div class="divider"></div></div>`
      }
      const forceUpdate = window.getComputedStyle(document.getElementById("songListContainer")).display;
    }
    const sortEntries = (event) => {
      var key = event.target.value;
      entries.sort((a,b) => {
        if (a[key] > b[key]){
          return 1;
        }
        if (a[key] < b[key]){
          return -1;
        }
        return 0;
      });
    }
    const navigate = useNavigate();
    return(
        <div className="App">
        <div class="header">
        <h1 class="title">MUSIC</h1>
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
        <div className="subHeader">
        <h3 id="musicSortTitle">Sort by: </h3>
        <select name="sort" id="sortDropDown" onChange={sortEntries}>
          <option value="artist">Artist Name</option>
          <option value="name">Song Title</option>
          <option value="album">Album Title</option>
        </select>
        <button onClick={updateList}>Refresh</button>
        </div>
        <div id="Breakdown">
        <div className="divider"></div>
        <div className="albumCover" id="coverLabel">Cover</div>
        <div className="divider"></div>
        <div className="songContent artistName">Artist Name</div>
        <div className="divider"></div>
        <div className="songContent songName">Song Title</div>
        <div className="divider"></div>
        <div className="songContent albumTitle">Album Title</div>
        <div className="divider"></div>
        <div className="likeButton">Like</div>
        <div className="divider"></div>
        </div>
        <div id="songListContainer">
        </div>
      </div>
    );
}

export default Music;