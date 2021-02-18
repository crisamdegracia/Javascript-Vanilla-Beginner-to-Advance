import Search from './model/Seach';
import { elements } from './views/base';
import * as searchView from './views/searchViews';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

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
	
	//4. search for recipes
	// waiting for the result of our API
	console.log(await state.search.getResults() )

	//5. Render results on UI
	// so ngayon we can use renderResults() and pass the new search result query

	searchView.renderResults(state.search.result);
}


}

document.querySelector('.search').addEventListener('submit', e => {
	e.preventDefault(); // prevents reload when clicking search button
	

	controlSearch();
})



