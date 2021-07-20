const message = [
{
    request:"would you like to meet your friend?",
    response:"☕: yesss!!"
},
{
    request:"no",
    response:"☕: nooooo i'll block your screen soon"
},
{
    request:"friend",
    response:"☕: thannks a lot!" 
},
{

    request:"sorry",
    response:"☕: don't say like that"
   
}
];
const block = document.querySelector(".block-box");
const blockBtn = block.querySelector("input");

const html = document.querySelector("html");
const body = html.querySelector("body");

const form = document.querySelector(".main__form");
const inputText = form.querySelector("#input-text");
const inputBtn = form.querySelector("#input-btn");
const contentBox = document.querySelector(".main__content-box");
const ul = contentBox.querySelector("ul");
const text = ul.querySelector("li");

const imgWrapper = document.querySelector(".img-baloon__wrapper");
const img = imgWrapper.querySelector("img");


inputText.addEventListener("submit",function(e){
    e.preventDefault();
    text.innerText = '';
    const li = document.createElement("li");
    let inputValue = inputText.value;
    inputText.value = '';
    ul.appendChild(li);
    if(inputValue === message[0].request){
        //would?
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[0].response;
    } else if(inputValue === message[1].request) {
        //sad
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[1].response;
    } else if(inputValue === message[2].request){
        //friend
        imgWrapper.style.opacity = 1;
        ul.querySelector("li").innerText = message[2].response;
    } else {
        //sorry & nothing & something
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[3].response;
    }
});


inputBtn.addEventListener("click",function(e){
    e.preventDefault();
    text.innerText = '';
    const li = document.createElement("li");
    let inputValue = inputText.value;
    inputText.value = '';
    ul.appendChild(li);
    if(inputValue === message[0].request){
        //would?
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[0].response;
    } else if(inputValue === message[1].request) {
        //sad
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[1].response;
        setTimeout(function(){
            block.style.display ="flex";
            ul.querySelector("li").innerText = "☕: don't type 'no' 😒";
        },2000);
    } else if(inputValue === message[2].request){
        //friend
        imgWrapper.style.opacity = 1;
        ul.querySelector("li").innerText = message[2].response;
    } else {
        //sorry & nothing & something
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[3].response;
    }
});

blockBtn.addEventListener("click",function(e){
    e.preventDefault();
    block.style.display = "none";
})