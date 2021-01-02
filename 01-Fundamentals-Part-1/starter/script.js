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

// function tipCalculator(_bill) {
// 	var percentage;

// 	if (_bill < 50) {
// 		pencentage = 0.2;
// 	} else if (_bill >= 50 && _bill < 200) {
// 		percentage = 0.15;
// 	} else {
// 		percentage = 0.1;
// 	}
// 	return percentage * _bill;
// }

// var bills = [124, 50, 268];
// var tips = [
// 	tipCalculator(bills[0]),
// 	tipCalculator(bills[1]),
// 	tipCalculator(bills[2]),
// ];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, finalValues);

// var john = {
// 	fName : 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['jane', 'Mark', 'Bob', 'Emily'],
// 	job : 'teacher',
// 	isMarried: false,
// 	calcAge: function(){
// 		this.age = 2018 - this.birthYear;
// 	}
// }
// john.calcAge();
// console.log(john)

// CHALLENGE!
// var john = {
// 	fullName: "John Smith",
// 	mass: 75,
// 	height: 2.6,
// 	_bmi: function () {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	},
// };

// var mark = {
// 	fullName: "Mark Peninsula",
// 	mass: 100,
// 	height: 12,
// 	_bmi: function () {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	},
// };
// // john._bmi();
// // mark._bmi();  < no  need to call it here. we just call it on the if()

// if(john._bmi() > mark._bmi()){
// 	console.log( john.fullName + ' has ' + john.bmi + ' BMI and  is heighier than ' + mark.fullName);
// } else if (mark._bmi() > john._bmi()  ){
// 	console.log (mark.fullName + ' has ' + mark.bmi + ' BMI and  is heighier than ' + john.fullName);
// } else {
// 	console.log( 'Cool! they have same BMI\'s!');
// }

// if the  if(typeof john[i] !== 'string') ;
// is not a string then it will continue the loop

//continue - is to quit the current iteration of the loop
//then continue to the next one

//let say we only want to look for elements that are strings
// so if it not a string it will quit the current iteration then continue to the next one
// var john = ['smith', 'wakanda',1990, 'designer', false];

// if(typeof john[1] !== 'string') {
// 	console.log(john[1] + ' is a String!');
// }

// for( var i = 0; i < john.length ; i++ ){
// 	if(typeof john[i] !== 'string') {
// 		console.log(' We are inside the CONTINUE sad');
// 		continue;  // so if this is false it will continue to the next statement which is the console.log
// 	}
// 	// console.log('----------')
// 	// console.log(typeof john[i])
// 	// console.log(john[i] + ' ' + [i]);
// }

//if the  if(typeof john[i] !== 'string') ;
//encounters a not a string then it will stop or break the loop
// var john = ['smith', 'single',1990, 'designer', false];
// for( var i = 0; i < john.length ; i++ ){
// 	if(typeof john[i] !== 'string') break;
// 	console.log(john[i]);

// console.log('----------');
// console.log(typeof john[0]);
// }

// for ( var i = john.length - 1; i >= 0  ; i--){
// 	console.log(john[i]);
// }

//-------------------------------------------------
// LAST CHALLENGE!
//-------------------------------------------------

var john = {
	bills: [124, 48, 268, 180, 42],
	_allTips: [],
	_totalAmount: [],
	calcTip: function () {
		for (var i = 0; i < this.bills.length; i++) {
			if (this.bills[i] <= 50) {
				console.log("less than 50");
				console.log(
					"bill number: " + [i + 1] + " amount:  $" + this.bills[i]
				);
				this.tip = this.bills[i] * 0.2;
				console.log("Tip :  $" + this.tip);
				console.log("---------------");

				this._allTips.push(this.tip);
				this._totalAmount.push(this.bills[i] + this.tip);
			}

			if (this.bills[i] > 50 && this.bills[i] <= 200) {
				console.log("between 50 - 200 ");
				console.log(
					"bill number: " + [i + 1] + ", amount:  $" + this.bills[i]
				);
				this.tip = this.bills[i] * 0.15;
				console.log("Tip :  $" + this.tip);
				console.log("---------------");

				this._allTips.push(this.tip);
				this._totalAmount.push(this.bills[i] + this.tip);
			}

			if (this.bills[i] > 200) {
				console.log("greater than 200");
				console.log(
					"bill number: " + [i + 1] + ", amount:  $" + this.bills[i]
				);
				this.tip = this.bills[i] * 0.1;
				console.log("Tip :  $" + this.tip);
				console.log("---------------");

				this._allTips.push(this.tip);
				this._totalAmount.push(this.bills[i] + this.tip);
			}
			// console.log('Bill + Tip = : ' + this._totalAmount + ' ---');
			// console.log('All tips = : ' + this._allTips);
		}

		for (var i = 0; i < this._allTips.length; i++) {
			console.log("Tip: " + this._allTips[i]);
		}
		for (var i = 0; i < this._allTips.length; i++) {
			console.log("Tip + Bill :" + this._totalAmount[i]);
		}
		console.log("--------------");
	},
};

// john.calcTip(44);
console.log(john.calcTip());

// -------------------------------------------------------

var mark = {
	bills: [77, 375, 110, 45],
	aveTip: [],
	markTipBill: [],
};

function markTipCalculator() {
	for (var i = 0; i < mark.bills.length; i++) {
		if (mark.bills[i] <= 100) {
			this.tip = (mark.bills[i] * 0.2) / mark.bills.length;
			mark.aveTip.push(tip);
			console.log('MARK-------- less than 100 '+ tip);
		} else if (mark.bills[i] > 100 && mark.bills[i] <= 300) {
			this.tip = (mark.bills[i] * 0.1) / mark.bills.length;
			mark.aveTip.push(tip);
			console.log('MARK-------- between 100 - 300 '+ tip);
		} else if (mark.bills[i] > 300) {
			this.tip = (mark.bills[i] * 0.25) / mark.bills.length;
			mark.aveTip.push(tip);

			console.log('MARK-------- greater than 300 '+ tip);
		}
	}
}

markTipCalculator()
