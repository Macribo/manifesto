(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 //jshint esversion:6 
$(document).ready(function(){
    $('#output').hover(function(){
    $('#bearla').text('Null ist gleich 0.');
    $(this).css('color','#e35ee5');
    }
);
    $('#output').mouseout(function(){
        $('#bearla').text('');
        $(this).css('color','#730a0a');
    });
    document.querySelector('#bckBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'zurück | síar';
    };
    document.querySelector('#fwdBtn').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'Tippe auf irischen Text für die Übersetzung';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
 
     

    $('#fwdBtn').on('touch',function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
            //  $('div').slidedown(); 
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});

    $('#bckBtn').on('touch',function(){

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


        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
 





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


},{}],2:[function(require,module,exports){
//jshint esversion:6

let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 

let story = 2;
var map = [];
var starting = true;




map[0] = "";
map[1] = "";
map[2] = "";
map[3] = "";
// map[4] = "Forógra";
map[4] = "naid = 0";

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

// var playBtn = document.querySelector('#play');
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
fwdBtn.addEventListener("touchstart", fwdBtnHandler, false);
fwdBtn.addEventListener("touchstart", mousedownHandler, false);
fwdBtn.addEventListener("touchend", mouseoutHandler, false);
bckBtn.addEventListener("touchstart", bckBtnHandler, false);
// playBtn.addEventListener("click touch", playHandler, false);




//Dispay the player's location
render();



//Event Handlers
    function playHandler(){
        // playBtn.style.backgroundImage='url("../images/btnBg3.png")';
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
            
    //    hum1.play();
        }
    //end of manifesto - begin game y/n?
if (story===5){
        // playBtn.style.display='inline';
        // fwdBtn.style.animation='fade-out 0.25s forwards';
        fwdBtn.style.visibility='hidden';
        // playBtn.style.animation='fade-in 1s';
        console.log("story === 5");   
}
if(story===1){


}
if(story===2){
    //  setTimeout(function(){ cubes.style.display="inline";},1000);    
    //  setTimeout(function(){ $("#cubes").fadeOut(); },3500);
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
        // playBtn.style.display='none';
    }

}


function render()
{
    if(window.innerWidth > window.innerHeight){
        fwdBtn.style.animation='slide-button-right-landscape 1s forwards';
        
    }else{
        fwdBtn.style.animation='slide-button-right 1s forwards';

        }
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



},{"./story-texts":3}],3:[function(require,module,exports){
//jshint esversion:6
//jshint esversion:6
module.exports = [

    //0
    `
    `,
    
    
    //1
        
    `<span id='herzlich willkommen'>Fáilte.<br/></span><span id="Náid ist gleich 0.">Tá náid cothrom le 0.</span>
    
    
    `,
      
    
        
    //2
    
    `<span id='Beginne mit null.'>Tósnímís le náid.</span>
    `,
    
    //3<span id='One cannot'>Ní feidir</span> <span id='think'>smaoineamh</span> <span id='in Irish'>i nGaeilge</span>, <span id='in English'>i mBearla</span>.
    
    
    
    
    `<span id='schreibe Null'>scríobh náid.</span>
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
    <span id='schreibe eins'>scríobh an tuimhear a haon</span>
    <div style="animation:delay-fade-in 1s;">
/*TODO component: easca keyboard */
</div> `,`  
    
    <span id='Eine null eins zwei zu drei mal vier.'>A náid a haon a dó a trí a ceathar </span> `,`<span id='funf sechs.'>a cúaig a sé.</span>`,`<span id='sieben acht neun ...'> 789.... </span>
    </li>
    
    </li>
    
    </div>
        
    
    
    </ul>
    
    `,
    //11
    `
    <span id='Go maith.'>Ar mhíann leat tuilleadh cleachta le sin?
    arís | ar aghaidh
    </span>
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
