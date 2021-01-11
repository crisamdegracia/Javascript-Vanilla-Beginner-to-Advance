'use strict';

//read the Guide f6v5
//this variable will be IIFE that will return an object
//The secret of the module pattern is that it returns an object containing all of the functions that we want to be public
var budgetController = (function(){

	var x = 23;

	var add = function(a) {
		return x + a;
	}
	
	return {
		 publicTest:function(b){
			return add(b);
	}
}

})();

//These Controller dont know each other. REALLY? LOL

var UIController = (function(){

})();

 
//this is the bridge of the two above
// we can also use the original argument name, but that is not good becoz
//when we change the name fox example(UIController), we will also change the name of the argument. and thats a long job
var controller = (function(budgetCtrl, UICtrl){

var z = budgetCtrl.publicTest(5);

return {
	anotherPublic: function(){
		console.log(z);
	}
}


})(budgetController, UIController);

