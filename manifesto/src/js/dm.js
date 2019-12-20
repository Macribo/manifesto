$(document).ready(function () {


    /*update keyboard appearance
    according to dm is speaking or not.
    


    player-can-type = false;

    listen for green keypress

    */


   let dmAgCainnt = true;
   let justListen = true;
let deirDM = [
    `"Do what is beyond your strength even should you fail sometimes."
    <br>Charles Stewart Parnell`,
    
    `According to <a href="https://storyarchaeology.com/">this</a> the Irish are Brits.
    And the Brits are Celts.`,
    
    `<h3>The Island of Ireland comes from 150 vertical kilometers of Lorentia afloat on the asthenosphere;</h3>`,
    `
    which crossed the world to collide with a seperation of the Avalonian landmass,
    450 million years ago.</h3>`,
    
    `<h3>Ages flew through we know not what until our oldest tales of Banba.</h3>`,`Whomever they were;
    Beaker people, Milesians...`,
    
    `'They who were' have gifted us a language on the wind;`,
    
    `in which`,
    
    `The difference between an enegmatic arrowhead, and 'saiġead', is kinetic war broght to the eye of a king...`
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
    $('.btn').on('touchstart', function(){
		keyPressedInDMmode = (this.innerHTML);
        if(keyPressedInDMmode === '<i class="fa fa-long-arrow-right"></i>'){
            say++;
render();     
setTimeout(function () {
    $('#saighead-deas').removeClass();
    $('#saighead-deas').addClass('btn');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
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
}
   };
   render();            // alert(keyPressedInDMmode);

});