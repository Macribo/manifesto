(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

//jshint esversion:6
module.exports = [

//0
`
<span id='You are'>Is tú</span><span id='what you say you are'> a deir tú</span>:
`,





//1
    
`Fáilte


`,
  

    
//2

`<span id=''></span>
`,

//3<span id=''></span> <span id=''></span> <span id=''></span>, <span id=''></span>.

////9 <div style="animation:delay-fade-in 2s;">
    /*
 `<span id='Secondly'> Sa dara h-áit</span>, 
<span id='There is'>tá</span> <span id='a bit of Irish'>Gaeilge éigin</span> <span id='posessed by'>ag</span> <span id='every'>gach</span> <span id='English-speaker'>Bearl-cainteoir</span> <span id='in the country'>sa tír</span>.
<span id='A factor'>Gníomhadóir</span><span id='unknown'> anaithnid</span><span id='this is'> é seo</span>,<span id='which puts'> a cuireann</span><span id='off accuracy'> dó rath</span><span id='calcu- lations'> áireamhíocht</span><span id='based on Irish Speakers'> bunaithe ar 'Irish Speakers'</span>
<span id='It is not'> Ní</span> <span id='a subject'>ábhar </span><span id='of mockery'>fachnaoid</span> <span id='those'>iad</span> <span id='the'>na</span><span id='so-called few words'> cúpla focal</span>. <span id='They are seeds'>Síolta íad</span>.

`,
*/
//10
`
<span id='Asserts'>Dearbhín</span> <span id='this manifesto'>an forógra seo</span>: <ul>

<div style="animation:delay-fade-in 1s;">
<li>
<span id='One cannot'>Ní feidir</span><span id='give an objective account'> tuairisc oibiachtúil a thabhairt</span><span id='on the intimacy between'> ar an caidreamh idir</span><span id='language'> teanga</span><span id='and mind'> agus meabhair</span>
</li>
</div>
<br>

<div style="animation:delay-fade-in 3s;">
<li>

<span id='A lack of space'>Easpa spás,</span> <span id='rather than'> seachas </span><span id='a lack'>easpa</span> <span id='of interest'> spéis</span> <span id='or ability'>ná cumas</span>, 
<span id='is'>is</span> <span id='the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>
</li>

</div>
<br>

<div style="animation:delay-fade-in 5s;">
<li>
    

<span id='A virtual community can'>Is feidir le spás fiorúl coiteannta</span><span id='suddenly improve'> feabhas tobann a deanamh ar</span><span id='mental fluency'> líofacht intinneach </span><span id='Gaelic'>Gaelach </span><span id='through play and competing together'>tríd spraoí agus iommíocht le cheile</span>
</li>

</div>



</ul>

`,
//11
`
<span id='Would'>Ar</span> <span id='you like to'>mhaith leat</span> <span id='a test'> tríal</span><span id='to play'> a imirt</span>?
`,

//12
`
<span id='what'>Cad</span><span id='is your name'> is ainm dhuit?</span>
`, 
  
//13
  `
<span id='Play'>Imir </span><span id='for'>ar shon</span> :
  `, 
    
//18
  `
  `, 
    
//19
`
`



/*
  * <span id='It is not'>Ní </span><span id='an absence'>easpa</span> <span id='of interest'> spéis</span>, <span id='nor ability'>ná cumas</span>, <span id='nor will'>ná thoill</span>
<span id='which'>is</span> <span id='is the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>
<*/

];

},{}],2:[function(require,module,exports){
//jshint esversion:6

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

        btnTalk.style.backgroundImage = 'url("../../images/btnBg2.png")';
setTimeout(
    function(){
        
        btnTalk.style.backgroundImage = "url('../../images/btnBg1.png')";},1000); 

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

},{}],3:[function(require,module,exports){
//jshint esversion:6
let geagaTexts = require("./geaga-teacs"); //can't use capital letters with browswerify 
var deirGeaga2 = document.querySelector("#deirGeaga2");
let story = 1;
var leavePanel = document.getElementById('leavePanel');
var btnTalk = document.getElementById('btnTalk');
var btnLeave = document.getElementById('leave');
var btnNoLeave = document.getElementById('noLeave');
var allChat = document.getElementById('allChat');
var súile = document.getElementById('súile');
var talkingToGeaga = false;
var chatPanel = document.getElementById('chatPanel');
btnNoLeave.addEventListener("click",noLeaveHandler,false);
btnLeave.addEventListener("click",leaveHandler,false);

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
if(player.x>=653 && player.y>=388){
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
     btnTalk.style.display="inline"; 
    

}
function notNearGeaga(){
     btnTalk.style.display="none"; 

}

function talkHandler(){
    if(talkingToGeaga){
        endTalkToGeaga();
    }else{
    talkToGeaga();}
}
function talkToGeaga(){
    allChat.style.display="inline";
    talkingToGeaga=true;
    canMove=false;
    player.x=863;
    player.y=398;
    btnTalk.innerHTML='<i class= "fa fa-window-close-o">';
    setTimeout(function(){
        súile.style.animation="look-down 1s forwards";
    },1200);
    setTimeout(function(){
        deirGeaga2.innerHTML = geagaTexts[story];
    },2500);


}

function endTalkToGeaga(){
    súile.style.animation="look-up 1s forwards";
setTimeout(function(){
   talkingToGeaga=false;
   canMove=true;
   player.x=650;
   player.y=450;
   allChat.style.display="none";
    deirGeaga2.innerHTML="";
    btnTalk.innerHTML='<i class= "fa fa-commenting-o">';
},1200);
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


},{"./geaga-teacs":1}],4:[function(require,module,exports){

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
 
     

       /*
        *TODO - why doesn't the following behave as it does in jqueries.js?
        * $('#deirGeaga2 span').hover(function(){
            console.log("hovvrin!");
            
            $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });

    */


       
       $('#deirGeaga2').hover(function(){
     $('#bearla').text('Welcome');
        
           $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });
});


},{}]},{},[1,2,3,4]);
