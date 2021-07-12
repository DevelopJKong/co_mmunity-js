let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let text = document.querySelector("#text");
let mountainsBehind = document.querySelector("#mountains_behind");
let mountainsFrount = document.querySelector("#mountains_frount");
let header = document.querySelector("header");

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value*0.25+"px";
    moon.style.top = value*1.05+"px";

    mountainsBehind.style.top = value*0.5+"px";
    text.style.marginRight = value*3.7+"px";
    text.style.marginTop = value*1.7+"px";
    btn.style.marginTop = value*1.7+"px";
    header.style.top = value*0.5+"px";
});

let x = 1;
let y = 2;

console.log(`x+y=${x+y}`);
console.log(`x-y=${x-y}`);
console.log(`x*y=${x*y}`);
console.log(`x/y=${x/y}`);