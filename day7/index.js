const div = document.querySelector(".main");
const text = div.querySelector("h2");


const setTime = setTimeout(()=> console.log('works!'),1000);
const clearTime= setTimeout(()=>clearTimeout(setTime),2000);

const setTimeSecond = setTimeout(()=> console.log('works!'),3000);
const clearTimeSecond= setTimeout(()=>clearTimeout(setTimeSecond),2000);

function handlerTime(){
    const date = new Date();
    text.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   
}
handlerTime();
setInterval(handlerTime,1000);