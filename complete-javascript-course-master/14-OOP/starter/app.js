// Coding Challenge!  EXPERT LEVEL





/* 
Summary 
1. We create function constructor
2. We create new objects - eto ung value bale ng mga argument sa function constructor na Question() 
    2a. tapos nilagay natin ung mga new object sa array
      2aa.  var questions = [_q1, _q2, _q3];
    
    2b.then we create random number para maloop ung mga new objects for random questions. then base on the length ng answer e maiconsole.log natin lahat ng answers
        2ba. na mkikita mo sa prototype na gnawa  natin on prototype.displayQuestion(). 
    2c. tapos i console.log natin ung lahat ng answer. pero xempre naconsole.log na natin ung question
3. then we create a variable answer - which is the prompt() - that will hold the answer
    3a. from here, meron na value ung argument na answer from the Question(question,answer,correct) function constructor.
    3b. so ngayon pwede na tayong gumawa ng function prototype.checkAnswer(ans, callback)
    3c. so to call the checkAnswer()
      3ca. so the prototype.checkAnswer(ans) accepts an argument - which is the var answer = prompt()
      3cb. which will tell us if the answer on the console.log is correct on wrong. 

4. Now we create a function nextQuestion()
    4a. it will evaluate if the user will enter the answer or exit.
    4b. inside it, is the 3 essential part of the game which is the
    4c. random number, the answer, and the displayQuestion();
    4d. and also if(exit) if the user did not type exit it will call the protoype.checkAnswer()
      4da. the prototype.checkAnswer() then will console.log the answer. 
      4db. after calling the prototype.checkAnswer() it will run again the nextQuestion();

5. EXPERT . we then create a function closure score() to hold and increase the score of the user when
    5a. when the answer is correct and do nothing when the answer is wrong.
    5b. then console.log() the score on 
    5c. questions[n].checkAnswer(parseInt(answer), keepScore);
      5ca. here we add score() "keepScore" as an argument sa checkAnswer. para masala dun sa check answer prototype.
      5cb. we then use it there as a callback
      5cc. so if the this.correct === correct ( which is the 3rd argument of the object)
        5cca.  var _q1 = new Question('Is Javascript the coolest programming language in the world?',['Yes', 'No'], 0 );  <<-- zero is the 3rd. or the correct answer
      5cd. then the callback(true) or keepScore(true) or score()(true);   <- that how it reads
    5d. then we we call the prototype.displayScore   to display  on line 99 this.displayScore(sc);

*/




//-----------------------------1-----------------------------

// <-- IIFE tp make our code private and does not interfere other code
// so if the programmers code has a variable question - our code will not interfere because its private
(function () {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }
//-----------------------------1-----------------------------




  // create a function using prototype to display a question
  // so we can use it below the execution
  // ---2b
  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ': ' + this.answer[i]);
    }
  };
//ung callback dito is ung - score() na declared sa baba
  Question.prototype.checkAnswer = function (ans, callback) {

    //var score
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');

      //remember that this is just a keepScore function
      // so we pass in true
      //becoz we know that here, when that answer is equal to the correct answer
          //- the answer will be correct 
      sc = callback(true);


    } else {
      console.log('Wrong answer. Please try again!');

      //false is becoz to not update the score
      sc = callback(false);
    }

    //so after creating prototype below, the displayScore
    //we now use it here, after the correct or wrong answer
    //if the score will update or not it will display here
    this.displayScore(sc);
  };


Question.prototype.displayScore = function(score){
console.log('your current score is: ' + score);
console.log('----------------------');

}

//-----------------------------2-----------------------------


  //create new objects using constructor
  var _q1 = new Question(
    'Is Javascript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  );

  var _q2 = new Question(
    "What is the name of the course's teacher?",
    ['John', 'Michael', 'Jonas'],
    2
  );

  var _q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'fun', 'Tedious'],
    2
  );

  //store all the question in an array
  //so we can loop
  var questions = [_q1, _q2, _q3];

//-----------------------------2-----------------------------


  // we create a closure function. which returns a function
	function score(){
		var sc = 0;

		return function(correct){

			if(correct){
				sc++;
			}
			return sc; 
		}
	}

  // we have always access to the variable of score()
  // so we can call it in the prototype and pass an argument which is like this score()(true)
var keepScore = score();


  //we create here a function so we can use it over and over again
  //expert level challenge

  function nextQuestion() {
    // create a random number from their question length
    // so we can randomized the question

    var n = Math.floor(Math.random() * questions.length) ;

    //meron tayong access sa displayQuestion kasi gumawa tayo ng prototype ung the constructor
    //Summary code ---2b 2c
    questions[n].displayQuestion();


//-----------------------------3-----------------------------
    //asking answer from the user, when they input on the prompt
    //no parseInt dito kasi pwede rin syang mag enter ng exit
    //placed here, so after they answered on the prompt the value evaluated
    var answer = prompt('Please enter the correct answer.');
//-----------------------------3-----------------------------

    

    //to stop the game
    //if - we only want to call this question
    //if the input from the user is not exit
    if (answer != 'exit') {

      //my parsInt dito kasi dito natin need ung number
      //keepscore - 
      questions[n].checkAnswer(parseInt(answer), keepScore);
     

      nextQuestion();
    }
  }

  nextQuestion();
})();
