'use strict';

/* 
Game Rules

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes/ Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. after that it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his global score . 
	- After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
var diceDOM = document.querySelector('.dice');
//Hide the Dice in the middle
document.querySelector('.dice').style.display = 'none';

//upper score
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';




// EVENT Roll
document.querySelector('.btn--roll').addEventListener('click', function () {
 
  
  //1. Random number
  //Math.floor - is to remove the decimals
  var dice = Math.floor(Math.random() * 6) + 1;
  var currentScore = document.querySelector('#current--' + activePlayer);

  var player = document.querySelector('#current--' + activePlayer);
  //2. Display The result
 
  diceDOM.style.display = 'block';

  //changing the dice from image 1 - 6
  diceDOM.src = 'dice-' + dice + '.png';

  //3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {

    if( scores[activePlayer] >= 100){
      console.log('winner!');
      winner();
    }

    //show the Dice in the middle
    console.log(roundScore);
    diceDOM.style.display = 'block';

    //roundScore = roundScore + dice;
    roundScore += dice;

    //add score
    //so if the active player is the number zero
    document.querySelector(
      '#current--' + activePlayer
    ).textContent = roundScore;



  } else {
   nextPlayer();
  }


});

//HOLD event
document.querySelector('.btn--hold').addEventListener('click', function () {
  //add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector('#score--' + activePlayer).textContent =
    scores[activePlayer];

    if( scores[activePlayer] >= 100){
      console.log('winner!');
      winner();
    }
	

    nextPlayer();
  //Check if the player won the game
});




    //else if the dice is 1
    //1. if active player is === 0 { set active player to 1 : else 0}
    //2. set the round score to 0
    //3. select the current active player then display the roundscore
    //4. after a new round we set the score to 0;
    //5. toggles the background
    //6. Hides the Dice and start again.
function nextPlayer(){

 
  if( scores[activePlayer] >= 100){
    console.log('winner!');
    winner();
  }
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

function winner(){

    diceDOM.style.display = 'none';
    document.getElementById('score--' + activePlayer).textContent = 'WINNER!';
  
}