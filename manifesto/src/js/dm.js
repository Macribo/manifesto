$(document).ready(function () {


    /*update keyboard appearance
    according to dm is speaking or not.
    


    player-can-type = false;

    listen for green keypress

    */


   let dmAgCainnt = true;
   let justListen = true;
let deirDM = [
    `"<div class='dm-output'>
    0
   <br/>
   <br/>
   <br/>
    náid
    </div>`,
    
    `1
    <br/>
    <br/>
    <br/>
    a haon`,
    
    `2
    <br/>
    <br/>
    <br/>
    a dó`,
    `3
    <br/>
    <br/>
    <br/>
    a trí`,
    
    `4
    <br/>
    <br/>
    <br/>
    a ceathair`,
    
    `5
    <br/>
    <br/>
    <br/>
    a cúig`,
    
    `6
    <br/>
    <br/>
    <br/>
    a sé`,
    
    `7
    <br/>
    <br/>
    <br/>
    a seacht`
    ,
    
    `8
    <br/>
    <br/>
    <br/>
    a hocht`
    ,
    
    `9
    <br/>
    <br/>
    <br/>
    a naoi`
    ,
    
    `10
    <br/>
    <br/>
    <br/>
    a deich`
]
let say = 0;
let saidEnough = 9;
let keyPressedInDMmode;

   if(dmAgCainnt){

    $('#output').fadeOut();
    if(justListen){
    $('.btn').addClass('most-btns-during-dm-mode');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    
}

let ceistVis =false;
toggleCeistVis = ()=>{
    if(ceistVis){ceistVis = false;
    render()
}
    else{ceistVis = true;
        render();
    }}
$('#fwdBtn').on('touchend', function(){
        // say++;
// alert()
toggleCeistVis();
}
);

    $('btn').on('touchstart', function(){
		keyPressedInDMmode = (this.innerHTML);
        if(keyPressedInDMmode === '<i class="fa fa-long-arrow-right"></i>'){
        alert();render();     
        setTimeout(function () {
            $('#saighead-deas').removeClass();
            $('#saighead-deas').addClass('btn');
            // $('#saighead-deas').addClass('special-btns-during-dm-mode');
            $('#saighead-deas').css('color','rgb(73, 206, 33)');
            // $('#saighead-deas').addClass('btn-outline-dark');

        },1000);

// alert(keyPressedInDMmode);
// alert(keyPressedInDMmode);
        }
})

render = () => {


    $('.dm-says').html(deirDM[say]);

    if (say === saidEnough){
        setTimeout(function(){
            $('.dm-says').fadeOut();
        },4000);
        $('.btn').removeClass('most-btns-during-dm-mode')
        setTimeout(function(){
            $('#keyboard-container').fadeOut()
        },2000);


    }
/*Start game mode


            $('.btn').removeClass('most-btns-during-dm-mode')
start bringing in tall order resources 

*/


//

if(ceistVis){
    $('.dm-output').fadeOut();
    // alert(ceistVis)
    $('#keyboard-container').fadeIn();

}
else{
    $('.dm-output').fadeIn();
    $('#keyboard-container').fadeOut();


}


}
   };


   render();            // alert(keyPressedInDMmode);

});