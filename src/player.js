//jshint esversion:6

module.exports = function Player(){

    let px = 0; 
    let py = 0;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;
        
    console.log("x: ",px,"y: ",py);
    }

    function getPosition() {
        return {x: px, y: py};
    }
    
    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };
};
