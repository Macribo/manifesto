$(document).ready(function () {
	new ClipboardJS('#copy');

	let keyPressed;
	let keysToShow = [];
	let rightAnswers = ['náid','a haon','a dó','a trí','a ceathair','a cúig','a sé','a seacht','a hocht','a naoi','a deich']
	showWhatKeys=(keyPressed)=>{
		switch(keyPressed){
			case 'a': keysToShow.push('a');
					keysToShow.push('á');
					keysToShow.push('A');
					break;
			

					case 'b': keysToShow.push('b');
					keysToShow.push('ḃ');
					keysToShow.push('B');
					break;
			
					case 'c': keysToShow.push('c');
					keysToShow.push('ċ');
					keysToShow.push('C');
					break;
			
					case 'd': keysToShow.push('d');
					keysToShow.push('ḋ');
					keysToShow.push('D');
					break;
			
					case 'e': keysToShow.push('e');
					keysToShow.push('é');
					keysToShow.push('E');
					break;
			
					case 'f': keysToShow.push('f');
					keysToShow.push('ḟ');
					keysToShow.push('F');
					break;
			
					case 'g': keysToShow.push('g');
					keysToShow.push('ġ');
					keysToShow.push('G');
					break;
			
					case 'h': keysToShow.push('h');
					keysToShow.push('H');
					break;
			
					case 'i': keysToShow.push('i');
					keysToShow.push('í');
					keysToShow.push('I');
					break;
			
					case 'l': keysToShow.push('l');
					keysToShow.push('L');
					break;
			
					case 'm': keysToShow.push('m');
					keysToShow.push('ṁ');
					keysToShow.push('M');
					break;
			
					case 'n': keysToShow.push('n');
					keysToShow.push('N');
					break;
			
					case 'o': keysToShow.push('o');
					keysToShow.push('ó');
					keysToShow.push('O');
					break;
			
					case 'p': keysToShow.push('p');
					keysToShow.push('ṗ');
					keysToShow.push('P');
					break;
			
					case 'r': keysToShow.push('r');
					keysToShow.push('ꞃ');
					keysToShow.push('R');
					break;
			
					case 's': keysToShow.push('s');
					keysToShow.push('ṡ');
					keysToShow.push('S');
					break;
			
					case 't': keysToShow.push('t');
					keysToShow.push('ṫ');
					keysToShow.push('T');
					break;
			
					case 'u': keysToShow.push('u');
					keysToShow.push('ú');
					keysToShow.push('U');
					break;
			
			

			default: break;
		}
	
	}


	$('#fada-mode').hide();
	$('#caps-keyboard-container').hide();
capsMode=false;


toggleCapsMode = ()=>{
if (capsMode===true){
	$('#keyboard-container').show();
	$('#caps-keyboard-container').hide();
	capsMode=false;
}
else{
		$('#keyboard-container').hide();
		$('#alt-keyboard-container').hide();
	$('#caps-keyboard-container').show();

	capsMode=true;

}
;

}
	fadaMode = ()=>{

		$('#keyboard-container').hide();
		$('#fada-mode').show();

		$('.btn').on( 'touchend' , function(e) {
			if (keyPressed != "Ᵹ"){
			$('#keyboard-container').show();
			$('#fada-mode').hide();}
		})
}
// 	else{
// 		$('#keyboard-container').show();
// 	$('#alt-keyboard-container').hide();
// 	fadaMode=false;
// 	}
// }


function holdKeyDown() {
	// alert(keyPressed);
	
	// alert(keysToShow)
	for (let i = 0; i<keysToShow.length; i++){

		let newButton = `<button id=`+keysToShow[i]+` onclick = "				$('#output').append(this.id);
		" type="button" class="btn btn-right-logo btn-outline-dark">`+keysToShow[i]+`</button>`
		
		$('#j-line').append(newButton)	
	}

	$('#j-line').fadeIn();
	let newLeft = $('#'+keyPressed).offset().left;
	let newTop = $('#'+keyPressed).offset().top -50;
	$('#j-line').css({"left": newLeft});
	$('#j-line').css({"top": newTop});
	setTimeout(function(){
		$('#j-line').fadeOut();
		// alert("removed");
},2000
)
}
	$('.btn').on('touchstart', function(){
		$('#output').fadeIn();
// alert();
		$('#j-line').empty();
		keyPressed = (this.innerHTML);
		keysToShow=[];
// alert(keyPressed);

resolve = () =>{
	let answer = rightAnswers[say];
	if(answer === $('#output').text()){
		alert("ok");

		say++;
		toggleCeistVis();
		toggleOutputVis();  
	}
	else{
		alert('falsch!')
	}
	// render();
 
}
if( keyPressed ===`<i class="fa fa-long-arrow-right"></i>`){
	resolve();
}
		showWhatKeys(keyPressed);

		myVar = setTimeout(holdKeyDown, 600);
	
	})
		$('.btn').on( 'touchend' , function(e) {
		
	
			clearTimeout(myVar)
				var id = this.id
				if (keyPressed=== "Ᵹ"){
					fadaMode();
					// alert('alt')
				}

				else if(
					
					(this.id === "copy")
				){
					// toggleCapsMode()

					
				}

				else
				if (id ==='undo'){
					var temp = $('#output').text();
					temp.toString();
					// alert(temp)
				str=	temp.substring(0, temp.length - 1);
				// alert(str)
				$('#output').text(str) ;
				}
				else if( $('#j-line').is(':hidden')){
					// alert("hidden")
					// git commit -m "block arrow key from being added to output"
					if(keyPressed != `<i class="fa fa-long-arrow-right"></i>`)
				$('#output').append(keyPressed);
		keysToShow= [];}
	
	
			});
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }

			// alert();


			









			let dmAgCainnt = true;
			let justListen = true;
		 let deirDM = [
			 `<div class='dm-output'>
			 0
			<br/>
			<br/>
			<br/>
			náid
			 </div>`,
			 
			 `<div class='dm-output'>
			1
			 <br/>
			 <br/>
			 <br/>
			 a haon</div>`,
			 
			 `<div class='dm-output'>
			 2
			 <br/>
			 <br/>
			 <br/>
			 a dó</div>`,
			 `<div class='dm-output'>
			 3
			 <br/>
			 <br/>
			 <br/>
			 a trí</div>`,
			 
			 `<div class='dm-output'>
			 4
			 <br/>
			 <br/>
			 <br/>
			 a ceathair</div>`,
			 
			 `<div class='dm-output'>
			 5
			 <br/>
			 <br/>
			 <br/>
			 a cúig</div>`,
			 
			 `<div class='dm-output'>
			 6
			 <br/>
			 <br/>
			 <br/>
			 a sé</div>`,
			 
			 `<div class='dm-output'>
			 7
			 <br/>
			 <br/>
			 <br/>
			 a seacht</div>`
			 ,
			 
			 `<div class='dm-output'>
			 8
			 <br/>
			 <br/>
			 <br/>
			 a hocht</div>`
			 ,
			 
			 `<div class='dm-output'>
			 9
			 <br/>
			 <br/>
			 <br/>
			 a naoi</div>`
			 ,
			 
			 `<div class='dm-output'>
			 10
			 <br/>
			 <br/>
			 <br/>
			 a deich</div>`
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
		 let outputVis =false;
		 toggleCeistVis = ()=>{
			 if(ceistVis){ceistVis = false;
			 render()
		 }
			 else{ceistVis = true;
				 render();
			 }}

			 toggleOutputVis = ()=>{
				if(outputVis){outputVis = false;
				render()
			}
				else{outputVis = true;
					$("#output").empty();

					render();
				}}
		 $('#fwdBtn').on('touchend', function(){
				 // say++;
		 // alert()
		 toggleOutputVis();
		 toggleCeistVis();
		 }
		 );
		 
			 $('btn').on('touchstart', function(){
				 keyPressedInDMmode = (this.innerHTML);
				 if(keyPressedInDMmode === '<i class="fa fa-long-arrow-right"></i>'){
				 render();     
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
		 if(outputVis){
			$('#output').fadeIn();
			// alert(ceistVis)
		
		}
		else{
			$('#output').fadeOut();
		
		
		}
		 
		 }
			};
		 
		 
			render();            // alert(keyPressedInDMmode);
		 








		});









