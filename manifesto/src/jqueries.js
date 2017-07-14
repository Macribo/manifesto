 //jshint esversion:6 
$(document).ready(function(){

    document.querySelector('#button').onmouseenter = (event) => {
        document.querySelector('#bearla').innerHTML = 'push';
    };
//    $('#button').hover(function(){
//                   $('#bearla').text('push');
//    });
    
    $('#button').click(function(){

        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('title'));
             $(this).css('color','#202020');
             $('div').slidedown(); 
             console.log('go red');
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});
});

