"use strict";

// selecting score elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score1El = document.querySelector("#score--0");
const score2El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");
const btnNewGameEl = document.querySelector(".btn--new");

//starting conditions

let score;
let currentScore;
let activePlayer;
let isPlaying;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score1El.textContent = 0;
  score2El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

//function to switch the player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling a dice and generate random number
btnRollEl.addEventListener("click", function () {
  if (isPlaying) {
    //   1. generate a random number
    const number = Math.trunc(Math.random() * 6 + 1);
    //   2. display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${number}.png`;

    //   switch (number) {
    //     case 1:
    //       diceEl.src = 'dice-1.png';
    //       break;
    //     case 2:
    //       diceEl.src = 'dice-2.png';
    //       break;
    //     case 3:
    //       diceEl.src = 'dice-3.png';
    //       break;
    //     case 4:
    //       diceEl.src = 'dice-4.png';
    //       break;
    //     case 5:
    //       diceEl.src = 'dice-5.png';
    //       break;
    //     case 6:
    //       diceEl.src = 'dice-6.png';
    //       break;
    //   }

    //   3.
    if (number != 1) {
      // add dice number to current score
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener("click", function () {
  if (isPlaying) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2. check if player's is >= 100
    if (score[activePlayer] >= 10) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    }
    // finisht the game

    // switch to the next player
    switchPlayer();
  }
});

//resetting the game
btnNewGameEl.addEventListener("click", init);
