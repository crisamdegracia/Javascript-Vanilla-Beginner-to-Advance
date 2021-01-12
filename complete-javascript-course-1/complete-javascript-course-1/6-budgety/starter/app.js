/* 
Summary
1. We create the module patter
	1. budgetController
	2. UIcontroller
	3. controller   <- Global app controller
		3a. we give budgetController and UIcontroller as argument 
2. We add addEventlistener for enter and add button
3. we create a function when we press enter and add button.  ctrlAddItem();
4. On UIcontroller - we create a method to get a value and return them. getInput() - type, description, value
5. Now on controller we pass the value.
6. SERIOUS -
		--BEFORE----------------------------
		//not a good practice daw kasi kapag nag palit daw ng name we will also change each string manually
		//so we simply create an object to store all the data

			getInput: function(){
				return {

					type : document.querySelector('.add__type').value, 
					description : document.querySelector('.add__description').value,
					value : document.querySelector('.add__value').value
				}
			}
	6a. So, we create var and call DOMstrings
			
	--AFTER--------------------
	var DOMstring = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value' }
return {
		getInput: function(){
			return {
				 type : document.querySelector(DOMstring.inputType).value, ////income or expenses
				 description : document.querySelector(DOMstring.inputDescription).value,
				 value : document.querySelector(DOMstring.inputValue).value
			}
	}
	We create object and replaced all the string values.
	---AFTER END------
7. we also add   addBtn: '.add__btn' to the DOMstring method and made it public by create getDOMstring returning it in UIContoller.
	7a. so the eventListener string value of CSS name .add__btn will be easier to change in the future
8. Now we create a function on controller() for all of our eventlistener  -var setupEventListeners()
	8a. we also put var DOM = UICtrl.getDOMstrings(); inside because we only want to trigger the value on event listeners
*/

var budgetController = (function () {})();

//These Controller dont know each other. REALLY? LOL

// a function that we want to use to other controller -- cannot be a private function -- so its a public method
var UIController = (function () {
	//so when we decide to change the string name, we will just go here and change this piece of code! OMOSHIROI!
	var DOMstring = {
		inputType: ".add__type",
		inputDescription: ".add__description",
		inputValue: ".add__value",
		inputBtn: ".add__btn",
	};

	return {
		getInput: function () {
			//Remember that the contoller is going to call this method to recieve back all the values thats why we need to return a value
			return {
				//not a good practice daw kasi kapag nag palit daw ng name we will also change each string manually
				//so we simply create an object to store the data
				type: document.querySelector(DOMstring.inputType).value, ////income or expenses
				description: document.querySelector(DOMstring.inputDescription)
					.value,
				value: document.querySelector(DOMstring.inputValue).value,
			};
		},

		//we also made public the DOMstring which has the values of value,description, and type
		//and let the controller() get an access to it
		getDOMstrings: function () {
			return DOMstring;
		},
	};
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
	var setupEventListeners = function () {

		//this is also inside becoz we only need it in eventListener
		var DOM = UICtrl.getDOMstrings();
		//when add button clicks
		document
			.querySelector(DOM.inputBtn)
			.addEventListener("click", ctrlAddItem);

		//when enter is pressed
		document.addEventListener("keypress", function (e) {
			//some browser doesnt use keyCode, so we use which -> e.which === 13
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		});
	};

	//this is a private function and not exposed to the public
	var ctrlAddItem = function () {
		//1.get the field input data
		var input = UIController.getInput();

		console.log(input);

		//2.add the item to the budget controller

		//3. add the item to the ui

		//4. calculate the budget

		//5.display the budget on UI
	};

	return {
		init: function(){
			console.log('Application has started');
			setupEventListeners();
		}
	}

})(budgetController, UIController);


controller.init();

