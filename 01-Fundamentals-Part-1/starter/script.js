// BMI = mass / height^2 = mass / (height * height)
// CHALLENGE #1
// var markMass = 67,
// 	markHeight = 2.4,
// 	johnMass = 69,
// 	johnHeight = 2.7,

// 	markBMI = markMass / (markHeight ** 2);
// 	johnBMI = johnMass / (markHeight ** 2);

// 	isHighier = markBMI > johnBMI;

// 	console.log("Mark's BMI is : " + markBMI)
// 	console.log("Johns's BMI is : " + johnBMI )
// 	console.log("---------------------------------------------");
// 	console.log( "Is Mark's BMI higher than John's? " + isHighier )

/* 

BREAK - we use break so after evaluating 1 case with true value,
	- it will stop evaluating others
DEFAULT - if nothing is correct. the default will execute

const day = 'friday';

	switch (day) {
	  case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	  case 'tuesday':
		console.log('Prepare theory videos');
		break;
	  case 'wednesday':
	  case 'thursday':
		console.log('Write code examples');
		break;
	  case 'friday':
		console.log('Record videos');
		break;
	  case 'saturday':
	  case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	  default:
		console.log('Not a valid day!');
	}
	
	if (day === 'monday') {
	  console.log('Plan course structure');
	  console.log('Go to coding meetup');
	} else if (day === 'tuesday') {
	  console.log('Prepare theory videos');
	} else if (day === 'wednesday' || day === 'thursday') {
	  console.log('Write code examples');
	} else if (day === 'friday') {
	  console.log('Record videos');
	} else if (day === 'saturday' || day === 'sunday') {
	  console.log('Enjoy the weekend :D');
	} else {
	  console.log('Not a valid day!');
	}
	


 */

// CHALLENGE #2

//  var john = (89 + 120 + 103) / 3;
//  var mike = (116 + 94 + 123) / 3;

// //   john > mike  ?  console.log( 'Team John has an average score: ' + john + 'and a winner!'  ) : console.log('Team Mike has an average score: ' + mike + ' and a winner!');
// //   john === mike ? console.log(' Too close! ') : console.log('It\'s a draw! ');

// 	console.log ('SCORE: John - ' + john + '  SCORE : Mike ' + mike);
//   if( john > mike ){
// 	console.log( 'Team John has an average score: ' + john + ' and a winner!'  )
//   }
//   else if ( john < mike ){
// 	console.log( 'Team Mike has an average score: ' + mike + ' and a winner!'  )
//   }
//   else if (john === mike ){
// 	  console.log(' It\'s a draw!');
//   }
//   else {
// 	  console.log( 'nobody knows why whe\'re here');
//   }

// var WhatIDo = function(job, firstName){
// 	switch(job){
// 		case 'teacher':
// 			return firstName + ' teaches kids to code';
// 		case 'driver':
// 			return firstName + ' drives a cab in Lisbon'
// 		case 'designer':
// 			return firstName + ' designs beautiful websites';
// 		default:
// 		return firstName + ' does something else';

// 	}
// }

// console.log(WhatIDo('teacher', 'John'))

// Challenge

// function calculator(_bill) {
// 	var _tip = 0;
// 	var _allTips = [];
// 	var _totalAmnt = [];

// 	if (_bill <= 50) {
// 		_tip = _bill * 0.2;
// 		_allTips.push(_tip);
// 		_totalAmnt.push(_tip + _bill);
// 		console.log('Your tip is : $' + _tip);

// 	} else if (_bill >= 51 && _bill <= 200) {
// 		_tip = _bill * 0.15;
// 		_allTips.push(_tip);
// 		_totalAmnt.push(_tip + _bill);
// 		console.log('Your tip is : $' + _tip + ' for the bill ' + _bill);


// 	} else if( _bill > 200) {
// 		_tip = _bill * 0.1;
// 		_allTips.push(_tip);
// 		_totalAmnt.push(_tip + _bill);
// 		console.log('Your tip is : $' + _tip);
// 	}

// 	console.log('Total bill : $' + _bill);
// 	console.log( 'All the tips : $' + _allTips);
// 	console.log( 'All the amount : $' + _totalAmnt);
// 	console.log('-----------------------------------');

// }

// calculator(43);
// calculator(67);
// calculator(203);


//Solution -------

function tipCalculator(_bill){
var percentage;

if(_bill < 50 ){
	pencentage = .2;

}
else if (_bill >= 50 && _bill < 200 ){
	percentage = .15;
} else {
	percentage = .1;
}
return percentage * _bill;
}


var bills = [124, 50, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];

			var finalValues = [	bills[0]+ tips[0],
								bills[1]+ tips[1],
								bills[2]+ tips[2] ];


			console.log(tips, finalValues);