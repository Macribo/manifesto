 // 
$(document).ready(function(){
$('#button').click(function(){
$('#output2 span').hover(function(){

               $('#bearla').text($(this).attr('title'));
                      console.log(this.attributes.title);});


    $('#output2').mouseout(function(){
        $('#bearla').text('');

});
});
});

