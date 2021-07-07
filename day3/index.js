const form = document.querySelector("form");
const inputFirst = form.querySelector("#input-first");
const inputSecond = form.querySelector("#input-second");
const inputThird = form.querySelector("#input-third");
const mainBox = document.querySelector(".main-box");
const ul = mainBox.querySelector("ul");
const li = ul.querySelectorAll("li");
const body = document.querySelector("body");
let count = 1;

function handlerFirstClickEvent(e){
    e.preventDefault();
    li[0].innerText = "모처럼이니";
}

function handlerSecondClickEvent(e){
    e.preventDefault();
    li[1].innerText = "각잡고 열심히 하면";
}

function handlerThirdClickEvent(e){
    e.preventDefault();
    li[2].innerText = "코린이 탈출이다";
    body.style.backgroundImage = "url('https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif')";
    // if(count%2 === 1){
    // e.preventDefault();
    // li[2].innerText = "코린이 탈출이다";
    // body.style.backgroundImage = "url('https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif')";
    //     count++;
    // } else {
    //     for(let i = 0; i < li.length; i++){
    //         li[i].innerText = "";
    //     }
    //     body.style.backgroundImage = "none";
    //     count++;
    // } 
}


inputFirst.addEventListener("click",handlerFirstClickEvent);
inputSecond.addEventListener("click",handlerSecondClickEvent);
inputThird.addEventListener("click",handlerThirdClickEvent);