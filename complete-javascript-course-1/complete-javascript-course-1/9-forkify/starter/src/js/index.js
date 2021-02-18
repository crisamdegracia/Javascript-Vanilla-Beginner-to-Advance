import Search from './model/Seach';
import Recipe from './model/Recipe';
import { elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchViews';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/* ------------------------------------------------------
SEARCH CONTROLLER

------------------------------------------------------ */
const controlSearch = async () => {

	//1) Get query from view
const query = searchView.getInput()


if(query) {

	//2. new search object and add to state
	// meron tayong access sa Search.js -- ngayon gumawa ng state variable 
	// tapos gumawa ng state.search on the fly. na ngayon mag hahandle ng mga new search na query.
	state.search = new Search(query);
	
	//3. prepare UI for results
	searchView.clearInput();
	searchView.clearResults();

	renderLoader(elements.searchRes);



	//4. search for recipes
	// waiting for the result of our API
	console.log(await state.search.getResults() )

	//5. Render results on UI
	clearLoader();

	// so ngayon we can use renderResults() and pass the new search result query
	
	searchView.renderResults(state.search.result);
}


}

document.querySelector('.search').addEventListener('submit', e => {
	e.preventDefault(); // prevents reload when clicking search button
	

	controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/* ------------------------------------------------------
RECIPE CONTROLLER
------------------------------------------------------ */

const r = new Recipe(46956);

r.getRecipe();