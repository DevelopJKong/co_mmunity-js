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
    text.style.marginRight = value*4.55+"px";
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


let sec = document.querySelector(".sec");
let secDiv = sec.querySelector(".sec__text");
let secImg = sec.querySelector(".sec__img");

secDiv.addEventListener("mouseover",function(){
    secDiv.innerText = "Thank you! π";
    secDiv.style.color = "#fdcb6e";
    secImg.style.opacity = 1;
});

secDiv.addEventListener("mouseout",function(){
    secDiv.innerText = "μ½μμμ μΆλ ₯ ν΄ λ³΄μΈμπ μλλ©΄ μΌλ¨ μ¬λ €λ³΄μΈμ λ§μ°μ€π";
    secDiv.style.color = "white";
    secImg.style.opacity = 0;
});



