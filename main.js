const word = document.querySelector(".word");
const wrongLetter = document.querySelector("#wrong-text");
const image = document.querySelector(".image");
const resultText = document.querySelector(".text-result");
const resultWord = document.querySelector(".word-result");
const result = document.querySelector(".result");
const resultBtn = document.querySelector(".button");
const model = document.querySelector(".Model");
const missPopup = document.querySelector(".textMiss");
const container = document.querySelector(".contaner");

const popup = document.querySelector("#popup");
const popupTitle = document.querySelector(".popup-title");
const popupPara = document.querySelector(".paragraphe");
const popupClose = document.querySelector(".close-btn");


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
        if((/[a-z]/).test(letter) && ( letter.length < 2)){
            if(randomWord.includes(letter)){
                if((!correctLetters.includes(letter))&&(gameOver)){
                    correctLetters.push(letter);
                    createLetter();
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

let createLetter = ( () => {
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
        resultWord.innerHTML =
        `hidden word : ${randomWord}`;
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

popup.addEventListener('click', () => {
    document.querySelector(".popup-question").style.display = "flex";
});

popupClose.addEventListener('click', ()=>{
    document.querySelector(".popup-question").style.display = "none";
});

popupTitle.innerText = randomWord;

switch(randomWord){
    case "sun": popupPara.innerText = "The Sun is a 4.5 billion-year-old yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system. It's about 93 million miles (150 million kilometers) from Earth and it's our solar system's only star. Without the Sun's energy, life as we know it could not exist on our home planet.";
                break;
    case "mercury" :  popupPara.innerText = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. ... Mercury rotates in a way that is unique in the Solar System.";
                break;
    case "venus" : popupPara.innerText = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. Venus orbits the Sun every 224.7 Earth days.";
                break;
    case "earth" : popupPara.innerText = "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.";
                break;
    case "mars" : popupPara.innerText = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.";
                break;
    case "jupiter" : popupPara.innerText = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. ";
                break;   
    case "saturn" : popupPara.innerText = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.";
                break;    
    case "uranus" : popupPara.innerText = "Uranus is the seventh planet from the Sun in the Solar System. It is an ice giant as Neptune. It is the third largest planet in the solar system. The planet is made of ice, gases and liquid metal.";
                break; 
    case "neptune" : popupPara.innerText = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.";
                break; 
    case "pluton" : popupPara.innerText = "Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930, it was declared to be the ninth planet from the Sun.";
                break; 
    default : popupPara.innerText = ""; 
            break;
}


createLetter();