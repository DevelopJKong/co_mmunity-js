const number = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9,
    ten : 10
};

for(let key in number){
    console.log(key);
}

for(let value in number){
    value = number[value];
    console.log(value);
}

const mainBox = document.querySelector(".main-box");
const mainTxt = mainBox.querySelector(".main-box__txt");
const img = mainBox.querySelector("div");
const btnWrapper = mainBox.querySelector(".console-number-up");
const btn = btnWrapper.querySelector("button");
const consoleNumber = mainBox.querySelector(".console__number-box");
const consoleCount = consoleNumber.querySelector("div");
let count = 0;

function handlerClickNumberUp(){
    consoleCount.innerText = count;
    count++
    console.log(count);
}

mainTxt.addEventListener("mouseover",function(){
    mainTxt.innerText = "Thank you😎"
    img.style.opacity = 1;
});

mainTxt.addEventListener("mouseout",function(){
    mainTxt.innerText = "싫으면 마우스를 올려주세요 😥"
    img.style.opacity = 0;
});

btn.addEventListener("mouseover",()=> consoleNumber.style.opacity = 1);

btn.addEventListener("mouseout",function(){
     consoleNumber.style.opacity = 0;
     count=0;
     consoleCount.innerText = "🍺문제를 제대로 봐야겠습니다";
     
});

btn.addEventListener("click",handlerClickNumberUp);
