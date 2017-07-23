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

function createArrayOfRandomInts(length,upperbound){
    let randomNumbers = Array(length);
    for (let i = 0; i<randomNumbers.length; i++){
        randomNumbers[i] = Math.floor(Math.random()*upperbound);
    }
    return randomNumbers;
}

module.exports = function Camera(tileSize, county, grid, vw, vh, mapSymbolToTerrainType){

    // minimum number of tiles to cover the
    // viewport under all circumstances
    let tw = Math.floor(vw / tileSize + 1);
    let th = Math.floor(vh / tileSize + 1);
    createGrid(tw, th);
    let randomTileVariations = createArrayOfRandomInts(100,4);

    function setOffsets(ox, oy){
        grid.style.left =`${-ox % tileSize}px`;
        grid.style.top = `${-oy % tileSize}px`;
        let sx = Math.floor(ox / tileSize);
        let sy = Math.floor(oy / tileSize);

        updateGrid(tw, th, county, sx, sy);
        updateSprites(ox, oy);
    }

    function createGrid(tw, th){
        //console.log(`Creating tile grid ${tw}x${th}`);
        for(let tileY = 0; tileY < th; tileY++){ 
            for(let tileX = 0; tileX < tw; tileX++){
                let tile = createTile(tileX, tileY, 0,0);

                grid.appendChild(tile);
            }
        }
    }

    function createTile(tileX, tileY, terrainType, terrainVariation ){
        // console.log(`CreateTile ${tileX}, ${tileY}`); 
        let tile = document.createElement("div");
        tile.setAttribute("id", `tile${tileX}_${tileY}`); //template strings
        tile.classList.add('tile');  
        let backgroundPosX = -terrainVariation * tileSize;
        let backgroundPosY = -terrainType * tileSize;
        tile.style.backgroundPositionX = `${backgroundPosX}px`;
        tile.style.backgroundPositionY = `${backgroundPosY}px`;
        tile.style.left = tileX*tileSize+ "px";
        tile.style.top = tileY*tileSize + "px";

        return tile;
    }


    function updateGrid(tw, th, map, sx, sy){
        for(let tileY = 0; tileY < th; tileY++){ 
            for(let tileX = 0; tileX < tw; tileX++){
                let mapY =tileY + sy;
                let mapX =tileX + sx;

                let variationIndex = mapX * mapY;
                let terrainVariation = randomTileVariations[variationIndex % randomTileVariations.length];
                
                let mapSymbol;
                if (mapY>=map.length || mapY < 0){
                    mapSymbol=undefined;
                } else {
                    mapSymbol = map[mapY][mapX];   //tileY gives us the map line, tileX gives the character position    
                }
                
                let terrainType = mapSymbolToTerrainType(mapSymbol);

                let tile = document.querySelector(`#tile${tileX}_${tileY}`);

                if (terrainType !== undefined) {
                    // animate water
                    // let terrainVariation =0 ;
                    if(mapSymbol === '>'){
                        terrainVariation = mapY;
                        terrainVariation = (terrainVariation + Math.floor(Date.now() / 500)) % 4;
                    }

                    //animate surf
                    if(mapSymbol === 'z'){
                        terrainVariation = mapY;
                        terrainVariation = (terrainVariation + Math.floor(Date.now()/1000)) %4;
                    
                    }
 

                    //animate sea
                    if(mapSymbol === '7'|| mapSymbol === '9'|| mapSymbol === '0'){
                        terrainVariation = mapY;
                        terrainVariation = (terrainVariation + Math.floor(Date.now()/3000)) %4;
                    
                    }
 
                    let backgroundPosX = -terrainVariation * tileSize;
                    let backgroundPosY = -terrainType * tileSize;
                    tile.style.backgroundPositionX = `${backgroundPosX}px`;
                    tile.style.backgroundPositionY = `${backgroundPosY}px`;
                    tile.style.opacity=1;
                } else {
                    // hide tile
                    tile.style.opacity=0;
                }

            }
        }
    }

    function updateSpritePosition(sprite, ox, oy){
        let worldPosition = sprite.getWorldPosition();
        let {x, y} = worldPosition;
        sprite.updateScreenPosition((x-ox), (y- oy));
    }

    let sprites = [];
    function addSprite(sprite) {
        sprites.push(sprite);
    }
    function updateSprites(ox, oy) {
        sprites.forEach( (sprite)=> {
            updateSpritePosition(sprite, ox, oy);
        });
    }

    return { //es6 shortcut for setOffsets: setOffsets, etc
        setOffsets,
        addSprite
    };
};

},{}],4:[function(require,module,exports){
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
    'Co. An Longfoirt',
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
    'Tír Thar Muir',
    'An Teanga'
];

},{}],5:[function(require,module,exports){
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

   $('#play').click(function(){

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


},{}],6:[function(require,module,exports){
//jshint esversion:6

let story = 1;
let badgeSelectorL = require("./badge-selector-l");
let badgeSelectorR = require("./badge-selector-r");
let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 
let countyNames = require("./county-names");
//Create the map

var map = [];




map[0] = "An ol stone keep.";
map[1] = "A deep well.";
map[2] = "A sunny glade.";
map[3] = "Tríal";
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
var imreoir = document.querySelector('#imreoir');
var pAinm=document.querySelector('#pAinm');

//Query Selectors:
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");

//let playerName = 'Imreoir_1';
let rightPanel = document.querySelector("#right-panel");
let contae = document.querySelector("#contae");

var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var inputLabel = document.querySelector("#inputLabel");

var fwdBtn = document.querySelector("#fwdBtn");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
var noPlayBtn = document.querySelector('#noPlay');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');
var htmla=document.querySelector('html');
var audioAbattoir = document.querySelector('#abattoir');
fwdBtn.style.cursor = "pointer";
let countyMain = document.querySelector('#countyMain');
let ainmBtn = document.querySelector('#ainmBtn'); //player name
var tileworld = document.querySelector('#tileworld');
var mapdata = document.querySelector('#mapdata');
var curSiosArCo = document.querySelector('#curSiosArCo');
//Event Listeners:
joinTeam.addEventListener("click",joinTeamHandler);
fwdBtn.addEventListener("click", fwdBtnHandler, false);
fwdBtn.addEventListener("mousedown", mousedownHandler, false);
fwdBtn.addEventListener("mouseout", mouseoutHandler, false);
bckBtn.addEventListener("click", bckBtnHandler, false);
playBtn.addEventListener("click", playHandler, false);
noPlayBtn.addEventListener("click", noPlayHandler, false);
ainmBtn.addEventListener("click", ainmHandler);




//Dispay the player's location
render();



countyBtnLeft.addEventListener("click",bckBadgeHandler, false);
countyBtnRight.addEventListener("click",fwdBadgeHandler, false);
//Event Handlers
var ainm='bob';
function fwdBadgeHandler(){
    updateCountyMain(-1);
    console.log("clicked");
    updateCoNameR();
    
}

//deleted keypressHandler - may cause bugs later?
function bckBadgeHandler(){
  // countyMain.style.animation="fade-out .25s";
    updateCountyMain(1);
  //  countyMain.style.opacity=1';
    updateCoNameL();
    //    console.log("clicked <-");
   // if (countyMain.style.opacity ===1){
 // countyMain.style.animation='dim .25s forwards';
  // console.log("to be dimmed.") }
}
    function playHandler(){
       if (story===11){  //player enters name
            output.innerHTML='Tríal';
           narrate(12);
           bckBtn.style.display='none';
           noPlayBtn.style.display='none';
           playBtn.style.display='none';
           audioAbattoir.play();
           htmla.style.backgroundImage ="url('../images/bgDark.png')"; 
           inputElements.style.visibility='visible'; 
           inputElements.style.display='block'; 
       }
      if (story===13){ badgeSelectorL(100); //player selects team
         countyMain.style.top='50px';
         narrate(13);
         badgeSelectorR(100);
         inputName.style.display='none';
         inputLabel.style.display='none';
         ainmBtn.style.display='none';
         countyBtnRight.style.animation='fade-in 1s forwards';
         rightPanel.style.display='inline';    
         countyBtnRight.style.animation='fade-in 1s forwards';
         countyBtnRight.style.display='inline';
         countyBtnLeft.style.animation='fade-in 1s forwards';
         countyBtnLeft.style.display='inline';
        console.log("Hello", ainm);
        //imreoir.style.display='block';
          joinTeam.style.display='inline';
        joinTeam.style.animation='delay-fade-in 5s';
    }
    }
    var coPos = 1; //county Position
   
function updateCountyMain(dist){
        dist += dist*538; //#countyMain {width:539} 
        coPos += dist;
           // if (coPos> 18865){coPos =0;}
           // if (coPos<0){coPos =18865;}

    console.log("coMain bgposX = ", coPos);

    countyMain.style.backgroundPositionX = coPos+"px";
    }
    function joinTeamHandler(){
        inputElements.style.display='none';
        countyMain.style.animation='fade-out 2s forwards';
        console.log("team joined");
        countyBtnRight.style.display='none';
        countyBtnLeft.style.display='none';
        joinTeam.style.display='none';
        imreoir.style.display='none';
        output.style.display='none';
        output2.style.display='none';
        contae.style.display='none';
        inputName.style.display='none';
        curSiosArCo.style.display='none';
        tileworld.style.display='inline';
        tileworld.style.animation='delay-fade-in 2s';
        
    
    }

    function noPlayHandler(){
            alert("Slán and thank you for visiting.");

    }
    function ainmHandler(){
    story=13;
   playHandler();
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
    //end of manifesto - begin game y/n?
if (story===11){
        noPlayBtn.style.display='inline';
        playBtn.style.display='inline';
        // fwdBtn.style.animation='fade-out 0.25s forwards';
        fwdBtn.style.display='none';
        playBtn.style.animation='fade-in 1s';
        noPlayBtn.style.animation='fade-in 1s';
        console.log("yo 11"); 
        console.log("story === 11");   
}
 
    if(story===10){
        //update button styles if player is coming back from events on story 11
        fwdBtn.style.left='229px';
        fwdBtn.style.display='inline';

        playBtn.style.display='none';
        noPlayBtn.style.display='none';
    }


   if(story === 12){ //player wants to play
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
   // input.value = "";
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


},{"./badge-selector-l":1,"./badge-selector-r":2,"./county-names":4,"./story-texts":8}],7:[function(require,module,exports){
//jshint esversion:6

module.exports = function Player(){

    let px = 0; 
    let py = 0;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;
        
    console.log("x: ",px,"y: ",py);
    }

    function getPosition() {
        return {x: px, y: py};
    }
    
    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };
};

},{}],8:[function(require,module,exports){
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
<span id='That leaves us'>Fágann sin muid</span> <span id='speaking about it'>ag caint uirthí </span> <span id='in terms'>i dtearmaí</span> <span id='of the number of'>líonn na</span><span id='Irish Speakers'> 'Irish Speakers'</span>. <span id='It is observed'>Feictear</span> <span id='that there are not'>nach bhfuil</span> <span id='many'>mórán</span><span id='speakers'> cainteoirí</span>, <span id='and'>agus </span><span id='it is assumed'>glachtar leis</span> <span id='therefore'>mar sin</span> <span id='not much would be lost'>nach chailfar mórán</span> <span id='without her'>gan í.</span> 
`,

//7
`
<span id='It is thought'>Ceaptar, </span><span id='perhaps'>b'feidir</span>, <span id='if all can'>más feidir gach rud</span> <span id='to translate to English'>a aistrú go Bearla</span>,<span id="there is no need"> níl gá</span><span id='for Irish'> le Gaeilge</span>.<span id='In English'> I mBearla</span>,<span id='there is no need for'> níl aon gá le</span><span id='Éire'> Éire</span>, <span id='because'>mar</span> <span id='is enough'>is leoir</span> <span id='Ireland'>'Ireland'</span>.

`,

//8

`
<span id='That is a mistake'>Is botún é sin.</span> <span id='First of all'>Sa chead áit </span><span id='there is'>tá</span> <span id='more'>nios mó</span> <span id='in question'>i gceist</span> <span id='with'>le</span> <span id='language'>teanga</span> <span id='than'>ná</span><span id='talk'> caint</span>.<br><br> <span id='A system'>Comhras</span> <span id='of thought'>smaoineamh</span> <span id='is Gaelic'>í an Ghaeilge</span>. <span id='An ecology'>Eiceachóras</span> <span id='of visions'>físanna</span> <span id='the'>na</span> <span id='thousands'>mílte</span><span id='of years'> blianta</span><span id='of age'> d'aois</span><span id='she is'> í</span>.<br><br><div style="animation:delay-fade-in 5s;"><span id='Not lower'> Ní laighdín</span><span id='value'> lúach</span><span id='this resource'> an achmain seo</span><span id='because of'> de bhár</span><span id='scarcity'> ganntanas</span>. 

`,

//9
 `<span id='Secondly'> Sa dara h-áit</span>, 
<span id='There is'>tá</span> <span id='a bit of Irish'>Gaeilge éigin</span> <span id='posessed by'>ag</span> <span id='every'>gach</span> <span id='English-speaker'>Bearl-cainteoir</span> <span id='in the country'>sa tír</span>.
<span id='A factor'>Gníomhadóir</span><span id='unknown'> anaithnid</span><span id='this is'> é seo</span>,<span id='which puts'> a cuireann</span><span id='off accuracy'> dó rath</span><span id='calcu- lations'> áireamhíocht</span><span id='based on Irish Speakers'> bunaithe ar 'Irish Speakers'</span>
<span id='It is not'> Ní</span> <span id='a subject'>ábhar </span><span id='of mockery'>fachnaoid</span> <span id='those'>iad</span> <span id='the'>na</span><span id='so-called few words'> cúpla focal</span>. <span id='They are seeds'>Síolta íad</span>.

`,

//10
`
<span id='Asserts'>Dearbhín</span> <span id='this manifesto'>an forógra seo</span>: <ul>
<li>
<span id='Comes'>Go dtagann</span> <span id='the value of Irish'>lúach an Gaeilge</span><span id='from being used'> óna bheith á usáid</span><span id='as a system'> mar comhras</span><span id='of under- standing'> tuiscint</span><span id='original'> fréamhach</span></li>
<br><li>
<span id='A lack of space'>Easpa spás,</span> <span id='rather than'> seachas </span><span id='a lack'>easpa</span> <span id='of interest'> spéis</span> <span id='or ability'>ná cumas</span>, 
<span id='is'>is</span> <span id='the cause'>cúis</span><span id='of our'> len ár</span> <span id='language question'>dúcheist teanga</span>.

</li><br><li><span id='It would sufficie'>Ba leoir </span><span id='a virtual space'>spás fíorúil </span><span id='to'>chun </span><span id='mental fluency'>líofacht intinneach </span><span id='Gaelic'>Gaelach </span><span id='to improve'>a feabhsú <span>
</li></ul>

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

},{}],9:[function(require,module,exports){
//jshint esversion:6

const Player = require("./player");
const Camera = require("./camera");

let county =document.querySelector("#mapdata").innerHTML.split('\n');
console.log(county);
function mapSymbolToTerrainType(mapSymbol) {
    return {
        '~': 1,//water
        '.': 0, //Grassland
        '*': 5,//paths
        '|': 2,//forests
        '^': 3,//hills
        'M': 4,//mountains
        '>': 1,//riverwater
        '8': 8, //Atlantic water
        '9':9,//Atlantic waves
        '0':10,//Atlantic waves
        '7':11,//Atlantic waves
        't': 6,//border
        'z': 7, //surf
        'x': 12//unreachable (grassland) 



    }[mapSymbol];// || 0; property lookup in object literal || 0
}
const tileSize = 32;
const vw = 32 * 32+ 10;
const vh = 19 * 32 + 5;
let grid = document.querySelector('#grid');

let camera = Camera(tileSize, county, grid, vw, vh, mapSymbolToTerrainType);

let playerElement = document.querySelector('#player');
let player = Player();

camera.addSprite({
    updateScreenPosition: function(x, y) {
        playerElement.style.left = x + "px";
        playerElement.style.top = y + "px";
    },
    getWorldPosition: function() {
        return player.getPosition();
    }
});

//grid offset x and y
let ox=0;
let oy=0;

function timerLoop() {
    let playerPosition = player.getPosition();
    ox = playerPosition.x - (vw/2);
    oy = playerPosition.y - (vh/2);
    camera.setOffsets(ox, oy);
    requestAnimationFrame(timerLoop);
}

requestAnimationFrame(timerLoop);
/*
function createWorldMap(map){
    let mapHeight = map.length;
    let mapWidth = map[0].length; // we assume a rectangular map
    console.log(mapWidth, mapHeight);
    for(let tileY = 0; tileY < mapHeight; tileY++){ 
        for(let tileX = 0; tileX < mapWidth; tileX++){
            let mapSymbol = map[tileY][tileX];   //tileY gives us the map line, tileX gives the character position    
            let terrainType = mapSymbolToTerrainType(mapSymbol);
            if (terrainType !== undefined) {
                let terrainVariation = Math.floor(Math.random()*3);
                let tile = createTile(tileX,tileY,terrainType,terrainVariation);
                document.querySelector('body').appendChild(tile);
            }
        }
    }
}
*/

var inventory = document.querySelectorAll("#inventory>*");
inventory = Array.prototype.slice.call(inventory);
console.log(inventory);
function dropItem() {
    itemElement = inventory.shift(); //inventory 0 and remove inventory 0;
    dropItemElement(itemElement);
}

function dropItemElement(itemElement){
    const position = player.getPosition();
    
    console.log(`data-x="${position.x}" data-y="${position.y}"`);
    camera.addSprite({
        updateScreenPosition: function(x, y) {
            itemElement.style.left = x + "px";
            itemElement.style.top = y + "px";
        },
        getWorldPosition: function() {
            return position;
        }
    });

}

window.addEventListener("keydown", function(event){
   //  console.log('keycode', event.keyCode);
    
    const step = 4;
    switch(event.keyCode){
        case 38:  //up
            player.move(0, -step);
            break;
        case 40:  //down
            player.move(0, step);
            break;
        case 39:  //right
            player.move(step,0);
            break;
        case 37:  //left
            player.move(-step,0);
            break;

        case 68: //d key
            dropItem();
            break;
    }

    event.preventDefault();
});

//new function for placing locations:
//go through inventory items.
//if inv item has data-x and data-y attributes, (look up getAttribute on MDN)
//add sprite at that location.

},{"./camera":3,"./player":7}]},{},[4,2,1,9,3,6,8,5]);
