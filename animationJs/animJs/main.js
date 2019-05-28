
let delay = 50;
let i = 0;
let startTimer = function (pixels) {
let elem = document.getElementById('circle');
let bottom = elem.offsetTop;
if((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)){
    clearInterval(timer); 
    timer =  setInterval(function(){
        startTimer(pixels *-1);
    }, delay);
}
    elem.style.top = bottom + pixels + 'px';
 i++
}
let timer =  setInterval(function(){
    startTimer(20);
}, delay);
