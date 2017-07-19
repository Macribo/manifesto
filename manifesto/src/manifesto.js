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

//The buttons
var fwdBtn = document.querySelector("#fwdBtn");
var bckBtn = document.querySelector('#bckBtn'); 

var playBtn = document.querySelector('#play');
var noPlayBtn = document.querySelector('#noPlay');



fwdBtn.style.cursor = "pointer";
fwdBtn.addEventListener("click", clickHandler, false);
fwdBtn.addEventListener("mousedown", mousedownHandler, false);
fwdBtn.addEventListener("mouseout", mouseoutHandler, false);

bckBtn.addEventListener("click", backClickHandler, false);

playBtn.addEventListener("click", backClickHandler, false);
noPlayBtn.addEventListener("click", backClickHandler, false);
//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

//Dispay the player's location
render();

function playHandler(){}

function noPlayHandler(){}


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

function progressStory(){
  if(story>1){
        bckBtn.style.display='inline';
        bckBtn.style.animation='delay-fade-in 1s';
        fwdBtn.style.animation='slide-button-right 1s forwards';
        }
    else
        {
        bckBtn.style.animation='fade-out 1s';
        fwdBtn.style.animation='slide-button-left 1s forwards';
        bckBtn.style.display='none';
        }
//end of manifesto - begin game y/n?
    if(story===14){
      playBtn.style.animation='fade-in 1s';
      notPlayBtn.style.animation='fade-in 1s';
        }

    if(story === 15){ //player wants to play
        fwdBtn.style.animation='fade-out 1s';
        bckBtn.style.animation='fade-out 1s';
    

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

