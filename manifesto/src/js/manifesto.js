//jshint esversion:6

// let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 
$(document).ready(function () {
// let story = 2;





//Initialize the gameMessage
var gameMessage = ``;






    $('#fwdBtn').on('touchend',function(){
        alert(story)
        // story++;
});


function narrate(story){
        // output2.innerHTML = storyTexts[story];
        // output2.className=''; 
        console.log("test! "+story);
    }
    //test

    function stepBack(){
        // story--;
        playGame();
    }
    function stepFwd(){
        // story++;
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
        // playBtn.style.display='inline';
        // fwdBtn.style.animation='fade-out 0.25s forwards';
        // fwdBtn.style.visibility='hidden';
        // playBtn.style.animation='fade-in 1s';
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
        // fwdBtn.style.left='-42px';
        // fwdBtn.style.display='inline';
        // fwdBtn.style.visibility='visible';
        // playBtn.style.display='none';
    }

}


function render()
{
    //Render the location
    // output.innerHTML = map[mapLocation];
   // image.src = "../images/" + images[mapLocation];



    //Display the game message

}


});