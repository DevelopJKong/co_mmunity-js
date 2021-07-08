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

mainTxt.addEventListener("mouseover",function(){
    mainTxt.innerText = "Thank you😎"
    img.style.opacity = 1;
});

mainTxt.addEventListener("mouseout",function(){
    mainTxt.innerText = "싫으면 마우스를 올려주세요 😥"
    img.style.opacity = 0;
});