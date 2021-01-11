/* 
Summary
1. We create the module patter
	1. budgetController
	2. UIcontroller
	3. controller   <- Global app controller
		3a. we give budgetController and UIcontroller as argument 
2. We add addEventlistener for enter and add button
3. we create a function when enter and add button is pressed.  ctrlAddItem();

*/


var budgetController = (function(){


})();

//These Controller dont know each other. REALLY? LOL

// a function that we want to use to other controller -- cannot be a private function -- so its a public method
var UIController = (function(){

	return {
		getInput: function(){
			
		}
	}



})();

 


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	var ctrlAddItem = function(){
		//1.get the field input data
	
		//2.add the item to the budget controller
	
		//3. add the item to the ui
	
		//4. calculate the budget
	
		//5.display the budget on UI

		console.log('pressed')
		}
	

//when add button clicks 
document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

//when enter is pressed
document.addEventListener('keypress', function(e){

	
	//some browser doesnt use keyCode, so we use which -> e.which === 13
	if(e.keyCode===13 || e.which === 13){
		ctrlAddItem();
	}

});



})(budgetController, UIController);

