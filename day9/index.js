const movie = [
    
{
    name : "Flipped",
    text : "누구나 일생에 한번은 만난다는 무지개빛 첫사랑!옆집 소년소녀의 귀엽고 설레는 반전 로맨스!새로 이사 온 미소년 브라이스를 보고 첫눈에 사랑을 직감한 7살 소녀 줄리. 솔직하고 용감한 줄리는 자신의 마음을 적극적으로 표현하지만 브라이스는 그런 줄리가 마냥 부담스럽다. 줄리의 러브빔을 요리조리 피해 다니기를 6년! 브라이스는 줄리에게 받은 달걀을 쓰레기통에 버리다 들키고, 화가 난 줄리는 그날부터 브라이스를 피하기 시작한다. 하지만 성가신 그녀가 사라지자 브라이스는 오히려 전 같지 않게 줄리가 신경 쓰이기 시작하는데…"
},
{
    name : "AboutTime",
    text : "모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다.바로 시간을 되돌릴 수 있는 능력이 있다는 것!그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수 는 없지만, 여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다. 그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와 그녀의 사랑이 완벽해 질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기 나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?"
},
{
    name : "당신 거기 있어줄래요",
    text : "2015년, 우연히 과거로 돌아갈 수 있는 10개의 알약을 얻게 된 수현(김윤석). 1985년으로 돌아가 30년 전의 자신(변요한)과 만나게 되고, 10번의 기회를 통해 평생 후회하고 있던 과거의 한 사건을 바꾸려 하는데…"
},
{
    name : "17again",
    text : "농구스타로 찬란한 10대를 보냈으나 원치않은 임신으로 별 볼일 없는 30대가 된 마이크가 17살로 다시 돌아가 인생에서 두 번째 기회를 가지게 되는데.."
}

];

const slideShow = document.querySelector("#slideShow");
const slides = slideShow.getElementsByTagName("video");
const content = document.querySelector(".content");
const bannerText = content.querySelector(".bannerText");
const div = bannerText.querySelectorAll("div");
div[0].querySelector("h2").innerText = movie[0].name;
div[0].querySelector("p").innerText = movie[0].text;




let index = 0;

function nextSlide(){
    slides[index].classList.remove("active");
     index =(index+1)% slides.length;
     slides[index].classList.add("active");
     div[index].querySelector("h2").innerText = movie[index].name;
     div[index].querySelector("p").innerText = movie[index].text;
 }





function prevSlide(){
    slides[index].classList.remove("active");
    index =(index-1+slides.length)% slides.length;
    slides[index].classList.add("active");
    div[index].querySelector("h2").innerText = movie[index].name;
    div[index].querySelector("p").innerText = movie[index].text;
}


const slideShowText = document.querySelector("#slideShowText");
const slidesText = slideShowText.getElementsByTagName("div");

let i = 0;

function nextSlideText(){
    slidesText[i].classList.remove("active");
    i =(i+1)% slidesText.length;
    slidesText[i].classList.add("active");
    div[i].querySelector("h2").innerText = movie[i].name;
     div[i].querySelector("p").innerText = movie[i].text;
}

function prevSlideText(){
    slidesText[i].classList.remove("active");
    i =(i-1+slidesText.length)% slidesText.length;
    slidesText[i].classList.add("active");
    div[i].querySelector("h2").innerText = movie[i].name;
    div[i].querySelector("p").innerText = movie[i].text;
}

function toggleMenu(){
    const menu = document.querySelector(".menuIcon");
    const navbar = document.querySelector("#navbar");
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
}