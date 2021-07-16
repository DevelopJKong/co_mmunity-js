const content = document.querySelector(".content-box");
const container = document.querySelector(".container");
const body = document.querySelector("body");

let img = document.createElement("img");
let div = document.createElement("div");
let btn = container.querySelectorAll("div");





btn[0].querySelector("a").addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(function(){
        content.querySelector("div").style.display = "none";
        div.innerText = "전화중...";
        let divPlace = content.appendChild(div);
    },0);


   setTimeout(function(){
    img.src = "img/mother.png";
    div.innerText = "010-1234-5678";
    let imgPlace = content.appendChild(img);
    let divPlace = content.appendChild(div);
   },2000);
});

btn[1].querySelector("a").addEventListener("click",function(e){
    e.preventDefault();

    setTimeout(function(){
        content.querySelector("div").style.display = "none";
        div.innerText = "전화중...";
        let divPlace = content.appendChild(div);
    },0);


    setTimeout(function(){    
        img.src = "img/father.png";
        div.innerText = "010-2345-6789";
        let imgPlace = content.appendChild(img);
        let divPlace = content.appendChild(div);

    },2000);

});

