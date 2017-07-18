(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//jshint esversion:6
//
module.exports = function badgeSelector(duration) {
    const countyNames = require("./county-names");
    const contae = document.querySelector("#contae");

    let countyId = 0;
    const badge = document.querySelector("#badge");
    let badgeWidth = 80; 
    console.log('>>>>>>>', badgeWidth);
    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty

    let oldX;
    let changeCountyTime;

    function changeCounty(){
        countyId = (countyId + 1) % countyNames.length; // use modulo to ensure we never step outside the array
        contae.innerHTML = countyNames[countyId];
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

},{"./county-names":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){

    document.querySelector('#button').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'next';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
 
     
    $('#button').click(function(){

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


},{}],5:[function(require,module,exports){
//jshint esversion:6


let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 


let badgeSelector = require("./badge-selector");
badgeSelector(100);


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

//The button
var fwdBtn = document.querySelector("#button");
var bckBtn = document.querySelector('#button_manifesto_back'); 

fwdBtn.style.cursor = "pointer";
fwdBtn.addEventListener("click", clickHandler, false);
fwdBtn.addEventListener("mousedown", mousedownHandler, false);
fwdBtn.addEventListener("mouseout", mouseoutHandler, false);

bckBtn.addEventListener("click", backClickHandler, false);

//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

//Dispay the player's location
render();

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

function backClickHandler(){
    bckBtn.style.background = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    bckBtn.style.background = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    bckBtn.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

    stepBack();

}

function clickHandler(){
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


let story = 1;
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
    output2.className='fadeText';
    render();

    if(story>1){
        bckBtn.style.display='inline';
        bckBtn.style.animation='delay-fade-in 1s';
        fwdBtn.style.animation='slide-button-right 1s forwards';
        }else
        {
        bckBtn.style.animation='fade-out 1s';
        fwdBtn.style.animation='slide-button-left 1s forwards';
        bckBtn.style.display='none';}
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



},{"./badge-selector":1,"./story-texts":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
//jshint esversion:6
module.exports = [

//0
`
`,


//1
    
`<span id='Welcome'>Fáilte.</span>`,
  

    
//2

`
<span id=' There is'>Tá</span> <span id=' more'>nios mó</span> <span id='in'>i</span> <span id=' question'>gceist</span> <span id=' with'>le</span> <span id='language'>teanga</span> <span id=' than'>ná</span>
<span id='talk'>
 caint.</span>

`,

//3


`
<span id='One cannot'>Ní feidir</span> <span id=' think'>smaoineamh</span> <span id='in Irish'>i nGaeilge,</span> <span id='in English'>i mBearla.</span>



`,
//4
`
<span id='But'>Ach</span> <span id='often'>go minic</span> <span id='it is that'>bionn</span> <span id='We'>muid</span><span id='are thinking'> ag smaoineamh</span> <span id='about'>faoi</span><span id="Irish"> Gaeilge,</span> <span id='in English'> i mBearla.</span>
`,

//5
`<span id='because'>Toisc </span><span id='one cannot'>nach feidir</span> <span id='Irish'>Gaeilge</span> <span id='understand'>a thuiscint</span> <span id='in'>i</span><span id='English'> mBearla</span>, <span id='we are left'> fágtar muid</span> <span id='attempting to'>ag iarraidh</span> <span id='make estimates'> meastachán a deanamh</span><span id='on the vitality'> ar sláinte</span> <span id='of the language'>an teanga</span>
<span id='based on'> bunaithe ar</span><span id='the quantity'> líon</span> <span id='of the'>na</span> 'Irish Speakers'.
`,


//6
` <span id='recognises'>
 Aithníonn <span id='of'>an</span>
 <span id='in English mind'> meon Bearla</span><span id='there is not'> nach bhfuil</span> <span id='but'>ach</span> <span id='a minority'>mionlach</span> <span id='speaking'> ag cainnt</span> <span id='in Irish'>i nGaeilge.</span>

`,

//7
`
<span id='it does not recognise'>Ní aithníonn sé</span> <span id='that'>go</span> <span id='there is'>bhfuil</span> <span id='Irish'>Gaeilge</span> <span id='learned'>foghlamtha</span> <span id='by'>ag</span> <span id='a large majority'>moramh mór</span>.



`,

//8

`
<span id='It is'>Is</span> <span id='a system'>comhras</span> <span id='of thought'>smaoineamh</span> <span id='that Irish is'>í an Ghaeilge</span>.
`,

//9
`<span id='A revival'>Tá athbheochaint</span> <span id='(of) Irish'>Gaeilge</span> <span id='is possible'>indéanta</span> <span id='with'>le</span> <span id='technology'>teicneolaíocht</span><span id='computer> ríomhara</span>.
    
`,

//10
`
<span id='It would be'>Bheadh</span> <span id='a revival'>athbheochaint</span> <span id='of the'>na</span> <span id='Gaels'>Gael</span> <span id='would be'>ina</span><span id='legendary'> finnsceal</span>.

`,

//11
//12
`
`,


//13
`
`,

//14
`
`,

//15
`
`,

//16
`
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

},{}],8:[function(require,module,exports){
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

},{"./camera":2,"./player":6}]},{},[1,3,5,7,4,6,2,8]);
