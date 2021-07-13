const div = document.querySelector(".main");
const text = div.querySelector("h2");
const restart = document.querySelector("#restart");
const stop = document.querySelector("#stop");



function handlerTime(){
    const date = new Date();
    text.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   
}

handlerTime();
let repeat = setInterval(handlerTime,1000);
setTimeout(()=>clearTimeout(repeat),3000);

restart.addEventListener("click",function(e){
    e.preventDefault();
    repeat = setInterval(handlerTime,1000);
});
stop.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>clearTimeout(repeat),0);
});

