//jshint esversion:6

let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 

let story = 2;
var map = [];
var starting = true;




map[0] = "";
map[1] = "";
map[2] = "";
map[3] = "";
map[4] = "Forógra";
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
var cubes = document.querySelector('#cubes');
var imreoir = document.querySelector('#imreoir');
var pAinm=document.querySelector('#pAinm');
var hum1 = document.querySelector('#hum1');
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");

let rightPanel = document.querySelector("#right-panel");
let contae = document.querySelector("#contae");

var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var inputLabel = document.querySelector("#inputLabel");

var fwdBtn = document.querySelector("#fwdBtn");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');
var htmla=document.querySelector('html');
var audioAbattoir = document.querySelector('#abattoir');
fwdBtn.style.cursor = "pointer";
let countyMain = document.querySelector('#countyMain');
let ainmBtn = document.querySelector('#ainmBtn'); //player name
var gameMap = document.querySelector('#tileworld');
var mapdata = document.querySelector('#mapdata');
var curSiosArCo = document.querySelector('#curSiosArCo');
//Event Listeners:
fwdBtn.addEventListener("click", fwdBtnHandler, false);
fwdBtn.addEventListener("mousedown", mousedownHandler, false);
fwdBtn.addEventListener("mouseout", mouseoutHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);




//Dispay the player's location
render();



//Event Handlers
    function playHandler(){
        playBtn.style.backgroundImage='url("../images/btnBg3.png")';
    window.location.replace("http://ribodev.com/wp-content/uploads/2017/manifestoWeb/src/naGeaga/geaga.html");
    }
 // function mouseoverHandler(){
   // fwdBtn.style.backgroundImage='("../images/btnBg3.png")';
//  } 

    function mousedownHandler(){
        fwdBtn.style.backgroundImage ='url("../images/btnBg2.png")';
    }

    function mouseoutHandler(){
    }

    function bckBtnHandler(){
        bckBtn.style.backgroundImage = 'url("../images/btnBg2.png")';

        stepBack();
        setTimeout(function(){
            bckBtn.style.backgroundImage='url("../images/btnBg1.png")';},1000);
    }


    function fwdBtnHandler(){

       fwdBtn.style.backgroundImage = 'url("../images/btnBg2.png")';

           console.log("saying hi.");

        stepFwd();
        playGame();
       
        setTimeout(function(){
            fwdBtn.style.backgroundImage='url("../images/btnBg1.png")';},1000);
 
}

    function narrate(story){
        output2.innerHTML = storyTexts[story];
        output2.className=''; 
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
        fwdBtn.style.animation='slide-button-right 1s forwards';
        console.log("hello bckBtn?");
        }
    else
    {
        //I want this, it's not working yet:
        //bckBtn.style.animation='fade-out 0.25s forwards';
        //instead, I'm just setting display to 'none'
        bckBtn.style.display='none';
        fwdBtn.style.animation='slide-button-left 1s forwards';

    }
        if (story>2){
            
       hum1.play();
        }
    //end of manifesto - begin game y/n?
if (story===5){
        playBtn.style.display='inline';
        // fwdBtn.style.animation='fade-out 0.25s forwards';
        fwdBtn.style.visibility='hidden';
        playBtn.style.animation='fade-in 1s';
        console.log("story === 5");   
}
if(story===1){


}
if(story===2){
     setTimeout(function(){ cubes.style.display="inline";},1000);    
     setTimeout(function(){ cubes.style.display="none"; },3500);
    output2.style.top="-399px";
    output2.style.left="150px";

}
   
    if(story===3){
        output2.style.top="-520px";
        output2.style.left="-100px";
        
    }

if(story===4){
        //update button styles if player is coming back from events on story 5 
        fwdBtn.style.left='-42px';
        fwdBtn.style.display='inline';
        fwdBtn.style.visibility='visible';
        playBtn.style.display='none';
    }

}


function render()
{
    //Render the location
    output.innerHTML = map[mapLocation];
   // image.src = "../images/" + images[mapLocation];



    //Display the game message

}

if (starting){
progressStory();
playGame();
        output2.innerHTML = storyTexts[story];
}


