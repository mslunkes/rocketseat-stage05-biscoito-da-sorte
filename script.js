const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnAgain = document.querySelector("#btnAgain");

//Frases
const fortune = [
    "Você é mais forte do que imagina.",
    "O sucesso é uma escolha, escolha ser bem-sucedido.",
    "Não desista, a vitória está logo ali.",
    "Você é capaz de alcançar seus sonhos.",
    "Tudo é possível se você acredita.",
    "Se você quer algo, vá atrás dele.",
    "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Não importa o quão lento você vá, desde que não pare.",
    "A determinação é a chave do sucesso.",
    "Não importa o que aconteça, nunca desista dos seus sonhos.",
    "É em meio a dificuldade que se encontra a oportunidade"
    ]

//Eventos
fortuneCookie.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }

        
    }
)



function handleTryClick(event) {
    toggleScreen()
    pickFortune()
    
}

function handleResetClick() {
toggleScreen()
}


function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}