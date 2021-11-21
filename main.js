const word = document.querySelector(".word");
const wrongLetter = document.querySelector("#wrong-text");
const image = document.querySelector(".image");
const resultText = document.querySelector(".text-result");
const result = document.querySelector(".result");
const resultBtn = document.querySelector(".button");
const model = document.querySelector(".Model");
const missPopup = document.querySelector(".textMiss");
const container = document.querySelector(".contaner");

const SolarSystem=[
    "sun",
    "mercury",
    "venus",
    "earth", 
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluton"
];

const correctLetters = [];
const wrongLetters = [];

let randomWord = SolarSystem[Math.floor(Math.random() * SolarSystem.length)];
console.log(randomWord);
let guessesLeft = 6;
let gameOver=true;

if(gameOver){
    window.addEventListener("keypress",(e)=>{
        let letter = e.key;
        letter = letter.toLowerCase();
        if((/[a-z]/).test(letter)){
            if(randomWord.includes(letter)){
                if((!correctLetters.includes(letter))&&(gameOver)){
                    correctLetters.push(letter);
                    generateWord();
                }
            }else{
                if(!wrongLetters.includes(letter)&&(gameOver)){
                    wrongLetters.push(letter);
                    Play();
                    updateWrongLetter();
                }
            }
        }else{
            missWord();
        }
    });
}

let generateWord = ( () => {
    word.innerHTML = `${randomWord.split("")
    .map(lett =>`<span class="letter">
    ${correctLetters.includes(lett) ? lett : ""}</span>`).join("")}`;
    const wordString = word.innerText.replace(/\n/g, '');
    if(wordString === randomWord){
        result.style.display = "flex";
        resultText.textContent= "Good Job :)";
        resultText.style.color = "chartreuse";
        word.style.color = "chartreuse";
        document.body.style.background = "dimgray";
        document.body.style.opacity = "0.7";
        colorAlert("chartreuse");
        gameOver=false;
    }
});

let Play = ( () => {
    guessesLeft -=1
    if(guessesLeft == 0){
        result.style.display = "flex";
        resultText.textContent = "Failed :(";
        resultText.style.color = "crimson";
        word.style.color = "crimson";
        document.body.style.background = "dimgray";
        document.body.style.opacity = "0.7";
        gameOver=false;
    }
});

let updateWrongLetter = ( () => {
    wrongLetter.innerText = `${wrongLetters.length > 0 ? "Wrong" : ""}
    ${wrongLetters.map(le => `${le}`)}`;
    switch(wrongLetters.length){
        case 1: image.src = "img/11.png";
                colorAlert("crimson");
                break;
        case 2 : image.src = "img/22.png";
                colorAlert("crimson");
                break;
        case 3 : image.src = "img/33.png";
                colorAlert("crimson");
                break;
        case 4 : image.src = "img/44.png";
                colorAlert("crimson");        
                break;
        case 5 : image.src = "img/55.png";
                colorAlert("crimson");        
                break;
        case 6 : image.src = "img/66.png";
                colorAlert("crimson");        
                break;
        default : break;
    }
});

resultBtn.addEventListener('click',() =>{
    location.reload();
});

let colorAlert = ( (color) =>{
    container.style.background = color ;
    setTimeout( () =>{
        container.style.background = null;
    }, 100);
});

let missWord = ( () =>{
    model.style.display = "flex";
    setTimeout( () =>{
        model.style.display = "none";
    }, 2000);
});



generateWord();