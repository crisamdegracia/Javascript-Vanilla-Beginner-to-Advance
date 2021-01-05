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

var scores, roundScore, activePlayer, gamePlaying;

init();

//gamePlaying - is the state variable. it tells TRUE or FALSE
// STATE variable tell us the condition of a system

var diceDOM = document.querySelector('.dice');



// EVENT Roll
document.querySelector('.btn--roll').addEventListener('click', function () {
 

  //if the game is TRUE or FALSE - default True on init() set to false on winner. 

 if(gamePlaying){

  //1. Random number
  //Math.floor - is to remove the decimals
  var dice = Math.floor(Math.random() * 6) + 1;
  // var currentScore = document.querySelector('#current--' + activePlayer);

  var player = document.querySelector('#current--' + activePlayer);
  //2. Display The result
 
  diceDOM.style.display = 'block';

  //changing the dice from image 1 - 6
  diceDOM.src = 'dice-' + dice + '.png';

  //3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {

    if( scores[activePlayer] >= 100){
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


 }


});

//HOLD event
document.querySelector('.btn--hold').addEventListener('click', function () {

//if the game is TRUE or FALSE - default True on init() set to false on winner. 


if(gamePlaying){

  //add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector('#score--' + activePlayer).textContent =
    scores[activePlayer];




    //Check if the player won the game
    if( scores[activePlayer] >= 20){
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
function nextPlayer(){

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
    document.getElementById('name--' + activePlayer).textContent = 'WINNER!';
    document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    
    
    
    document.querySelector('.btn--new').style.display = 'block';

    // pwede ren itago kung my nanalo na. or we just disabled the buttons when someone wins.
    // document.querySelector('.btn--roll').style.display = 'none';
    // document.querySelector('.btn--hold').style.display = 'none';

    
}

function init(){
// when New Game btn clicked, score reset to zero.
scores = [0,0];
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