const form = document.querySelector(".main__form");
const inputText = form.querySelector("#input-text");
const inputBtn = form.querySelector("#input-btn");

inputBtn.addEventListener("click",function(e){
    e.preventDefault();
    let inputValue = inputText.value;
    console.log(inputValue);
    inputText.value = '';

});