(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//jshint esversion:6
module.exports = function badgeSelectorL(duration) {
    const countyBtnLeft =document.querySelector("#countyBtnLeft");
    const badge = document.querySelector("#badge");
    
    let countyId = 0;
    let badgeWidth = -80; 
    console.log('>>>>>>>', badgeWidth);
//    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty
   countyBtnLeft.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

    function changeCounty(){
        changeCountyTime = Date.now();
        oldX =parseInt(badge.style.backgroundPositionX ||"0px");
        console.log("county changed at:",changeCountyTime, "  oldX: ", oldX);
    }


    setInterval( function() {
        if(oldX !== undefined) {
            let t = Date.now() - changeCountyTime;
            let m = badgeWidth/duration;
            let b = oldX;
            if (t > duration){
                oldX = undefined;
                t = duration;               
            }
            badge.style.backgroundPositionX = (-m*t+b)+"px";
        }
    }, 1000/60);
};

},{}],2:[function(require,module,exports){
//jshint esversion:6
module.exports = function badgeSelectorR(duration) {
    const countyBtnRight =document.querySelector("#countyBtnRight");
    const badge = document.querySelector("#badge");
    
    let badgeWidth = 80; 
//    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty
   countyBtnRight.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

    function changeCounty(){
        changeCountyTime = Date.now();
        oldX =parseInt(badge.style.backgroundPositionX ||"0px");
    }


    setInterval( function() {
        if(oldX !== undefined) {
            let t = Date.now() - changeCountyTime;
            let m = badgeWidth/duration;
            let b = oldX;
            if (t > duration){
                oldX = undefined;
                t = duration;               
            }
            badge.style.backgroundPositionX = (-m*t+b)+"px";
        }
    }, 1000/60);
};

},{}],3:[function(require,module,exports){
//jshint esversion:6

module.exports = [
    '',
    '<span id="Co. Offaly">Co. Uíbh Fhailí</span>',
    '<span id="Co. Louth">Co. Lú</span>',
    '<span id="Co. Wexford">Co. Loch Garman</span>',
    '<span id="Co. Limerick">Co. Luimnigh</span>',
    '<span id="Co. Dublin">Co. Átha Chliath</span>',
    '<span id="Co. Leitrim">Co. Liatroma</span>',
    '<span id="Co. Antrim">Co. Aontroma</span>',
    '<span id="Co. Donegal">Co. Dhún na nGall</span>',
    '<span id="Co. Fermanagh">Co. Fhear Manach</span>',
    '<span id="Co. Cork">Co. Chorcaí</span>',
    '<span id="Co. Wicklow">Co. Chill Mhantáin</span>',
    '<span id="Co. Roscommon">Co. Ros Comáin</span>',
    '<span id="Co. Derry">Co. Dhoire</span>',
    '<span id="Co. Sligo">Co. Shligigh</span>',
    '<span id="Co. Tipperary">Co. Thiobraid Árann</span>',
    '<span id="Co. Laois">Co. Laoise</span>',
    '<span id="Co. Waterford">Co. Phort Láirge</span>',
    '<span id="Co. Kilkenny">Co. Chill Chainnigh</span>',
    '<span id="Co. Meath">Co. Na Mí</span>',
    '<span id="Co. Kerry">Co. Chiarraí</span>',
    '<span id="Co. Longford">Co. An Longfoirt</span>',
    '<span id="Co. Mayo">Co. Mhaigh Eo</span>',
    '<span id="Co. Westmeath">Co. Na hIarmhí</span>',
    '<span id="Co. Down">Co. An Dúin</span>',
    '<span id="Co. Armagh">Co. Ard Mhacha</span>',
    '<span id="Co. Carlow">Co. Cheatharlach</span>',
    '<span id="Co. Monaghan">Co. Mhuineacháin</span>',
    '<span id="Co. Galway">Co. na Gaillimhe</span>',
    '<span id="Co. Kildare">Co. Chill Dara</span>',
    '<span id="Co. Clare">Co. An Chláir</span>',
    '<span id="Co. Cavan">Co. An Cabháin</span>',
    '<span id="Co. Tyrone">Co. Thír Eoghain</span>',
    '<span id="A land beyond the sea">Tír Thar Muir</span>',
    '<span id="For the language">Ar shon an Teanga</span>'
];

},{}],4:[function(require,module,exports){

//jshint esversion:6
module.exports = [

//0
`
`,





//1
    
`
<div style="animation:delay-fade-in 1s;">
<span id='Who is that'>Cé sin</span><span id="that I have"> agam</span><span id="there?"> ann?</span>  
</div>

`,
  

    
//2

`
`,
//11
`
<span id='What kind of'>Cén saighs </span><span id='Irish'> Gaeilge</span><span id='do you have'> a bhfuil agat?</span> 
`,
  `
  `, 
 
//12
`
Go brea. Cad é do rogha foireann?
  
  `
    
//18
   
//19

];

},{}],5:[function(require,module,exports){
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
levelSelect.addEventListener("click", levelSelectHandler);
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
function levelSelectHandler(){
    setTimeout(function(){tidyBox1.style.backgroundImage="";},1000);
    mapLocation = 4;
    story=4;
    //hide level-select buttons
    btnLvR.style.display='none';
    btnLvL.style.display='none';
    levelSelect.style.display='none';
    //reveal hidden inputElements
    inputElements.style.visibility='visible'; 
    inputElements.style.opacity='1';
    inputElements.style.left='561px';
    inputElements.style.bottom='260px';
    //inputLabel.style.display='block';
    //inputLabel.innerHTML='Roghnaigh Foireann:';
    imreoirWLv.style.top='57px';
    imreoirWLv.style.left='530px';

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
        btnLvR.style.display='inline';
        btnLvR.style.visibility='visible';

        btnLvL.style.visibility='visible';
        btnLvL.style.display='inline';


        output2.innerHTML=storyTexts[blurbId];

        story++;
    }

    if(story===2){ //select language level
        btnLvR.style.display='inline';
        btnLvR.style.animation='fade-in 1s forwards';

        btnLvL.style.display='inline';
        btnLvL.style.animation='fade-in 1s forwards';
        console.log("should have set level select display");
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




},{"./badge-selector-l":1,"./badge-selector-r":2,"./county-names":3,"./story-texts":9,"./title-texts":10}],6:[function(require,module,exports){
//jshint esversion:6
let geagaTexts = require("./geaga-teacs"); //can't use capital letters with browswerify 
var deirGeaga2 = document.querySelector("#deirGeaga2");
let geagaSceal = 1;
var leavePanel = document.getElementById('leavePanel');
var btnTalk = document.getElementById('btnTalk');
var btnLeave = document.getElementById('leave');
var btnNoLeave = document.getElementById('noLeave');
var allChat = document.getElementById('allChat');
var súile = document.getElementById('súile');
var talkingToGeaga = false;
var chatPanel = document.getElementById('chatPanel');
var fwdBtn= document.querySelector('#fwdBtn');
var ctrlsFrame= document.querySelector("#ctrlsFrame");
var deirGeaga1 = document.querySelector("#deirGeaga1");
var naContaeResources=document.querySelector('#naContaeResources');
//handlers

btnNoLeave.addEventListener("click",noLeaveHandler,false);
btnLeave.addEventListener("click",leaveHandler,false);
fwdBtn.addEventListener("click",fwdBtnHandler,false);
ainmBtn.addEventListener("click",ainmBtnHandler,false);
function fwdBtnHandler(){
    geagaSceal++;
console.log("GS "+geagaSceal);

    deirGeaga2.innerHTML = geagaTexts[geagaSceal];
    if (geagaSceal === 2){
        btnTalk.style.display="none";
        fwdBtn.style.display="none";
        naContaeResources.style.display="inline";
        ainmBtn.style.display="inline";
    }
    if(geagaSceal === 3){}
    if(geagaSceal === 4){
        naContaeResources.style.display="inline";
        fwdBtn.style.display="none";
        btnTalk.style.display="none";
    }
    if(geagaSceal === 5){}
    if(geagaSceal === 6){}
    if(geagaSceal === 3){}
}
function ainmBtnHandler(){
    geagaSceal++;
    deirGeaga2.innerHTML = geagaTexts[geagaSceal];
    if(geagaSceal === 3){
    
    naContaeResources.style.display="none";
    ainmBtn.style.display="none";
    fwdBtn.style.display="inline";
        
    }
}
//sprite Object
var tree=
    {
         sourceX: 100,
        sourceY: 0,
        sourceWidth: 244,
        sourceHeight: 358,

        x:814,
        y:487,
        width:122,
        height:182,
        vx:0,
        vy:0
        
    };


//tree.addEventListener("click", talkHandler,false);
var spriteObject =
    {
        sourceX: 0,
        sourceY: 0,
        sourceWidth: 30,
        sourceHeight: 45,

        x:0,
        y:0,
        width:30,
        height:45,
        vx:0,
        vy:0
    };



//main

//canvas and it's drawingSurface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

//array for sprites
var sprites = [];

//bg sprite
var background = Object.create(spriteObject);
background.sourceY =358;
background.sourceWidth = 2068;
background.sourceHeight =1404;
background.width = 1034;
background.height =712;
background.x = 0;
background.y =0;
sprites.push(background);
//gameworld and camera object
var gameWorld =
    {
        x:0,
        y:0,
        width: background.width,
        height: background.height

    };

var camera =
    {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,

        //inner boundary getters
        rightInnerBoundary: function(){
            return this.x + (this.width*0.75);
        },
        leftInnerBoundary: function(){
            return this.x + (this.width*0.25);

        },
        topInnerBoundary: function(){
            return this.y + (this.height*0.25);

        },
        bottomInnerBoundary: function(){
            return this.y + (this.height*0.75);
        }

    };

//player sprite created and centered

var canMove=true;
var player = Object.create(spriteObject);
player.x = 243;
player.y = 368;
sprites.push(player);

var geagaSprite = Object.create(tree);
sprites.push(geagaSprite);
//load the image

var image = new Image();
image.addEventListener("load",loadHandler,false);
image.src = "../../images/geagaBg1.png";

//arrow key codes
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//Directions
var moveUp = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;

//chat button handler
btnTalk.addEventListener("click",talkHandler,false);

//keyboard listeners hit and release

window.addEventListener("keydown",function(event){
    if(canMove){
        switch(event.keyCode){
            case UP:
                moveUp = true;
                break;

            case DOWN:
                moveDown = true;
                break;

            case LEFT:
                moveLeft = true;
                break;

            case RIGHT:
                moveRight = true;
                break;
        }
        console.log("px: "+player.x+"  py: "+player.y);
        
    }
    

        event.preventDefault();
},false);

window.addEventListener("keyup", function(event){
    if(canMove)switch(event.keyCode){
        case UP:
            moveUp = false;
            break;

        case DOWN:
            moveDown = false;
            break;

        case LEFT:
            moveLeft = false;
            break;

        case RIGHT:
            moveRight = false;
            break;
    }
},false);

function loadHandler()
{
    update();
}

function update()
{

    requestAnimationFrame(update,canvas);
//check if player is within talking range of Geaga
if(player.x>=653 && player.y>=512){
            playerNearGeaga();
        }
    else{
        notNearGeaga();
    }

//check if player leaves Geaga's location
    if(player.x <=0|| player.x>=970 ){
        
  showLeaveMenu(); 
    }

    //up
    if(moveUp && !moveDown)
    {
        player.vy = -3;
        console.log("up");
    }
    //down
    if(moveDown && !moveUp){
        player.vy = 3;
    }
    //left
    if(moveLeft && !moveRight){
        player.vx = -3;
    }
    //right
    if (moveRight && !moveLeft){
        player.vx = 3;
    }

    //no moves

    if(!moveUp && !moveDown)
    {
        player.vy = 0;
    }

    if(!moveLeft && !moveRight){
        player.vx = 0;
    }

    //move the player and keep inside gameworld
    player.x = Math.max(0, Math.min(player.x + player.vx, gameWorld.width - player.width));

    player.y = Math.max(0, Math.min(player.y+player.vy, gameWorld.height-player.height));

    //move camera

    if (player.x < camera.leftInnerBoundary())
    {
        camera.x = Math.floor(player.x - (camera.width * 0.25));
    }

    if (player.y < camera.topInnerBoundary())
    {
        camera.y = Math.floor(player.y - (camera.height * 0.25));
    }
    if (player.x + player.width > camera.rightInnerBoundary())
    {
        camera.x = Math.floor(player.x + player.width - (camera.width * 0.75));
    }
    if (player.y + player.height > camera.bottomInnerBoundary())
    {
        camera.y = Math.floor(player.y + player.height - (camera.height *0.75));
    }
    // camera.x = Math.floor(player.x + (player.width/2) - (camera.width/2));
    // camera.y = Math.floor(player.y + (player.height/2)- (camera.height/2));

    //keep camera inside gameworld
    if(camera.x < gameWorld.x)
    {
        camera.x = gameWorld.x;
    }

    if(camera.y < gameWorld.y)
    {
        camera.y = gameWorld.y;
    }

    if(camera.x + camera.width >gameWorld.x+ gameWorld.width)
    {
        camera.x = gameWorld.x + gameWorld.width - camera.width;
    }
    if(camera.y + camera.height > gameWorld.y + gameWorld.height)
    {
        camera.y = gameWorld.y + gameWorld.height - camera.height;
    }
    render();
}

function showLeaveMenu(){
    leavePanel.style.display= "inline";
}

function noLeaveHandler(){
   leavePanel.style.display = "none";     
if (player.x <10){
    player.x = 10;
    }else{
    player.x=960;
    }

}

function leaveHandler(){
    console.log("koo");
   window.location.replace("../naContae/contaePages/naContae10.html"); 
}

function playerNearGeaga(){
     ctrlsFrame.style.display="inline";
    tree.sourceX=425;        
if(geagaSceal <=2){
    btnTalk.style.display="inline"; 
}
}
function notNearGeaga(){
     btnTalk.style.display="none"; 
    tree.sourceX=100;
}

function talkHandler(){
    if(playerNearGeaga){
    if(talkingToGeaga){
        endTalkToGeaga();
    }else{
    talkToGeaga();}
}
}
function talkToGeaga(){
    allChat.style.display="inline";
    talkingToGeaga=true;
    canMove=false;
    player.x=870;
    player.y=524;
    btnTalk.innerHTML='<i class= "fa fa-times" aria-hidden="true"></i>';
    deirGeaga2.innerHTML = geagaTexts[geagaSceal];
    fwdBtn.style.display="inline";

}

function endTalkToGeaga(){
   talkingToGeaga=false;
   canMove=true;
   player.x=647;
   player.y=546;
   allChat.style.display="none";
    deirGeaga2.innerHTML="";
    fwdBtn.style.display="none";
    btnTalk.innerHTML='<i class= "fa fa-commenting-o">';
    geagaSceal=1;
}

function render(event)

{
    drawingSurface.clearRect(0,0,canvas.width,canvas.height);
    drawingSurface.save();

    //move drawing surface to keep position relative to camera
    drawingSurface.translate(-camera.x, -camera.y);



    //LOOP THROUGH ALL SPRITES AND USE THEIR PROPERTIES TO DISPLAY THEM



    if(sprites.length !== 0)
    {
        for (var i = 0; i<sprites.length; i++){
            var sprite = sprites[i];
            drawingSurface.drawImage
            (
                image,
                sprite.sourceX,sprite.sourceY,
                sprite.sourceWidth, sprite.sourceHeight,
                Math.floor(sprite.x), Math.floor(sprite.y),
                sprite.width, sprite.height
            );


        }
    }

    drawingSurface.restore();
}


},{"./geaga-teacs":4}],7:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){

var countyCounter=0;    
var clickCounter=0;
var levelCounter=0;  //TODO replace these counters with $('output2 span') as in manifesto/jqueries.js
var countyEng=['x','y','z'];
 
/*
     
$('#countyMain').mouseover(function(){
  $(this).css('opacity','0');
console.log("right track?");
    }

);
 
$('#countyMain').mouseout(function(){
  $(this).css('opacity','1');
console.log("right track?");
    }

);
*/

//var btnLvR= document.querySelector('#btnLvR');

//var btnLvL= document.querySelector('#btnLvL');

    
$('#countyBtnLeft').click(function(){
$('#contae span').hover(function(){
  $(this).css('color','#e35ee5');
  $('#bearla').text($(this).attr('id'));
console.log("right track?");
    }

);
 
$('#contae span').mouseout(function(){
  $(this).css('color','white');
  $('#bearla').text('');
    }

);
});

    
$('#countyBtnRight').click(function(){
$('#contae span').hover(function(){
  $(this).css('color','#e35ee5');
  $('#bearla').text($(this).attr('id'));
console.log("right track?");
    }

);
 
$('#contae span').mouseout(function(){
  $(this).css('color','white');
  $('#bearla').text('');
    }

);
});

$('#btnLvR').click(function(){
    levelCounter++;
    if(levelCounter>4){
    levelCounter=0;
    }
});

$('#btnLvL').click(function(){
    levelCounter--;
    if(levelCounter<0){
    levelCounter=4;
    }
});
$('#output').hover(function(){
            if(clickCounter===0){ $('#bearla').text('What is the name of you?');
             $(this).css('color','#e35ee5');
            }
if(clickCounter===1){ $('#bearla').text('What kind of Irish have you?');
             $(this).css('color','#e35ee5');
            }

if(clickCounter===2){ $('#bearla').text('Who do you play for?');
             $(this).css('color','#e35ee5');
            }


    });

        $('#output').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#730a0a');

    });
document.querySelector('#inputName').onmouseenter=(event)=>{
    document.querySelector('#bearla').innerHTML='Player One';
}; document.querySelector('#ainmBtn').onmouseenter=(event)=>{
    document.querySelector('#bearla').innerHTML='Océ!';
}; 
document.querySelector('#ainmBtn');   
document.querySelector('#levelSelect');
$('#inputLabel span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#inputLabel span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });

$('#ainmBtn').click(function(){
    console.log("hello from jqueries");
    clickCounter++;
    
    $('#output2').hover(function(){
             if(levelCounter===0){ $('#bearla').text('');
             $(this).css('color','#e35ee5');
            }
if(levelCounter===1){ $('#bearla').text('I have no Irish');
             $(this).css('color','#e35ee5');
            }

if(levelCounter===2){ $('#bearla').text('I have a little Irish');
             $(this).css('color','#e35ee5');
            }

if(levelCounter===3){ $('#bearla').text('I have Irish');
             $(this).css('color','#e35ee5');
            }


if(levelCounter===4){ $('#bearla').text('I have fluent Irish');
             $(this).css('color','#e35ee5');
            }


        $('#output2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });



       });
     
});

$('#levelSelect').click(function(){
    
    console.log("hello from jqueries");
    clickCounter++;
    });

  $('#contae span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#contae').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
    
    

});


},{}],8:[function(require,module,exports){

 //jshint esversion:6 
$(document).ready(function(){
   $('#deirGeaga1').hover(function(){
    $('#bearla').text('The Other Land');
    $(this).css('color','#e35ee5');
    }
);


    $('#deirGeaga1').mouseout(function(){
        $('#bearla').text('');
        $(this).css('color','#730a0a');
    });


 
     $('#btnTalk').click(function(){ 
   console.log("btnTalk clicked"); 

         $('#deirGeaga2 span').hover(function(){
            console.log("hovvrin!");
            
            $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });
     });
    


   /*    
       $('#deirGeaga2').hover(function(){
     $('#bearla').text('Welcome');
        
           $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });*/
});


},{}],9:[function(require,module,exports){
//jshint esversion:6
module.exports = [

//0




    
`
I won't try.

`,
  
//1
    


    
  `<span id='I don\'t have any Irish'>Níl Gaeilge agam</span>
  `, 
    
//2
  `<span id='I have a little Irish'>Tá beagán Gaeilge agam</span>
  `,
//3

   `<span id='I have Irish'>Tá Gaeilge agam</span>
  `,

 //4   
   `<span id='I have fluent Irish'>Tá Gaeilge líofa agam</span>
  `,


   `
  `, 
   `Roghnaigh foireann6:
  `, 
 `
`



/*
  * <span id='It is not'>Ní </span><span id='an absence'>easpa</span> <span id='of interest'> spéis</span>, <span id='nor ability'>ná cumas</span>, <span id='nor will'>ná thoill</span>
<span id='which'>is</span> <span id='is the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>
<*/

];

},{}],10:[function(require,module,exports){

//jshint esversion:6
module.exports = [

//0




    
`<span id='Manifesto'>Forógra</span>
`,
  
//1
    


`
 `, 
    
//2
  ` <span id='What'>Cad</span><span id='is the name of you'> is ainm dhuit</span>? 
 `, 
    
//19
  `Cén Gaeilge atá agat?`, 
   `Roghnaigh Ainm
  `, 
   `Roghnaigh foireann4:
  `, 
   `Roghnaigh foireann5:
  `, 
   `Roghnaigh foireann6:
  `]; 
 

},{}]},{},[1,2,3,6,5,8,7,9,10]);
