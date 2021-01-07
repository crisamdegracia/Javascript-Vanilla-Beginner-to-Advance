'use strict';

var scores, roundScore, activePlayer, gamePlaying;

init();

//once the roll function returns is mawawala ung value ng dice
// kung dun lang sya nadeclare sa  loob. so kaya ginawang GLOBAL var.
var lastDice;

//gamePlaying - is the state variable. it tells TRUE or FALSE
// STATE variable tell us the condition of a system

var diceDOM = document.querySelector('.dice');
var winningScore;
var diceA = document.getElementById('dice--1');
var diceB = document.getElementById('dice--2');
// EVENT Roll
document.querySelector('.btn--roll').addEventListener('click', function () {
  //if the game is TRUE or FALSE - default True on init() set to false on winner.
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceA = document.getElementById('dice--1');
    var diceB = document.getElementById('dice--2');
    diceA.style.display = 'block';
    diceB.style.display = 'block';

    //changing the dice from image 1 - 6
    diceA.src = 'dice-' + dice1 + '.png';
    diceB.src = 'dice-' + dice2 + '.png';

    //1. Random number
    //Math.floor - is to remove the decimals
    var dice = Math.floor(Math.random() * 6) + 1;
    // var currentScore = document.querySelector('#current--' + activePlayer);

    var player = document.querySelector('#current--' + activePlayer);
    //2. Display The result

    var input = document.querySelector('.final-score').value;

    if (input) {
      winningScore = input;
      console.log('LEGO');
    } else {
      winningScore = 20;
      console.log('awtsu');
    }

    //player loses when dice were 6 ng mag kasunod
    if (lastDice === 6 && dice === 6) {
      // reset score
      // then go to next player
      scores[activePlayer] = 0;
      document.querySelector('#score--' + activePlayer).textContent = '0';
      console.log('2 consecutive 6!');
      nextPlayer();
    }

    //3. Update the round score IF the rolled number was NOT a 1
    else if (dice1 !== 1 && dice2 !== 1) {
      // if (scores[activePlayer] >= winningScore) {
      //   winner();
      // }

      //show the Dice in the middle

      diceDOM.style.display = 'block';

      //roundScore = roundScore + dice1 + dice2;
      roundScore += dice1 + dice2;

      //add score
      //so if the active player is the number zero
      document.querySelector(
        '#current--' + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }

    /* 
  kaya sya andito sa bandang huli because
  kapag gumana na lahat sa taas when the button clicked e. 
  ung huling value masstore sa previousRoll then sa next pindot meron
  ng pag gagayahan ng value.
  */

    lastDice = dice;
  }
});

//HOLD event
document.querySelector('.btn--hold').addEventListener('click', function () {
  //if the game is TRUE or FALSE - default True on init() set to false on winner.

  if (gamePlaying) {
    //add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];

    //Check if the player won the game
    if (scores[activePlayer] >= winningScore) {
      winner();

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', init);

//else if the dice is 1
//1. if active player is === 0 { set active player to 1 : else 0}
//2. set the round score to 0
//3. select the current active player then display the roundscore
//4. after a new round we set the score to 0;
//5. toggles the background
//6. Hides the Dice and start again.
function nextPlayer() {
  //1.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //2.
  roundScore = 0;

  //3.
  document.querySelector('#current--' + activePlayer).textContent = roundScore;

  //4.
  document.getElementById('current--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';

  //.5
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--0').classList.toggle('player--active');

  //6.
  diceDOM.style.display = 'none';
}

function winner() {

  // when win, dice will be hidden
  diceA.style.display = 'none';
  diceB.style.display = 'none';

  document.getElementById('name--' + activePlayer).textContent = 'WINNER!';
  document
    .querySelector('.player--' + activePlayer)
    .classList.add('player--winner');
  document
    .querySelector('.player--' + activePlayer)
    .classList.remove('player--active');

  document.querySelector('.btn--new').style.display = 'block';

  // pwede ren itago kung my nanalo na. or we just disabled the buttons when someone wins.
  // document.querySelector('.btn--roll').style.display = 'none';
  // document.querySelector('.btn--hold').style.display = 'none';
}

function init() {
  // when New Game btn clicked, score reset to zero.
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  //
  document.querySelector('.btn--new').style.display = 'none';
  document.querySelector('.btn--roll').style.display = 'block';
  document.querySelector('.btn--hold').style.display = 'block';

  //upper score
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  //lower score
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  //
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
}
