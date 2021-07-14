const div = document.querySelector(".main");
const text = div.querySelector("h2");
const restart = document.querySelector("#restart");
const stop = document.querySelector("#stop");
const mainP = div.querySelector("p");
let stopCount = 0;
let startCount = 0;
let arr = [];

function handlerTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    text.innerText = `${hours}:${minutes}:${seconds}`;
   
}

handlerTime();
let repeat = setInterval(handlerTime,1000);
setTimeout(()=>clearTimeout(repeat),2000);

restart.addEventListener("click",function(e){
    e.preventDefault();
    repeat = setInterval(handlerTime,1000);
    startCount++;
    if(startCount <10){
        mainP.innerText = `${startCount}번 클릭하셨네요!`;
        arr.push(startCount);
        for(let i = 0;  i < arr.length; i++){
            console.log(arr[i]);
        }
    } else if( startCount > 10){
        mainP.innerText = `멈춰!`;
        startCount = 0;
        arr.length = 0;
    
    }

});
stop.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>clearTimeout(repeat),0);
    stopCount++;
    if(stopCount <10){
        mainP.innerText = `${stopCount}번 클릭하셨네요!`;
    } else if( stopCount > 10){
        mainP.innerText = `멈춰!`;
        stopCount = 0;
    }

});

