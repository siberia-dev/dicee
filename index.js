// let theWinner
// let randomNumber1 = Math.floor(Math.random() * 6 + 1);
// let randomNumber2 = Math.floor(Math.random() * 6 + 1);
// if (randomNumber1 === 1) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) { document.querySelector("#dice-image1").setAttribute("src", "images/dice2.png");

// } else if (randomNumber1 === 3) { document.querySelector("#dice-image1").setAttribute("src", "images/dice3.png");

// } else if (randomNumber1 === 4) { document.querySelector("#dice-image1").setAttribute("src", "images/dice4.png");

// } else if (randomNumber1 === 5) { document.querySelector("#dice-image1").setAttribute("src", "images/dice5.png");

// } else if (randomNumber1 === 6) { document.querySelector("#dice-image1").setAttribute("src", "images/dice6.png");

// }


// console.log(randomNumber1 + " and " + randomNumber2);

// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
// const imageUrls = [
//     "images/dice1.png",
//     "images/dice2.png",
//     "images/dice3.png",
//     "images/dice4.png",
//     "images/dice5.png",
//     "images/dice6.png"
// ]

// document.querySelector("#dice-image1").setAttribute("src", imageUrls[randomNumber1 - 1]);


// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// if (randomNumber1 === 1) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice5.png");
// } else if (randomNumber1 === 6) {
//     document.querySelector("#dice-image1").setAttribute("src", "images/dice6.png");
// }

// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// let diceImageElement1 = document.querySelector("dice-image1");
// diceImageElement1.setAttribute("src", 'images/dice${randomNumber1}.png');

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
const imageUrls1 = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]
document.querySelector("#dice-image1").setAttribute("src", imageUrls1[randomNumber1 - 1]);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("#dice-image2").setAttribute("src", imageUrls1[randomNumber2 - 1]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = '<img src="images/winner.png" alt="winner image" class="red-flag"> Player 1 Wins!!!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins!!! <img src="images/winner.png" alt="winner image" class="red-flag">';
}  else {
    document.querySelector("h1").innerHTML = 'DRAW!!!<p>TRY AGAIN</p>'; 
}      



// let resultMessage;
// if (randomNumber1 > randomNumber2) {
//     resultMessage = "Player 1 Wins!!!";
// } else if (randomNumber1 < randomNumber2) {
//     resultMessage = "Player 2 Wins!!!";
// } else {
//     resultMessage = "DRAW!!!";
// }

// document.querySelector("h1").innerHTML = `<img src="images/winner.png" alt="winner image" class="red-flag">${resultMessage}`