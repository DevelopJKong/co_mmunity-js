const chatForm = document.querySelector(".main__form");
const chatInput = chatForm.querySelector(".main__form-text")
const chatList = document.querySelector(".main__text-box__list");

const CHAT_LS = "paintChats";

let chats = [];

function saveChatPaint(text){
    localStorage.setItem(CHAT_LS,JSON.stringify(chats));
}

function paintChat(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = chats.length+1;
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    chatList.appendChild(li);
    const chatPaintObj = {
        text:text,
        id:newId
    };
    chats.push(chatPaintObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = chatInput.value;
    paintChat(currentValue);
    chatInput.value="";
}

function loadChatPaint(){
    const loadedChatPaint = localStorage.getItem(CHAT_LS);
    if(loadedChatPaint !==null){
        const parsedChatPaint = JSON.parse(loadedChatPaint);
        parsedChatPaint.forEach(function(chats){
            paintChat(chats.text);
        })
    }
}

function init(){
    loadChatPaint();
    chatForm.addEventListener("submit",handleSubmit);
}

init();