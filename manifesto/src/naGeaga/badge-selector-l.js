//jshint esversion:6
module.exports = function badgeSelectorL(duration) {
    const countyBtnLeft =document.querySelector("#countyBtnLeft");
    const badge = document.querySelector("#badge");
    
    let countyId = 0;
    let badgeWidth = -80; 
    console.log('>>>>>>>', badgeWidth);
//    badge.addEventListener("click", changeCounty); //notice no brackets on updateCounty
   countyBtnLeft.addEventListener("click",changeCounty);
    let oldX;
    let changeCountyTime;

    function changeCounty(){
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
