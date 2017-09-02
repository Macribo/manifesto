
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

