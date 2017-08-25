(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){
    $('#output').hover(function(){
    $('#bearla').text('Manifesto');
    $(this).css('color','#e35ee5');
    }
);
    $('#output').mouseout(function(){
        $('#bearla').text('');
        $(this).css('color','#730a0a');
    });
    document.querySelector('#bckBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'back';
    };
    document.querySelector('#fwdBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'Mouseover Irish text to translate';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
 
     
    $('#fwdBtn').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
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


},{}],2:[function(require,module,exports){
//jshint esversion:6

let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 

let story = 1;
var map = [];




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
    window.location.replace("http://ribodev.com/wp-content/uploads/2017/manifestoWeb/src/naContae/naContae.html");
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

 
    console.log("saying hi.");

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
     setTimeout(function(){ htmla.style.backgroundImage="url('../images/bgAnim6.gif')";},1000);    
     setTimeout(function(){
     
        htmla.style.backgroundImage="url('../images/bg.png')";    
     },3500);


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


},{"./story-texts":3}],3:[function(require,module,exports){
//jshint esversion:6
module.exports = [

//0
`
`,


//1
    
`<span id='Welcome'>Fáilte.</span>


`,
  

    
//2

`<span id='A Question...'>Ceist...</span>
`,

//3<span id='One cannot'>Ní feidir</span> <span id='think'>smaoineamh</span> <span id='in Irish'>i nGaeilge</span>, <span id='in English'>i mBearla</span>.




`<span id='This language'>Tá an teanga seo</span><span id='is involved with'> bainteach le</span>
<span id='writing and speaking'> scriobh agus caint,</span><span id='but'> ach </span>
<span id='is it used'>an usaidtear</span><span id='in the mind'> san aigne í </span><span id='also?'>freisin?</span>
`,

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

},{}]},{},[3,1,2]);
