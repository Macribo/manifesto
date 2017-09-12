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
            if(clickCounter===0){ $('#bearla').text('Choose name');
             $(this).css('color','#e35ee5');
            }
if(clickCounter===1){ $('#bearla').text('Choose Irish Level');
             $(this).css('color','#e35ee5');
            }

if(clickCounter===2){ $('#bearla').text('Choose Team');
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

