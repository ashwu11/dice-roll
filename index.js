const header = document.getElementsByTagName("h1")[0];
const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");

const number1 = Math.floor(Math.random() * 6) + 1;
const number2 = Math.floor(Math.random() * 6) + 1;

dice1.setAttribute("src", "./images/dice" + number1 + ".png");
dice2.setAttribute("src", "./images/dice" + number2 + ".png");

if (number1 > number2) {
    header.innerHTML = "Player 1 wins!"
} else if (number2 > number1) {
    header.innerHTML = "Player 2 wins!"
} else {
    header.innerHTML = "Draw!"
}