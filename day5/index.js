

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
const div = body.querySelector("div");
const section = div.querySelectorAll("section");
const sectionHeight = section[0].scrollHeight;
let count = 0;

div.addEventListener("wheel",function(){
    if(count === 0){
        div.querySelector(".content-first").style.opacity = 1;
        count++;
    }else if(count === 1){
        div.querySelector(".content-second").style.opacity = 1;
        count++;
    }else if(count === 2) {
        div.querySelector(".content-third").style.opacity = 1;
        count++;
    }else if(count === 3){
        div.querySelector(".content-fourth").style.opacity = 1;
        count++;
    } else if(count === 4){
        div.querySelector(".content-fifth").style.opacity = 1;
        count++;
    }
});


//     if( window.scrollY<=sectionHeight){
//         
//         div.querySelector(".content-first").style.opacity = 1;
// 
//     }else if(window.scrollY>sectionHeight && window.scrollY<=sectionHeight*2){
// 
//         div.querySelector(".content-second").style.opacity = 1;
// 
//     }else if(window.scrollY>sectionHeight*2 && window.scrollY<=sectionHeight*3){
// 
//         div.querySelector(".content-third").style.opacity = 1;
// 
//     }else if(window.scrollY>sectionHeight*3 && window.scrollY<=sectionHeight*4){
// 
//         div.querySelector(".content-fourth").style.opacity = 1;
//         
//     } else {
// 
//         div.querySelector(".content-fifth").style.opacity = 1;
//     } 
//})

