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

 var john = (89 + 120 + 103) / 3;
 var mike = (116 + 94 + 123) / 3;

//   john > mike  ?  console.log( 'Team John has an average score: ' + john + 'and a winner!'  ) : console.log('Team Mike has an average score: ' + mike + ' and a winner!');
//   john === mike ? console.log(' Too close! ') : console.log('It\'s a draw! ');

	console.log ('SCORE: John - ' + john + '  SCORE : Mike ' + mike);
  if( john > mike ){
	console.log( 'Team John has an average score: ' + john + ' and a winner!'  )
  }
  else if ( john < mike ){
	console.log( 'Team Mike has an average score: ' + mike + ' and a winner!'  )
  }
  else if (john === mike ){
	  console.log(' It\'s a draw!');
  }
  else {
	  console.log( 'nobody knows why whe\'re here');
  }
  
