//jshint esversion:6
var coPos = 1; //county Position
var imPos=1; //imreoirPosition


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

images[5] = "geaga.png";



        var shorttrans = false;


//Query Selectors:
var imreoir = document.querySelector('#imreoir');
var pAinm=document.querySelector('#pAinm');
var hum1 = document.querySelector('#hum1');
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");
var seanDown = document.querySelector('#seanDown');
let rightPanel = document.querySelector("#right-panel");
let contae = document.querySelector("#contae");
var inputLabel = document.querySelector("#inputLabel");
var bckBtn = document.querySelector('#bckBtn'); 
var fwdBtn = document.querySelector('#fwdBtn');
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


var btnLvL = document.querySelector('#btnLvL');
var btnLvR = document.querySelector('#btnLvR');
var emblem = document.querySelector('#emblem');
var selectLevel = document.querySelector('#selectLevel');
var imreoirWLv= document.querySelector('#imreoirWLv');//player With Graphic showing his/her lv
var pAinm=document.querySelector('#pAinm');

//Query Selectors:
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");
var portrait = document.querySelector("#portrait");
var story = 0;
var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var inputLabel = document.querySelector("#inputLabel");
var tidyBox1 = document.querySelector("#tidyBox1");
var levelSelect = document.querySelector('#levelSelect');
var playBtn = document.querySelector('#play');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');
var htmla=document.querySelector('html');
var seanDown = document.querySelector('#seanDown');
let inputElements = document.querySelector('#inputElements');
let countyColours = document.querySelector('#countyColours');

let blurbId = 0;
let badgeSelectorL =require("./badge-selector-l");
let badgeSelectorR = require("./badge-selector-r");
let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 
let titleTexts = require("./title-texts");
let countyNames = require("./county-names");
///Event Listeners:
//btnTalk.addEventListener("click", btnTalkHandler, false);
//btnTalk.addEventListener("mousedown",btnTalkHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);

joinTeam.addEventListener("click",joinTeamHandler);
ainmBtn.addEventListener("click", ainmHandler);
//levelSelect.addEventListener("click", levelSelectHandler);
btnLvL.addEventListener("click", btnLvLHandler);
btnLvR.addEventListener("click", btnLvRHandler);

countyBtnLeft.addEventListener("click",bckBadgeHandler, false);
countyBtnRight.addEventListener("click",fwdBadgeHandler, false);





//Dispay the player's location
render();
seanDown.play();


    tidyBox1.style.backgroundColor="black";
setTimeout(function(){
tidyBox1.style.backgroundImage="url('../../images/bgAnim2.gif')";
},1000);
setTimeout(function(){
    tidyBox1.style.backgroundImage="url('../../images/bgDark.png')";
    // tidyBox1.style.backgroundColor="rgba(255,255,255,0.02)";
},3000);


//Event Handlers
    function playHandler(){
    window.location.replace("http://ribodev.com/wp-content/uploads/2017/manifestoWeb/src/naContae/naContae.html");
    }
   

    function mousedownHandler(){
        //btnTalk.style.background = "-webkit-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
        //btnTalk.style.background = "-moz-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
        //btnTalk.style.background = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    }

    function mouseoutHandler(){
        //btnTalk.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        //btnTalk.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        //btnTalk.style.background = "#505050";
    }

    function bckBtnHandler(){
        bckBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        bckBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
        bckBtn.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

        stepBack();

    }


 //   function btnTalkHandler(){

 
//    console.log("saying hi.");

 //       btnTalk.style.backgroundImage = 'url("../../images/btnBg2.png")';
//setTimeout(
 //   function(){
        
  //      btnTalk.style.backgroundImage = "url('../../images/btnBg1.png')";},1000); 

   //   }

    function narrate(story){
    //    deirGeaga2.innerHTML = geagaTexts[story];
      //  deirGeaga2.className=''; 
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
        //btnTalk.style.animation='slide-button-right 1s forwards';
        console.log("hello bckBtn?");
        }
    else
    {
        //I want this, it's not working yet:
        //bckBtn.style.animation='fade-out 0.25s forwards';
        //instead, I'm just setting display to 'none'
        bckBtn.style.display='none';
        //btnTalk.style.animation='slide-button-left 1s forwards';

    }
        if (story>2){
            
       hum1.play();
        }
    //end of manifesto - begin game y/n?
if (story===5){
        playBtn.style.display='inline';
        // btnTalk.style.animation='fade-out 0.25s forwards';
        //btnTalk.style.visibility='hidden';
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
        //btnTalk.style.left='-42px';
        //btnTalk.style.display='inline';
        //btnTalk.style.visibility='visible';
        playBtn.style.display='none';
    }

}






//Event Handlers
function fwdBadgeHandler(){
   
    countyBtnRight.style.backgroundImage='url("../../images/btnBg2.png")';
    setTimeout(function(){
       countyBtnRight.style.backgroundImage='url("../../images/btnBg1.png")';
    },1000);
    updateCountyMain(-1);
    updateCoNameR();
    console.log("countyId ", countyId);
    console.log("countyMain.style.backgroundPositionX ", countyMain.style.backgroundPositionX);
    if(countyId!==0){

        joinTeam.style.display='inline';
        emblem.style.opacity="0";
    }
    else{
        console.log("iii");
        joinTeam.style.display="none";
        emblem.style.opacity="0.6";
    }
} 
//setTimeout(console.log("wait..."),1500); 

function bckBadgeHandler(){
    countyBtnLeft.style.backgroundImage='url("../../images/btnBg2.png")';
    setTimeout(function(){
       countyBtnLeft.style.backgroundImage='url("../../images/btnBg1.png")';
    },1000);
updateCountyMain(1);
    updateCoNameL();
    console.log("countyId ", countyId);
    console.log("countyMain.style.backgroundPositionX ", countyMain.style.backgroundPositionX);
    if(countyId!==0){
        joinTeam.style.display='inline';
        console.log("be like water");
        emblem.style.opacity="0";
    }
    else{
        console.log("iii");
        joinTeam.style.display="none";
        emblem.style.opacity="0.6";
    }
}


function btnLvLHandler(){
    
    btnLvL.style.backgroundImage='url("../../images/btnBg2.png")';
    setTimeout(function(){
        btnLvL.style.backgroundImage='url("../../images/btnBg1.png")';
    },1000);
    updateImreoirLv(1);
    blurbId--;
    if(blurbId<0 ){
        blurbId = 4;}
    output2.innerHTML=storyTexts[blurbId];

    if(blurbId===0)

    {
        levelSelect.style.display='none';
    }else{
        levelSelect.style.display='inline';
        levelSelect.style.visibility='visible';
    }
}
function btnLvRHandler(){
     btnLvR.style.backgroundImage='url("../../images/btnBg2.png")';
    setTimeout(function(){
        btnLvR.style.backgroundImage='url("../../images/btnBg1.png")';
    },1000);updateImreoirLv(-1);
    blurbId++;
    if (blurbId>4){blurbId= 0;}
    console.log("blurrrb"+blurbId);
    output2.innerHTML=storyTexts[blurbId];
    if(blurbId===0)
    {
        levelSelect.style.display='none';
    }else{
        levelSelect.style.display='inline';
        levelSelect.style.visibility='visible';
    }
}


function updateImreoirLv(lv){

    lv += lv*175; // {width:175} 
    imPos += lv;

    imreoirWLv.style.backgroundPositionX = imPos+"px";
}

function updateCountyMain(dist){

    if (coPos===0){
        output2.style.visibility='visible'; 
    }else{
        output2.style.visibility='hidden';}
    dist = dist*432; //#countyMain {width:400} 
    coPos += dist;
    console.log("coMain bgposX = ", coPos);
    countyColours.style.backgroundPositionX = coPos +"px";
    countyMain.style.backgroundPositionX = coPos+"px";
}
function joinTeamHandler(){
    countyMain.style.animation='fade-out 1s forwards';
    console.log("team joined",contae[countyId]);
    countyBtnRight.style.display='none';
    countyBtnLeft.style.display='none';
    joinTeam.style.display='none';
    setTimeout(function(){
    window.location.replace("../naGeaga/geaga.html");

 
    
    },3000);
   
    contae.style.display='none';
    inputName.style.display='none';

}
/*
function levelSelectHandler(){
    setTimeout(function(){tidyBox1.style.backgroundImage="";},1000);
    mapLocation = 4;
    story=4;
    //hide level-select buttons
    btnLvR.style.display='none';
    btnLvL.style.display='none';
    levelSelect.style.display='none';
    inputElements.style.visibility='visible'; 

    badgeSelectorL(100); //player selects team
    narrate(3);
    badgeSelectorR(100);
    countyBtnRight.style.animation='fade-in 1s forwards';
    countyBtnRight.style.animation='fade-in 1s forwards';
    countyBtnRight.style.display='inline';
    countyBtnLeft.style.animation='fade-in 1s forwards';
    countyBtnLeft.style.display='inline';
    joinTeam.style.visibility='visible';
    joinTeam.style.animation='delay-fade-in 1s';
    tidyBox1.style.backgroundColor="rgba(255,255,255,0.02)";
    emblem.style.opacity="0.6"; 
    story++;
    playGame();

}

*/

function ainmHandler(){
    ainmBtn.style.backgroundImage='url("../../images/btnBg2.png")';
    mapLocation=3;
    story++; 
    playGame();//activates the forest of Lycria &narrate() 
    if (story===1){ //Tús means Start. We start here.

        portrait.style.display='none';
        //Hide irrelevent buttons
        //inputElements.style.visibility='hidden'; 
        inputElements.style.opacity='1';
        htmla.style.backgroundImage ="url('../../images/bgDark.png')"; 
        inputName.style.display='none';
        inputLabel.style.display='none';
        ainmBtn.style.display='none';
        //show imreoir language level-icon 
        imreoirWLv.style.opacity='1';
        imreoirWLv.style.visibility='visible';

        //show languagelevel right left buttons



        output2.innerHTML=storyTexts[blurbId];

        story++;
    }

    


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
    console.log("playGame called and says says story is "+story);
}

function render()
{
    output.innerHTML=titleTexts[mapLocation];
}

let countyId = 0;
//show county name
function updateCoNameR(){
    countyId = (countyId + 1) ;

    if(countyId===35 ){
        countyId = 0;}

    contae.innerHTML = countyNames[countyId];

    console.log("current Co id:", countyId, countyNames[countyId] );
}
function updateCoNameL(){
    countyId = (countyId - 1);
    if(countyId === -1){

        countyId = 34;}
    contae.innerHTML = countyNames[countyId];

    console.log("current Co id:", countyId );



}



