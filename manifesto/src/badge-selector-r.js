//jshint esversion:6
module.exports = function badgeSelectorR(duration) {
    const countyNames = require("./county-names");
    const contae = document.querySelector("#contae");
    const countyBtnRight =document.querySelector("#countyBtnRight");
    const badge = document.querySelector("#badge");
    
    let countyId = 0;
    let badgeWidth = 80; 
    console.log('>>>>>>>', badgeWidth);
    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty
   countyBtnRight.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

    function changeCounty(){
        countyId = (countyId + 1) % countyNames.length; // use modulo to ensure we never step outside the array
        contae.innerHTML = countyNames[countyId];
        changeCountyTime = Date.now();
        oldX =parseInt(badge.style.backgroundPositionX ||"0px");
        console.log("county changed at:",changeCountyTime, "  oldX: ", oldX);
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
