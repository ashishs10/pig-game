'use strict';

// selecting score elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');

//starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//rolling a dice and generate random number
btnRollEl.addEventListener('click', function () {
  //   1. generate a random number
  const number = Math.trunc(Math.random() * 6 + 1);
  //   2. display the dice
  diceEl.classList.remove('hidden');
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
