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
			console.log( add(b) );
	}
}

})();

//These Controller dont know each other. REALLY? LOL

var UIController = (function(){

})();


//this is the bridge of the two above
var controller = (function(budgetCtrl, UICtrl){

})(budgetController, UIController);

