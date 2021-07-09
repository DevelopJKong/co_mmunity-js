

let numberVar = 1;
let objectVar = {
    number:1
};

let stringVar = "1";
let undefinedVar;
let nullVar = null;
let booleanVar = true;

console.log(typeof numberVar);
console.log(typeof stringVar);
console.log(typeof undefinedVar);
console.log(typeof objectVar);
console.log(typeof booleanVar);
console.log(typeof nullVar);

const body = document.querySelector("body");
const div = body.querySelectorAll("div");
const divHeight = div[0].scrollHeight;

window.addEventListener("scroll",function(){

    if( window.scrollY<=divHeight){
        body.querySelector(".content-first").style.opacity = 1;

    }else if(window.scrollY>divHeight && window.scrollY<=divHeight*2){

        body.querySelector(".content-second").style.opacity = 1;

    }else if(window.scrollY>divHeight*2 && window.scrollY<=divHeight*3){

        body.querySelector(".content-third").style.opacity = 1;

    }else if(window.scrollY>divHeight*3 && window.scrollY<=divHeight*4){

        body.querySelector(".content-fourth").style.opacity = 1;
        
    } else {

        body.querySelector(".content-fifth").style.opacity = 1;
    } 
});

