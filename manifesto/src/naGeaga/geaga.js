//jshint esversion:6

let storyTexts = require("./geaga-teacs"); //can't use capital letters with browswerify 

let story = 1;
var map = [];



var  placeName = "Tír nAill";
map[0] = "";
map[1] = "";
map[2] = "";
map[3] = "";
map[4] = "";
map[5] = "";
map[6] = "";
map[7] = "";
map[8] = "";

//Set the player's start location
var mapLocation = 4;

//Set the images
var images = [];

images[0] = "anBhograch.png";
images[1] = "BallyLickey.png";
images[2] = "BealNaBláth.png";
images[3] = "Blarney.png";
images[4] = "CillNaMallach.png";
images[5] = "geaga.png";
images[6] = "TighNuaAnDháPhota.png";
images[7] = "MainistirNaCorann.png";
images[8] = "Skibbereen.png";



        var shorttrans = false;

//Initialize the gameMessage
var gameMessage = ``;

//Query Selectors:
var imreoir = document.querySelector('#imreoir');
var pAinm=document.querySelector('#pAinm');
var hum1 = document.querySelector('#hum1');
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");
var seanDown = document.querySelector('#seanDown');
let rightPanel = document.querySelector("#right-panel");
let contae = document.querySelector("#contae");

var deirGeaga1 = document.querySelector("#deirGeaga1");
var deirGeaga2 = document.querySelector("#deirGeaga2");
var inputLabel = document.querySelector("#inputLabel");

var btnTalk = document.querySelector("#btnTalk");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');
var htmla=document.querySelector('html');
var audioAbattoir = document.querySelector('#abattoir');
let countyMain = document.querySelector('#countyMain');
let ainmBtn = document.querySelector('#ainmBtn'); //player name
var gameMap = document.querySelector('#tileworld');
var mapdata = document.querySelector('#mapdata');
var curSiosArCo = document.querySelector('#curSiosArCo');
//Event Listeners:
btnTalk.addEventListener("click", btnTalkHandler, false);
btnTalk.addEventListener("mousedown",btnTalkHandler, false);
btnTalk.addEventListener("mouseout", btnTalkHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);




//Dispay the player's location
render();
seanDown.play();


//Event Handlers
    function playHandler(){
    window.location.replace("http://ribodev.com/wp-content/uploads/2017/manifestoWeb/src/naContae/naContae.html");
    }
   

    function mousedownHandler(){
        btnTalk.style.background = "-webkit-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
        btnTalk.style.background = "-moz-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
        btnTalk.style.background = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    }

    function mouseoutHandler(){
        btnTalk.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        btnTalk.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        btnTalk.style.background = "#505050";
    }

    function bckBtnHandler(){
        bckBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        bckBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        bckBtn.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

        stepBack();

    }


    function btnTalkHandler(){

 
    console.log("saying hi.");

        btnTalk.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        btnTalk.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        btnTalk.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
      }

    function narrate(story){
        deirGeaga2.innerHTML = storyTexts[story];
        deirGeaga2.className=''; 
        console.log("test! "+story);
    }
    //test

    function stepBack(){
        story--;
        playGame();
    }
    function stepFwd(){
        story++;
        playGame();
    }
function playGame()
{

    narrate(story); 
    console.log("hello narrate!");
    render();
    progressStory(story);
    console.log(story);
}

    function progressStory(){


        if(story>1){
            bckBtn.style.display='inline';
            bckBtn.style.animation='delay-fade-in 1s';
        btnTalk.style.animation='slide-button-right 1s forwards';
        console.log("hello bckBtn?");
        }
    else
    {
        //I want this, it's not working yet:
        //bckBtn.style.animation='fade-out 0.25s forwards';
        //instead, I'm just setting display to 'none'
        bckBtn.style.display='none';
        btnTalk.style.animation='slide-button-left 1s forwards';

    }
        if (story>2){
            
       hum1.play();
        }
    //end of manifesto - begin game y/n?
if (story===5){
        playBtn.style.display='inline';
        // btnTalk.style.animation='fade-out 0.25s forwards';
        btnTalk.style.visibility='hidden';
        playBtn.style.animation='fade-in 1s';
        console.log("story === 5");   
}
if(story===1){
     setTimeout(function(){ htmla.style.backgroundImage="url('../images/bgAnim6.gif')";},1000);    
     setTimeout(function(){
     
        htmla.style.backgroundImage="url('../images/bg.png')";    
     },3500);


} 
    if(story===4){
        //update button styles if player is coming back from events on story 5 
        btnTalk.style.left='-42px';
        btnTalk.style.display='inline';
        btnTalk.style.visibility='visible';
        playBtn.style.display='none';
    }

}


function render()
{
    //Render the location
    deirGeaga1.innerHTML = map[mapLocation];
   // image.src = "../images/" + images[mapLocation];



    //Display the game message

}

deirGeaga1.innerHTML= placeName;
