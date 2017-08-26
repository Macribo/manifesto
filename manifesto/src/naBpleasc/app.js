

var spriteObject =
{
sourceX: 0,
sourceY: 0,
sourceWidth: 64,
sourceHeight:64,
x: 0,
y:0,
width: 64,
height:64,

visible: true

};

var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var sprites = [];
var cat = Object.create(spriteObject);
cat.x = 243;
cat.y = 168;
sprites.push(cat);

var image = new Image();
image.addEventListener("load",loadHandler, false);
image.src = "cat.png";


//event listeners
var up = document.querySelector("#up");
up.addEventListener("mousedown",upHandler,false);

var up = document.querySelector("#down");
down.addEventListener("mousedown",downHandler, false);

var right = document.querySelector("#right");
right.addEventListener("mousedown",rightHandler,false);

var left = document.querySelector("#left");
left.addEventListener("mousedown",leftHandler,false);

var hide = document.querySelector("#hide");
hide.addEventListener("mousedown",hideHandler,false);

var hide = document.querySelector("#show");
show.addEventListener("mousedown",showHandler,false);

var bigger = document.querySelector("#bigger");
bigger.addEventListener("mousedown",biggerHandler, false);

var smaller = document.querySelector("#smaller");
smaller.addEventListener("mousedown",smallerHandler, false);

function loadHandler()
{//run the update animation loop when the image has loaded
  update();
}

function update()
{
  requestAnimationFrame(update,canvas);
  render();
}

//button event handlers

function upHandler(event)
{
  cat.y -=10;
}

function downHandler(event)
{
 cat.y += 10;
}

function rightHandler(event)
{
  cat.x += 10;
}


function leftHandler(event)
{
  cat.x -=10;
}

function hideHandler(event)
{cat.visible = false;}

function showHandler(event)
{
  cat.visible = true;
}

function biggerHandler(event)
{
  cat.height += 10;
  cat.width += 10;
  cat.x -=5;
  cat.y -=5;

}

function smallerHandler(event)
{
  cat.height -= 10;
  cat.width -= 10;
  cat.x += 5;
  cat.y += 5;
}


function render(event)
{

  drawingSurface.clearRect(0,0,canvas.width,canvas.height);

  if(sprites.length !==0)
  {
    for (var i = 0; i<sprites.length; i++)
    {
      var sprite = sprites[i];
      if(sprite.visible){
        drawingSurface.drawImage(
          image,sprite.sourceX,sprite.sourceY,sprite.sourceWidth,sprite.sourceHeight,
          Math.floor(sprite.x),Math.floor(sprite.y),
          sprite.width,sprite.height);

      }
    }
  }



}





