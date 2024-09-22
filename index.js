const header = document.querySelector("h1");
const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");
const button = document.getElementsByTagName("button")[0];
const p1name = document.getElementById("p1name");
const p2name = document.getElementById("p2name");
const input1 = document.getElementById("p1input");
const input2 = document.getElementById("p2input");

function rollDice() {
    setPlayerNames()
    
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute("src", "./images/dice" + number1 + ".png");
    dice2.setAttribute("src", "./images/dice" + number2 + ".png");

    if (number1 > number2) {
        header.innerHTML = "Player 1 wins!"
    } else if (number2 > number1) {
        header.innerHTML = "Player 2 wins!"
    } else {
        header.innerHTML = "Draw!"
    }

    button.innerHTML = "Roll again!"
}

function setPlayerNames() {
    if (input1.value != "") p1name.innerHTML = input1.value;
    if (input2.value != "") p2name.innerHTML = input2.value;
}

button.addEventListener("click", rollDice)