const message = [
    {
        request:"day1",
        response:"<span>맨 아래 day1 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day1/index.html'>day1을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>"
    },
    {
        request:"day2",
        response:"<span>맨 아래 day2 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day2/index.html'>day2을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>"
    },
    {
        request:"day3",
        response:"<span>맨 아래 day3 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day1/index.html'>day3을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    
    {
        request:"day4",
        response:"<span>맨 아래 day4 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day4/index.html'>day4을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day5",
        response:"<span>맨 아래 day5 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day5/index.html'>day5을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>"  
    },
    {
        request:"day6",
        response:"<span>맨 아래 day6 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day6/index.html'>day6을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day7",
        response:"<span>맨 아래 day7 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day7/index.html'>day7을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day8",
        response:"<span>맨 아래 day8 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day8/index.html'>day8을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    
    {
        request:"day9",
        response:"<span>맨 아래 day8 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day9/index.html'>day9을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day10",
        response:"<span>맨 아래 day10 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day1/index.html'>day10을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day11",
        response:"<span>맨 아래 day11 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day11/index.html'>day11을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day12",
        response:"<span>맨 아래 day12 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day12/index.html'>day12을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day13",
        response:"<span>맨 아래 day13 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day13/index.html'>day13을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    
    {
        request:"day14",
        response:"<span>맨 아래 day14 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/day14/index.html'>day14을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    },
    {
        request:"day15",
        response:"<span>맨 아래 day15 깃허브 링크를 통해 볼수있어요!</span>"+
        "<span><a href='https://developjkong.github.io/co_mmunity-js/final/index.html'>day15을 클릭해서 보세요<i class='fab fa-github-alt'></i></a></span>" 
    }
    
    
    ];



const chat = document.querySelector(".chatbot");
const chatContent = document.querySelector(".chatbot-content");
const text = chatContent.querySelector(".chatbot-content__text");
const closeIcon = text.querySelector("i");
let count = 0;

const chatBox = chatContent.querySelector(".chatbot-content__box")
const chatRes = chatBox.querySelector(".chatbot__response");
const chatUl = chatRes.querySelector("ul");
const chatLi = chatUl.querySelector("li");

const chatForm = chatContent.querySelector("form");
const chatInput = chatForm.querySelector("input");
const chatBtn = chatForm.querySelector("#chat-btn");


chat.addEventListener("click",function(e){
    e.preventDefault();
        chatContent.style.display = "flex";
        chat.style.display = "none";
});

closeIcon.addEventListener("click",function(e){
    e.preventDefault();
    chatContent.style.display = "none";
    chat.style.display = "flex";
});

chatInput.addEventListener("submit",function(e){

    e.preventDefault();
    let value = chatInput.value;
    chatLi.innerHTML= "<span>day1~day15 사이를</span> <span>입력해주세요 😎</span>" +
    "<span style='font-size:15px'>더 좋은 답변을 해드릴게요 😘</span>"
    for(let i = 0; i<message.length; i++){
        if(value === message[i].request){
            chatLi.innerHTML =  message[i].response;
            chatInput.value = "";
            return;
        }
    }

});


chatBtn.addEventListener("click",function(e){
    e.preventDefault();
    let value = chatInput.value;
    chatLi.innerHTML= "<span>day1~day15 사이를</span> <span>입력해주세요 😎</span>" +
    "<span style='font-size:15px'>더 좋은 답변을 해드릴게요 😘</span>"
    chatInput.value = "";
    for(let i = 0; i<message.length; i++){
        if(value === message[i].request){
            chatLi.innerHTML =  message[i].response;
            chatInput.value = "";
            return;
            
    
    } 

 
}

});