(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//jshint esversion:6

module.exports = [
    '',
    'Co. Uíbh Fhailí',
    'Co. Lú',
    'Co. Loch Garman',
    'Co. Luimnigh',
    'Co. Bhaile Átha Chliath',
    'Co. Liatroma',
    'Co. Aontroma',
    'Co. Dhún na nGall',
    'Co. Fhear Manach',
    'Co. Chorcaí',
    'Co. Chill Mhantáin',
    'Co. Ros Comáin',
    'Co. Dhoire',
    'Co. Shligigh',
    'Co. Thiobraid Árann',
    'Co. Laoise',
    'Co. Phort Láirge',
    'Co. Chill Chainnigh',
    'Co. Na Mí',
    'Co. Chiarraí',
    'Co. An LongFoirt',
    'Co. Mhaigh Eo',
    'Co. Na hIarmhí',
    'Co. An Dúin',
    'Co. Ard Mhacha',
    'Co. Cheatharlach',
    'Co. Mhuineacháin',
    'Co. na Gaillimhe',
    'Co. Chill Dara',
    'Co. An Chláir',
    'Co. An Cabháin',
    'Co. Thír Eoghain',
    'Thar Muir',
    'Dearg le Fearg'
];

},{}],2:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){

    document.querySelector('#bckBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'back';
    };
    document.querySelector('#fwdBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'next';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
 
     
    $('#fwdBtn').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
             $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});
    $('#bckBtn').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
             $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});
});


},{}],3:[function(require,module,exports){
//jshint esversion:6


let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 


//Create the map

var map = [];




map[0] = "An ol stone keep.";
map[1] = "A deep well.";
map[2] = "A sunny glade.";
map[3] = "A sleeping dragon.";
map[4] = "Manifesto";
map[5] = "An ancient gate.";
map[6] = "The edge of a river.";
map[7] = "A lonely wooden bench.";
map[8] = "An isolated cottage. Faint music comes from inside.";

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

//Set the blocked path messages
var blockedPathMessages = [];

blockedPathMessages[0] = "Níl an chuid sin den cluiche ulamh go fóil.";
blockedPathMessages[1] = "Níl an piosa sin ríomhchláraithe go fóil.";
blockedPathMessages[2] = "Ní feidir dul an bealach sin..";
blockedPathMessages[3] = "Ní feidir dul an bealach sin.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "Tá an bealach sin dúnta.";
blockedPathMessages[6] = "Ní feidir.";
blockedPathMessages[7] = "Tá an bealach sin dúnta.";
blockedPathMessages[8] = "Ní feidir dul an treo sin.";

//Set the blocked path messages
var helpMessages = [];

helpMessages[0] = "";
helpMessages[1] = "I wonder if you could 'use' something to find out how deep the well is?";
helpMessages[2] = "";
helpMessages[3] = "Maybe if you had a sword, you could slay the dragon?";
helpMessages[4] = "";
helpMessages[5] = "";
helpMessages[6] = "";
helpMessages[7] = "";
helpMessages[8] = "This seems like a nice place for music.";

//Create the objects and set their locations
var items = ["stone"];
var itemLocations = [6];

//An array to store what the player is carrying
var backpack = [];

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = ``;

//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow 
    = ["north","east", "south", "west", 
        "help", "take", "use", "drop"];
var action = "";

//An array of items the game understands
//and a variable to store the current item
var itemsIKnow = ["flute", "stone", "sword"];
var item = "";

//The img element
var image = document.querySelector("img");

//The input and output fields
var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var input = document.querySelector("#input");

//The buttons
var fwdBtn = document.querySelector("#fwdBtn");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
var noPlayBtn = document.querySelector('#noPlay');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');


fwdBtn.style.cursor = "pointer";

//Event Listeners:

fwdBtn.addEventListener("click", fwdBtnHandler, false);
fwdBtn.addEventListener("mousedown", mousedownHandler, false);
fwdBtn.addEventListener("mouseout", mouseoutHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);
noPlayBtn.addEventListener("click", noPlayHandler, false);


countyBtnLeft.addEventListener("click",bckBadgeHandler, false);
countyBtnRight.addEventListener("click",badgerFwd, false);


//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

//Dispay the player's location
render();


//Event Handlers
function bckBadgeHandler(){
console.log("clicked");
//debugger;
}
function fwdBadgeHandler(){
console.log("clicked");
//fwdBadgeSelector.test();
}

function playHandler(){
 bckBtn.style.display='none';
 noPlayBtn.style.display='none';
 playBtn.style.display='none';
 
 
 countyBtnRight.style.animation='fade-in 1s forwards';

 countyBtnLeft.style.animation='fade-in 1s forwards';
 countyBtnLeft.style.display='inline';
 countyBtnRight.style.display='inline';
output2.innerHTML="<span id='Select'>Roghnaigh</span> <span id='your team'>foireann</span>";}


function noPlayHandler(){


}


function mousedownHandler(){
    fwdBtn.style.background = "-webkit-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    fwdBtn.style.background = "-moz-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    fwdBtn.style.background = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
}

function mouseoutHandler(){
    fwdBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    fwdBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    fwdBtn.style.background = "#505050";
}

function bckBtnHandler(){
    bckBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    bckBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    bckBtn.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

    stepBack();

}

function fwdBtnHandler(){
    fwdBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    fwdBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    fwdBtn.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    stepFwd();
    playGame();
}

function keydownHandler(event)
{

    if(event.keyCode === 13)
    {
        playGame();
    }
}


let story = 13;
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

function progressStory(){
  if(story>1){
        bckBtn.style.display='inline';
        bckBtn.style.animation='delay-fade-in 1s';
        fwdBtn.style.animation='slide-button-right 1s forwards';
        }
    else
        {
       //I want this, it's not working yet:
            //bckBtn.style.animation='fade-out 0.25s forwards';
        //instead, I'm just setting display to 'none'
        bckBtn.style.display='none';
        fwdBtn.style.animation='slide-button-left 1s forwards';

        }

    if(story===13){
//update button styles if player is coming back from events on story 14
          fwdBtn.style.left='229px';
          fwdBtn.style.display='inline';
          
      playBtn.style.display='none';
      noPlayBtn.style.display='none';
        }
    

//end of manifesto - begin game y/n?
    if(story===14){

      noPlayBtn.style.display='inline';
      playBtn.style.display='inline';
     // fwdBtn.style.animation='fade-out 0.25s forwards';
        fwdBtn.style.display='none';
        playBtn.style.animation='fade-in 1s';
      noPlayBtn.style.animation='fade-in 1s';
                        console.log("yo 14"); 
    }
    if(story === 15){ //player wants to play
       bckBtn.style.animation='fade-out 0.25s forwards';
        playBtn.style.animation='fade-out 0.5s forwards';
        noPlayBtn.style.animation='fade-out 0.5s forwards';
    bckBtn.style.display='none';
    playBtn.style.display='none';
    noPlayBtn.style.display='none';
    }

}




function playGame()
{

    narrate(story); 
    output2.className='fadeText';
    render();
//using story to trigger game events
    //
    progressStory(story);
    console.log(story);
}
function takeItem()
{
    //Find the index number of the item in the items array
    var itemIndexNumber = items.indexOf(item);

    //Does the item exist in the game world
    //and is it at the player's current location?
    if(itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = "You take the " + item + ".";

        //Add the item to the player's backpack 
        backpack.push(item);

        //Remove the item from the game world
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);

        //Display in the console for testing
        console.log("World items: " + items);
        console.log("backpack items: " + backpack);
    }
    else
    {
        //Message if you try and take an item
        //that isn't in the current location
        gameMessage = "You can't do that.";
    }
}

function dropItem()
{
    //Try to drop the item only if the backpack isn't empty
    if(backpack.length !== 0)
    {
        //Find the item's array index number in the backpack
        var backpackIndexNumber = backpack.indexOf(item);

        //The item is in the backpack if backpackIndex number isn't -1
        if(backpackIndexNumber !== -1)
        {

            //Tell the player that the item has been dropped
            gameMessage = "You drop the " + item + ".";

            //Add the item from the backpack to the game world 
            items.push(backpack[backpackIndexNumber]);
            itemLocations.push(mapLocation); 

            //Remove the item from the player's backpack 
            backpack.splice(backpackIndexNumber, 1);
        }
        else
        {
            //Message if the player tries to drop
            //something that's not in the backpack
            gameMessage = "You can't do that.";
        }
    }
    else
    {
        //Message if the backpack is empty
        gameMessage = "You're not carrying anything.";
    }
}

function useItem()
{
    //1. Find out if the item is in the backpack

    //Find the item's array index number in the backpack
    var backpackIndexNumber = backpack.indexOf(item);

    //If the index number is -1, then it isn't in the backpack.
    //Tell the player that he or she isn't carrying it.
    if(backpackIndexNumber === -1)
    {
        gameMessage = "You're not carrying it.";
    }

    //If there are no items in the backpack, then
    //tell the player the backpack is empty
    if(backpack.length === 0)
    {
        gameMessage += " Your backpack is empty";
    }

    //2. If the item is found in the backpack
    //figure out what to do with it
    if(backpackIndexNumber !== -1)
    {
        switch(item)
        {
            case "flute":
                if(mapLocation === 8)
                {
                    gameMessage = "Beautiful music fills the air.";
                    gameMessage += "A wizend old man steps outside "; 
                    gameMessage += "and hands you a sword!";

                    //Add the sword to the world
                    items.push("sword");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage = "You try and play the flute "; 
                    gameMessage += "but it makes no sound here.";
                }
                break;

            case "sword":
                if(mapLocation === 3)
                {
                    gameMessage = "You swing the sword and slay the dragon! ";
                    gameMessage += "You've saved the forest of Lyrica!";

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";  
                }
                else
                {
                    gameMessage = "You swing the sword listlessly.";
                }
                break;

            case "stone":
                if(mapLocation === 1)
                {
                    gameMessage = "You drop the stone in the well.";
                    gameMessage += " A magical flute appears!";

                    //Remove the stone from the player's backpack 
                    backpack.splice(backpackIndexNumber, 1);

                    //Add the flute to the world
                    items.push("flute");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage = "You fumble with the stone in your pocket.";
                }
                break;			          
        }
    }
}

function render()
{
    //Render the location
    output.innerHTML = map[mapLocation];
    image.src = "../images/" + images[mapLocation];

    //Display an item if there's one in this location
    //1. Loop through all the game items
    for(var i = 0; i < items.length; i++)
    {
        //Find out if there's an item at this location
        if(mapLocation === itemLocations[i])
        {
            //Display it
            output.innerHTML += "<br>You see a <strong>" + items[i] + "</strong> here.";
        }
    }

    //Display the player's backpack contents
    if(backpack.length !== 0)
    {
        output.innerHTML += "<br>You are carrying: " + backpack.join(", ");  
    }

    //Display the game message

    output.style.fontSize="140px";
    output.style.textAlign="center";
    output.innerHTML += gameMessage ;
    output.style.padding=0;
    output.style.margin=0;
    //Clear the input field
    input.value = "";
}
function badgerFwd(duration){



    const countyNames = require("./county-names");
    const contae = document.querySelector("#contae");

    let countyId = 0;
    const badge = document.querySelector("#badge");
    let badgeWidth = 80; 
    console.log('>>>>>>>', badgeWidth);
    
    countyBtnRight.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

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
    changeCounty(); //notice no brackets on updateCounty
}

    function changeCounty(){
        countyId = (countyId + 1) % countyNames.length; // use modulo to ensure we never step outside the array
        contae.innerHTML = countyNames[countyId];
        changeCountyTime = Date.now();
        oldX =parseInt(badge.style.backgroundPositionX ||"0px");
        console.log("county changed at:",changeCountyTime, "  oldX: ", oldX);
    }






},{"./county-names":1,"./story-texts":4}],4:[function(require,module,exports){
//jshint esversion:6
module.exports = [

//0
`
`,


//1
    
`<span id='Welcome'>Fáilte.</span>


`,
  

    
//2

`
<span id='There is'>Tá</span> <span id='more'>nios mó</span> <span id='in question'>i gceist</span> <span id='with language'>le teanga</span> <span id='than talk'>ná caint</span>.

`,

//3


`
<span id='One cannot'>Ní feidir</span> <span id='think'>smaoineamh</span> <span id='in Irish'>i nGaeilge</span>, <span id='in English'>i mBearla</span>.




`,
//4
`

<span id='In English'>I mBearla</span>, <span id='it is that'>tá</span> <span id='the Irish'>an Gaeilge</span> <span id='utterly separated'>glanscartha</span> <span id='from'>ó</span> <span id='the meaning'>brí</span> <span id='of Irish'>an Gaeilge</span>.

`,

//5
`
<span id='English leaves'>Fágann Bearla</span> <span id='us'>muid</span> <span id='discussing'>ag plé</span> <span id='the question'>ceist</span> <span id='of the tongue'>an teanga</span> <span id='as though'>amhlaidh is</span> <span id='that'>gur</span> <span id='an ornament'>ornáid</span> <span id='decorative'>maisaithe</span> <span id='cultural'>cultúrtha</span> <span id='the Irish language is'>í an Gaeilge</span>.


`,

//6

`
<span id='We are left'>Fágtar muid</span> <span id='speaking'>ag caint</span> <span id='in terms'>i dtearmaí</span> <span id='of the number of'>líonn</span><span id='Irish Speakers'> 'Irish Speakers'</span>. <span id='It is observed'>Feictear</span> <span id='that there are not'>nach bhfuil</span> <span id='many'>mórán</span><span id='speakers'> cainteoirí</span>, <span id='and'>agus </span><span id='it is assumed'>glachtar leis</span> <span id='therefore'>mar sin</span> <span id='not much would be lost'>nach chailfar mórán</span> <span id='without her'>gan í.</span> 


`,

//7
`
<span id='It is thought'>Ceaptar, </span><span id='perhaps'>b'feidir</span>, <span id='if all can'>más feidir gach rud</span> <span id='to translate to English'>a aistrú go Bearla</span>,<span id="there is no need"> níl gá</span><span id='for Irish'> le Gaeilge</span>.<span id='In English'> I mBearla</span>,<span id='there is no need for'> níl aon gá le</span><span id='Éire'> Éire</span>, <span id='because'>mar</span> <span id='is enough'>is leoir</span> <span id='Ireland'>'Ireland'</span>.





`,

//8

`
<span id='But'>Ach</span> <span id='there is'>tá</span> <span id='more'>nios mó</span> <span id='in question'>i gceist</span> <span id='with'>le</span> <span id='language'>teanga</span> <span id='than'>ná</span><span id='talk'> caint</span>. <span id='A system'>Comhras</span> <span id='of thought'>smaoineamh</span> <span id='is Gaelic'>í an Ghaeilge</span>. <span id='An ecology'>Eiceachóras</span> <span id='of visions'>físanna</span> <span id='the'>na</span> <span id='thousands'>mílte</span><span id='of years'> blianta</span><span id='of age'> d'aois</span><span id='she is'> í</span>. <span id='That is'>Sin</span> <span id='a powerful thing'>rud laidir</span>. 
<span id='Here is'>Seo</span><span id='powerful thing'> rud laidir</span><span id='another'> eile</span>:

`,

//9
 `   
<span id='There is'>Tá</span> <span id='a bit of Irish'>Gaeilge éigin</span> <span id='posessed by'>ag</span> <span id='every'>gach</span> <span id='English-speaker'>Bearl-cainteoir</span> <span id='in the country'>sa tír</span>.<span id='It is not'> Ní</span> <span id='a subject'>ábhar </span><span id='of mockery'>fachnaoid</span> <span id='those'>iad</span> <span id='the'>na</span><span id='so-called few words'> cúpla focal</span>. <span id='They are seeds'>Síolta íad</span>. 


`,

//10
`

<span id='It is not'>Ní </span><span id='an absence'>easpa</span> <span id='of Irish'>Gaeilge</span> <span id='which'>is</span> <span id='is the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>. <span id='Nor'>Ná</span> <span id='an absence'>easpa</span> <span id='of interest'> spéis</span>, <span id='nor ability'>ná cumas</span>, <span id='nor will'>ná thoill</span><span id='either'> ach oiread</span>.

`,

//11
//12
`
<span id='An absence'>Easpa</span> <span id='of room'>spás</span> <span id='is the cause'>is cúis</span><span id='of it'> leis</span>. <span id='There is no'>Níl</span> <span id='room'>spás</span> <span id='in'>sa</span> <span id='English thought'>samhlíocht Bearla</span> <span id='for'>i gcomhair</span> <span id='thoughts'>smaointe</span><span id='Gaelic'> Gaelach</span>. 

`,


//13
`
<span id='The aim'>Cuspoir</span> <span id='of this manifesto'>an forógra seo</span> <span id='is that'>ná</span> <span id='it is possible'>gur feidir</span> <span id='virtual spaces'>spásanna fíorúil</span><span id='to use for to'> a usáid chun</span> <span id='a global Gaelic thinking'>samhlíocht Gaelach domhanda</span><span id='to awaken'> a dhuiseacht</span>.  

`,

//14
`<span id='Imagine'>Samhlaigh</span> <span id='a platform'>árdán</span> <span id='social'>socialta</span> <span id='virtual'>fíorúil</span> <span id='in which one could'>inar feidir</span>: 
<br>
    <ul><li>
<span id='Ourselves'>Muid fein</span> <span id='identify'>a sainú</span> <span id='as'>mar</span> Gael, <span id='in a'>i</span> <span id='"land"'>"tír"</span> <span id='Gaelic'>Gaelach</span> <span id='digital'>digitach</span></li><li>
<span id='Resources'>Áisanna</span> <span id='Gaelic'>Gaelach</span> <span id='discover'>a aimsú</span> <span id='and'>agus</span> <span id='share'>a roinnt</share></li><li>
<span id='Co-operate'>Comhoibrú</span> <span id='on'>ar</span><span id='projects'> tionscanamh</span> <span id='and'>agus</span><span id='business ventures'> gnó</span>
</li>
</ul>
`,

//15
`

<span id='Would'>Ar</span> <span id='you like to'>mhaith leat</span> <span id='try'>tríal</span> <span id='give it a shot'>a bhainnt as</span>?

`,

//16
`
<span id='Select'>Roghnaigh</span> <span id='your team'>foireann</span>
`, 
  
//17
  `
  `, 
    
//18
  `
  `, 
    
//19
`
`





];

},{}]},{},[1,3,4,2]);
