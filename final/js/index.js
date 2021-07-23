const chat = document.querySelector(".chatbot");
const chatContent = document.querySelector(".chatbot-content");
const text = chatContent.querySelector(".chatbot-content__text");
const closeIcon = text.querySelector("i");
let count = 0;

const chatBox = chatContent.querySelector(".chatbot-content__box")








chat.addEventListener("click",function(){
        chatContent.style.display = "flex";
        chat.style.display = "none";
});

closeIcon.addEventListener("click",function(){
    chatContent.style.display = "none";
    chat.style.display = "flex";
});