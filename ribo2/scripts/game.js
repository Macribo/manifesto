//jshint esversion:6
//Been to variables
//
beenToCorridor= true;

//item variables
sword = false;

//check if command was understood:
function check(){
let check= true;
}

//current room
currentRoom = "Dún Ailinne";

$(document).ready(function(){
    $("#console").fadeIn(3000);
    $("form").submit(function(){
        var input = $("#command_line").val();  //take value of command_line, make it value of input
 //help       
        if (input === "help"){
            $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
        check();
        }


//take commands
        if (input === "tóg claíomh" && currentRoom === "Dún Ailinne"){
            $("<p>Tá an claíomh agam anois.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        check();
        }
        else if(input=="tóg claíomh" && currentRoom !== "Dún Ailinne"){
            $("<p>Níl claíomh anseo.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        check();
        }

    //go to room
        //
        if(input ==="Síar" && currentRoom =="Dún Ailinne"){
        currentRoom = "Síar ó Dún Ailinne";
        $("<p>Siúl mé Síar sa dorchadas piosa beag.  Tá mé imaithe sios le fána, chomh fada le sconsa nach feidir liom treasnú.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        check();
        }
    if(input ==="Síar" && currentRoom =="Síar ó Dún Ailinne"){
        $("<p>Tá sconsca agus geaga sa bhealach orm.  B'feidir faoi solas an lae go mbaidh mé in ánn dul nios fuide an treo sin. Níl rogha agam anocht ach dul ar ais Soir, an bealach ón ar dṫánaigh mé.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        check();
        }


    if(input ==="Soir" && currentRoom =="Síar ó Dún Ailinne"){
        
        $("<p>Siúlaim go cúramach tríd an féar fada fliúch go bárr an cnochán. Níl gealach ná reált sa spéir.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        check();
        }


  //  ní tuigim
        else {
        $("<p>Ní thuigim "+input+".</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        }


        //reset bosca teacs
    $("#command_line").val("");
        














    });

//dynamically creating a full featured image element
$('<img>',
    {
        src: '../images/k.png',
        alt:'Little bear',
        title:'Cad a deanann an rogha Title?',
        click: function(){
            alert($(this).attr('title'));
        }
     })
        .css 
    ({cursor: 'pointer',
    border: '1px solid green',
    padding: '12px 12px 12px 20px 12px',
    backgroundColor:'blue'})
        .appendTo('body');





});
