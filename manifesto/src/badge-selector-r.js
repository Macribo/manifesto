//jshint esversion:6
module.exports = function badgeSelectorR(duration) {
    const countyBtnRight =document.querySelector("#countyBtnRight");
    const badge = document.querySelector("#badge");
    
    let badgeWidth = 80; 
//    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty
   countyBtnRight.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

    function changeCounty(){
        changeCountyTime = Date.now();
        oldX =parseInt(badge.style.backgroundPositionX ||"0px");
    }


    setInterval( function() {
        if(oldX !== undefined) {
            let t = Date.now() - changeCountyTime;
            let m = badgeWidth/duration;
            let b = oldX;
            if (t > duration){
                oldX = undefined;
                t = duration;               
            }
            badge.style.backgroundPositionX = (-m*t+b)+"px";
        }
    }, 1000/60);
};
