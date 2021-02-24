import Search from "./model/Seach";
import Recipe from "./model/Recipe";
import List from "./model/List";
import Likes from "./model/Likes"


import { elements, renderLoader, clearLoader } from "./views/base";

import * as searchView from "./views/searchViews";
import * as recipeView from "./views/recipeViews";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
window.state = state;
/* ------------------------------------------------------
SEARCH CONTROLLER

------------------------------------------------------ */
const controlSearch = async () => {
	//1) Get query from view
	const query = searchView.getInput();
	// const query = 'pizza';

	if (query) {
		//2. new search object and add to state
		// meron tayong access sa Search.js -- ngayon gumawa ng state variable
		// tapos gumawa ng state.search on the fly. na ngayon mag hahandle ng mga new search na query.
		state.search = new Search(query);

		//3. prepare UI for results
		searchView.clearInput();
		searchView.clearResults();

		renderLoader(elements.searchRes);

		try {
			//4. search for recipes
			// waiting for the result of our API
			console.log(await state.search.getResults());

			//5. Render results on UI
			clearLoader();

			// so ngayon we can use renderResults() and pass the new search result query

			searchView.renderResults(state.search.result);
		} catch {
			alert("Search error");
			clearLoader();
		}
	}
};

elements.searchForm.addEventListener("submit", (e) => {
	e.preventDefault(); // prevents reload when clicking search button
	controlSearch();
});

window.addEventListener("load", (e) => {
	e.preventDefault(); // prevents reload when clicking search button
	controlSearch();
});

elements.searchResPages.addEventListener("click", (e) => {
	const btn = e.target.closest(".btn-inline");
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

/* ------------------------------------------------------
RECIPE CONTROLLER
------------------------------------------------------ */
const controlRecipe = async () => {
	const id = window.location.hash.replace("#", "");
	if (id) {
		//prepare UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe); //renderLoader needs the parent elemen to know where to display the loader

		// Highlight selected search item
		// kaya nag if, kasi my error, so kapag walang highlighted error,
		if (state.search) searchView.highlightSelected(id);
		//Create new recipe object
		state.recipe = new Recipe(id);

		window.r = state.recipe;
		try {
			//Get recipe data
			await state.recipe.getRecipe();
			state.recipe.parseIngredients();

			// Calculate servings and time
			state.recipe.calcTime();

			state.recipe.calcServings();

			// console.log(state.recipe.ingredients);
			// console.log('---------------------------')

			clearLoader();

			recipeView.renderRecipe(state.recipe);
		} catch {
			alert("error processing recipe");
		}
	}
};

// window.addEventListener('hashchange', controlRecipe );
// window.addEventListener('load', controlRecipe );

["hashchange", "load"].forEach((event) =>
	window.addEventListener(event, controlRecipe)
);



/*---------------------
*  CONTROL LIST
*---------------------*/

const controlList = () =>{
	// create a new list if there is none yet
	if(!state.list) state.list = new List();

	//add each ingredient to the list and UI
	state.recipe.ingredients.forEach(el => {

		const item = state.list.addItem(el.count, el.unit, el.ingredient);


		listView.renderItem(item);


	})
}

/* ------------------------------------------------------
Like CONTROLLER
------------------------------------------------------ */
const controlLike = () => {
	// Create new like if there is none yet
	if(!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;

	//user not yet like current recipe
	if(!state.likes.isLiked(currentID)){
		
		//if true then create new like and store it
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img )

		// Add like to the state. 
	

		// Toggle the like button

		// add like to the UI list

console.log(state.likes)
//user has like current recipe
} else {
	// remove like to the state.
	state.likes.deleteLike(currentID);
	console.log(state.likes)

			// Toggle the like button
	
			// remove like to the UI list
	
	}
}





// Handling delete and update list and UI

elements.shopping.addEventListener('click', e =>{
 const id = e.target.closest('.shopping__item, .btn-decrease *').dataset.itemid;

//handle the delete event
if(e.target.matches('.shopping__delete, .shopping_delete *')){
	//Delete from state list
	state.list.deleteItem(id);

	//Delete from UI
	listView.deleteItem(id);

	//Handle the count update
} else if (e.target.matches('.shopping__count-value')) {
	const val = parseFloat( e.target.value, 10 );
	state.list.updateCount(id,val);


	recipeView.updateServingsIngredients( state.recipe );
	// console.log(state.recipe)
	recipeView.renderRecipe( state.recipe )
}

})



//buttons are not there by the time we load the page
//the only thing that is there is the recipe elements
// so we need to use event delegation

//Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		//Decrease btn is clicked
		if(state.recipe.servings > 1 ) {
		state.recipe.updateServings('dec');  // eto ung ginawa natin sa Recipe.js
			recipeView.updateServingsIngredients(state.recipe)
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		//Increase btn is clicked
		state.recipe.updateServings('inc');  // eto ung ginawa natin sa Recipe.js
		recipeView.updateServingsIngredients(state.recipe)
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		controlList();
	}  else if (e.target.matches('.recipe__love, .recipe__love * ')) {
	 
		controlLike();
	}

});

window.l  = new List();

