const marker = document.querySelector("#maker");
const item = document.querySelectorAll("ul li a");
const main = document.querySelector(".main__wrapper");
const text = main.querySelector("span");
const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
const liText = li[0].querySelector("a");
const resetBtn = li[1].querySelector("a");
const background = document.querySelector("body");
let count = 0;

function indicator(e){
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth +'px';
}

item.forEach(link =>{
    link.addEventListener("mousemove",(e)=> {
        indicator(e.target);
    })
});

liText.addEventListener("click",function(e){
    
    e.preventDefault();

    if(count === 0){
        text.innerText = "커"
        count++;
        background.style.backgroundImage ="none";
    }else if(count === 1){
        text.innerText = "커피"
        count++;
    }else if(count === 2){
        text.innerText = "커피볶"
        count++;
    }else if(count === 3 ){
        text.innerText = "커피볶는"
        count++;
    }else if(count === 4){
        text.innerText = "커피볶는정"
        count++;
    }else if(count === 5){
        text.innerText = "커피볶는정콩"
        count++;
    }else{
        text.innerText = "완성!😎"
        background.style.backgroundImage = "url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')";
        background.style.backgroundSize = "cover";
        count = 0;
    }
});

resetBtn.addEventListener("click",function(e){
    e.preventDefault();
    text.innerText ="리셋🙄";
    background.style.backgroundImage ="none";
    count = 0;
});


