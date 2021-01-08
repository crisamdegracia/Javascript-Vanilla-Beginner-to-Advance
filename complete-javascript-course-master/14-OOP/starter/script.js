'use strict';

// Function constructor 

/*
//Constructor
var Person = function(firstname, birthPlace, job) {
	this.firstname = firstname;
	this.birthPlace = birthPlace;
	this.job = job;
}

//because we use mark as new Person. we can now use the 
//variable we created in Person object
var mark = new Person('Mark', 1990, 'Designer')
console.log(mark.firstname)


//we create a function prototype on the fly
//so now mark can use it, because we create a new Person for him 
Person.prototype.calculateAge = function (){
	console.log( 2021 - this.birthPlace );
}

mark.calculateAge()
*/


//Object.create

// var personProto = {
// 	calculateAge: function(){
// 		console.log(2021 - this.yearOfBirth)
// 	}
// };
// Two ways

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';

// var jane = Object.create(personProto, {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1968},
// 	job: {value: 'I.T'}
// })

// Both share personProto
/* 
The difference between object.create and function constructor

- is that the object.create builds an object that inherits directly
	from the one that we passed into the first argument.
- while function constructor - the newly created object inherits
	from the constructor's prototype
*/



// Primitives vs Objects

The big difference between Primitive and Objects
	is that variables containing primitives actually hold
	that data inside of variable itself 

On objects it very different 
	variable associated with objects DO NOT actually containing
	the object -- but instead they contain a reference to the
	place in memory where the objects sessionStorage, so where the
	objects stored

- AGAIN -
	a variable declared as an object
	does not have a real copy of the object 
	it points to that object! AHA!