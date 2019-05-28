
const animationText = document.getElementById('animationText');
window.addEventListener('load', ()  =>{
    const elements = animationText.getElementsByTagName('li');
    for (let i = 0; i < elements.length ; i++ ){
        elements[i].style.removeProperty('transform');
    }
})

function cl(...args){
    console.log(...args);
}

function makeLetters (stroc){
    const frag = document.createDocumentFragment();
    const w = parseInt(window.innerWidth/2-64);
    const h = parseInt(window.innerHeight/2-64);
    let obj;
    [].map.call(stroc, (letter)=>{
        if(letter === '\n' || letter === '\r\n') {
            obj = document.createElement('br');
        } else {
            obj = document.createElement('li');
            obj.innerText = letter;
        }
        obj.style.transform = `translateX(${getRandomInt(-w, w)}px) translateY(${getRandomInt(-h, h)}px)`;
        frag.appendChild(obj);
     });
    return frag;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

animationText.appendChild(makeLetters(`I WOULD LIKE TO SEE YOUR EYES
BUT YOUR HEART IS STILL COLD LIKE ICE
I WOULD LIKE TO TAKE YOUR HAND 
BUT I CAN'T 
WHEN I WAKE UP I SCREAM
I KNOW THIS ONLY DREAM
I WANT TO OPEN MY EYES
BUT I'M AFRAID 
WHAT IF YOU REALLY DON'T REMEMBER US`));
