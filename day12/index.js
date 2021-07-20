const message = [
{
    request:"would you like to meet your friend?",
    response:"☕: yesss!!"
},
{
    request:"life is alone",
    response:"☕: nooooo i'll stop this app soon"
},
{
    request:"sorry",
    response:"☕: don't say like that"
}

];




const form = document.querySelector(".main__form");
const inputText = form.querySelector("#input-text");
const inputBtn = form.querySelector("#input-btn");

const contentBox = document.querySelector(".main__content-box");
const ul = contentBox.querySelector("ul");
const text = ul.querySelector("li");
const html = document.querySelector("html");
const body = html.querySelector("body");

inputBtn.addEventListener("click",function(e){
    e.preventDefault();
    text.innerText = '';
    const li = document.createElement("li");
    let inputValue = inputText.value;
    console.log(inputValue);
    inputText.value = '';
    ul.appendChild(li);
    if(inputValue === message[0].request){
        ul.querySelector("li").innerText = message[0].response;
    } else if(inputValue === message[1].request) {
        ul.querySelector("li").innerText = message[1].response;
      
    } else {
        ul.querySelector("li").innerText = message[2].response;
    }
});