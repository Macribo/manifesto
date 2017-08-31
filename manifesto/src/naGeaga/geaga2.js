
var geagaChat = document.getElementById('geagaChat');
var allChat = document.getElementById('allChat');
//sprite Object

var spriteObject =
    {
        sourceX: 0,
        sourceY: 0,
        sourceWidth: 64,
        sourceHeight: 64,

        x:0,
        y:0,
        width:64,
        height:64,
        vx:0,
        vy:0
    };



//main

//canvas and it's drawingSurface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

//array for sprites
var sprites = [];

//bg sprite
var background = Object.create(spriteObject);
background.sourceY = 64;
background.sourceWidth = 2068;
background.sourceHeight =1424;
background.width = 1034;
background.height =712;
background.x = 0;
background.y =0;
sprites.push(background);
//gameworld and camera object
var gameWorld =
    {
        x:0,
        y:0,
        width: background.width,
        height: background.height

    };

var camera =
    {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,

        //inner boundary getters
        rightInnerBoundary: function(){
            return this.x + (this.width*0.75);
        },
        leftInnerBoundary: function(){
            return this.x + (this.width*0.25);

        },
        topInnerBoundary: function(){
            return this.y + (this.height*0.25);

        },
        bottomInnerBoundary: function(){
            return this.y + (this.height*0.75);
        }

    };


//player sprite created and centered

var canMove=true;
var player = Object.create(spriteObject);
player.x = 243;
player.y = 368;
sprites.push(player);

//load the image

var image = new Image();
image.addEventListener("load",loadHandler,false);
image.src = "../../images/geagaBg1.png";

//arrow key codes
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//Directions
var moveUp = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;

//keyboard listeners hit and release

window.addEventListener("keydown",function(event){
    if(canMove){
        switch(event.keyCode){
            case UP:
                moveUp = true;
                break;

            case DOWN:
                moveDown = true;
                break;

            case LEFT:
                moveLeft = true;
                break;

            case RIGHT:
                moveRight = true;
                break;
        }
        console.log("px: "+player.x+"  py: "+player.y);
        if(player.x>645 && player.y>478){
            playerNearGeaga();
        }
    }


        event.preventDefault();
},false);
window.addEventListener("keyup", function(event){
    switch(event.keyCode){
        case UP:
            moveUp = false;
            break;

        case DOWN:
            moveDown = false;
            break;

        case LEFT:
            moveLeft = false;
            break;

        case RIGHT:
            moveRight = false;
            break;
    }
},false);

function loadHandler()
{
    update();
}

function update()
{

    requestAnimationFrame(update,canvas);

    //up
    if(moveUp && !moveDown)
    {
        player.vy = -5;
        console.log("up");
    }
    //down
    if(moveDown && !moveUp){
        player.vy = 5;
    }
    //left
    if(moveLeft && !moveRight){
        player.vx = -5;
    }
    //right
    if (moveRight && !moveLeft){
        player.vx = 5;
    }

    //no moves

    if(!moveUp && !moveDown)
    {
        player.vy = 0;
    }

    if(!moveLeft && !moveRight){
        player.vx = 0;
    }

    //move the player and keep inside gameworld
    player.x = Math.max(0, Math.min(player.x + player.vx, gameWorld.width - player.width));

    player.y = Math.max(0, Math.min(player.y+player.vy, gameWorld.height-player.height));

    //move camera

    if (player.x < camera.leftInnerBoundary())
    {
        camera.x = Math.floor(player.x - (camera.width * 0.25));
    }

    if (player.y < camera.topInnerBoundary())
    {
        camera.y = Math.floor(player.y - (camera.height * 0.25));
    }
    if (player.x + player.width > camera.rightInnerBoundary())
    {
        camera.x = Math.floor(player.x + player.width - (camera.width * 0.75));
    }
    if (player.y + player.height > camera.bottomInnerBoundary())
    {
        camera.y = Math.floor(player.y + player.height - (camera.height *0.75));
    }
    // camera.x = Math.floor(player.x + (player.width/2) - (camera.width/2));
    // camera.y = Math.floor(player.y + (player.height/2)- (camera.height/2));

    //keep camera inside gameworld
    if(camera.x < gameWorld.x)
    {
        camera.x = gameWorld.x;
    }

    if(camera.y < gameWorld.y)
    {
        camera.y = gameWorld.y;
    }

    if(camera.x + camera.width >gameWorld.x+ gameWorld.width)
    {
        camera.x = gameWorld.x + gameWorld.width - camera.width;
    }
    if(camera.y + camera.height > gameWorld.y + gameWorld.height)
    {
        camera.y = gameWorld.y + gameWorld.height - camera.height;
    }
    render();
}
function playerNearGeaga(){
    console.log("achtung player 1!");
    canMove=false;
    player.x =1648;
    player.y = 501;
   allChat.style.display="inline";
}

function render(event)

{
    drawingSurface.clearRect(0,0,canvas.width,canvas.height);
    drawingSurface.save();

    //move drawing surface to keep position relative to camera
    drawingSurface.translate(-camera.x, -camera.y);



    //LOOP THROUGH ALL SPRITES AND USE THEIR PROPERTIES TO DISPLAY THEM



    if(sprites.length !== 0)
    {
        for (var i = 0; i<sprites.length; i++){
            var sprite = sprites[i];
            drawingSurface.drawImage
            (
                image,
                sprite.sourceX,sprite.sourceY,
                sprite.sourceWidth, sprite.sourceHeight,
                Math.floor(sprite.x), Math.floor(sprite.y),
                sprite.width, sprite.height
            );


        }
    }

    drawingSurface.restore();
}

