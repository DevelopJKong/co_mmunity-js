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
    request:"good bye",
    response:"see you again"
},
{
    request:"report",
    response:"☕: here" 
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

const report = document.querySelector(".pre__report");
const reportContent = report.querySelectorAll(".report-flex");

inputText.addEventListener("submit",function(e){
    e.preventDefault();
    text.innerText = '';
    const li = document.createElement("li");
    let inputValue = inputText.value;
    inputText.value = '';
    ul.appendChild(li);
    if(inputValue === message[0].request){
        //would?
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[0].response;
    } else if(inputValue === message[1].request) {
        //sad
        report.style.display = "none";
        ul.querySelector("li").innerText = message[1].response;
        setTimeout(function(){
            block.style.display ="flex";
            ul.querySelector("li").innerText = "☕: don't type 'no' 😒";
        },2000);
    } else if(inputValue === message[2].request){
        //friend
        report.style.display = "none";
        imgWrapper.style.opacity = 1;
        ul.querySelector("li").innerText = message[2].response;
    } else if(inputValue === message[3].request){
        //good bye
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[3].response;
    } else if(inputValue === message[4].request){
        //report
        report.style.display = "grid";
      
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[4].response;
    } else if(inputValue === message[5].request){
        //sorry & nothing & something
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[5].response;
    } else {
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        let typewriter = new Typewriter(ul.querySelector("li"),{
            loop:false,
        });
        typewriter
        .typeString("coffee cup don't catch your point.")
        .pauseFor(1300)
        .deleteAll()
        .typeString("please type again. thanks 😎")
        .pauseFor(2500)
        .start();
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
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[0].response;
    } else if(inputValue === message[1].request) {
        //sad
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[1].response;
        setTimeout(function(){
            
            block.style.display ="flex";
            ul.querySelector("li").innerText = "☕: don't type 'no' 😒";
        },2000);
    } else if(inputValue === message[2].request){
        //friend
        report.style.display = "none";
        imgWrapper.style.opacity = 1;
        ul.querySelector("li").innerText = message[2].response;
    } else if(inputValue === message[3].request){
        //good bye
        report.style.display = "none";
        
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[3].response;
    } else if(inputValue === message[4].request){
        
        report.style.display = "grid";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[4].response;
    }else if(inputValue === message[5].request){
        //sorry & nothing & something
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        ul.querySelector("li").innerText = message[5].response;
    }else {
        report.style.display = "none";
        imgWrapper.style.opacity = 0;
        let typewriter = new Typewriter(ul.querySelector("li"), {
            loop: false
          });
        typewriter
        .typeString("coffee cup don't catch your point.")
        .pauseFor(1300)
        .deleteAll()
        .typeString("please type again. thanks 😎")
        .pauseFor(2500)
        .start();
    }
    
});

blockBtn.addEventListener("click",function(e){
    e.preventDefault();
    block.style.display = "none";
})