const emojis=[
    "🐱‍🏍",
    "🐱‍🏍",
    "🐱‍👤",
    "🐱‍👤",
    "👹",
    "👹",
    "👽",
    "👽",
    "👾",
    "👾",
    "🤖",
    "🤖",
    "☠",
    "☠",
    "👻",
    "👻"
];
let openCards = [];
let seconds = 0;
let minutes = 0;
let timerInterval;
let finalTime = '';

let randomEmojis= emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));
for(let i=0;i<emojis.length;i++){
    let box=document.createElement("div");
    box.className="item";
    box.innerHTML= randomEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
function handleClick(){
    if(openCards.length < 2 ){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length ==2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch (){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards=[];
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        stopTimer();
        alert(`Você Venceu ! Seu tempo foi: ${finalTime}`);
        
    }
}



function startTimer() {
    const timerElement = document.getElementById('timer');

    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerElement.textContent = `Tempo: ${formattedTime}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    finalTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
startTimer();
