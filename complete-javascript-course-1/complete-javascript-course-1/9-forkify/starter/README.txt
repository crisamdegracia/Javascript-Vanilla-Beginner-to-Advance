-- Final Project --

v6a. npm install webpack npm i webpack --save-dev 
	1a. --save-dev will save as dev dependecies of the project
v6b. npm i jquery  --save 
	2a. --save not as dev dependency but as dependency
	2b. npm uninstall jquery --save
v6c. npm i live-server --global <- meron na ung vsCode
	3a. --global - kasi kung hindi global sa project lang sya accesible kung global lahat ng nagamit ng computer
----------------------------------------------
v7a. basic webpack configuration
	- most commonly used asset bundler, it bundles all kinds of assets
	- like JS, CSS, image
	- we are going to bundle in one folder
	- zero configuration - we dont need to write config file
		- if we want that, we need one source folder in the root and in there one index.js file
		- then webpack will automatically create a distribution folder and put the bundle file in there
			- but that is for small apps.
		- so in this project we are not interested.
	1. we create webpack.config.js
		- webpack has four core concepts
			- entry point, the output, loader, and plugins
	2. entry - this point will start the bundling
		- this is the file where it start looking for dependencies  to bundle together
		- can be one or more entry file	
	3. output - which will tell webpack where to save the bundle file
		- we pass as object then put the path, and file name.
		- filename - the file name of what we will bundle	
		- path - needs tobe absolute path
			- inorder it to be an absolute path
			- we need to use a built in node package
			- that is why we need to > const path = require('path')
			- now we can use a method that path has. ( resolve(__dirname, 'dist') )
			- __dirname - is variable that node gives us acess to
				- __dirname - is the current absolute path
			- ung kasunod ng __dirname is ung gusto natin na bundle to be in
		- so now the bundle will go there at dist/js named bundle.js
	4. Production and development mode
		- development mode - simply builds our bundle without minifying our code
			- in order to as fast as posible
		- Production - will automatically enable all kinds of optimization
			- like minification and tree shaking
			- in order to reduce the final bundle size
	5. To test -
		-we have index.js, then we create a new file test.js
			- console and export 
			- let export some number -- export default 23;
			- in index.js, we can now [ import num from '.test' ]
			- so in index.js we can use num. and all its value from the text.js 
	6. now to execute them, 
		- go to package.json 
		- then add the script, "dev":"webpack"
		- then command line 'npm run dev'
		- but before we can call npm script webpack - 1st [npm i webpack-cli --save-dev]
		- now its working!
	    - we can check by creating index.html in /dist/, if something was console.log()
			- i checked it and it worked! dont forget to put <script> tag!
	7. Last thing about mode: so we set it to development
		- but once we're ready we can then want To
		- set it manually to Production
		- but we can also use [npm ] to make it dynamic
		- so we delete it from webpack.config.js
			- then add to package.json to scripts
			- "dev": "webpack --mode development"
			- next -- 
			- "build": "webpack --mode production"
			- now we can npm run dev - for development
			- and npm run build for production -
--------------------------------------------------
v8 - Modern setup the webpack dev server
	1. npm i webpack-dev-server --save-dev 
		- every time we change our code UI frontend updates without refreshing the browser by
		- by using npm run start - check mo ung naka set don sa package.json
	2. error, ginagamit na daw sabi.
		- kasi nga sa VSCODE automatic narin na nag a-update.
		- so no need na siguro.
	3. napagana ko by changing  webpack-dev-server to webpack serve lang
		- from stack overflow
		- please check package.json
	4. Copying the index.html file to our dist folder 
		- we now use PLUG-INs
			- plugins allow us to do complex processing of our input file, and in this case is our index.html
		- we want to use html webpack plugin
		- npm i html-webpack-plugin --save-dev
		- then go to webpack.config.js
		- plugins: []  - it recieves an array - that all the plugins we are using
		- check it on webpack.config
		- new HtmlWebpackPlugin() - here we will copy the index.html file -- for ready to go in production
		- template : - starting daw ng html file - ung location
		- we can also daw use a plugin to create new html file from scaratch automatically without providng any template
			- pero outside daw ng scope in this tutorial
		- kapag daw nag npm run start - hindi pa masasave sa disk ung changes, it will just stream them to server
			- so npm run dev - para lumabas ung file
		- now gumana na natransfer na ung index.html file sa dist folder
	
	--f9v9 Modern Set up babel---------------------------------------------
	1. npm i babel-core        - containes the core functionality of the compiler
	2. npm i babel-preset-env  - will takecare all the modern JS features
	3. npm i babel-loader      - it need webpack to load babel files

	4. the concept of loaders in webpack 
		- it allow us to import or load all kinds of diferent files and process  them
		- ling converting sass to css or cs6 to cs5
	5. WEBPACK(LOADER) is->  module:{rules:[]}  - we need to specify the rules property
		- rules:[]  - all the loader that we want
		- {test:} - regular expression ->  we want to test all the JS files 
				- /\.js$/   -it says it will test all the files that ended in .js files
			- use:{loader:{ }} - then we use babel loader 

	    - exclude:  /node_modules/ (regular-expression) - if we didnt do this - all the file in node_modules will apply babel
	6. create .babelrc in the root folder
		- preset  -  is a collection of code  transform plug-ins
		- env , browsers  -  babel will automatically figures out whihc es6 feature is actually need to convert in order to work on the last five version of all the browser
			- that what means in "env"
			- we can find more on babel documentation
	7. there are things we cant convert becoz they are not present in th es5 version
		- so there is no way that we ccan convert them
		- so we need to polyfill them
	8. Polyfill - npm i babel-polyfill --save
		- this will implement daw like a promise in ES5
		- not a development tool
		- but a code that will go to our final bundle
		- not a dev dependency
	9. add polyfill in entry[] 
	- now its one big bundle with our es6 and index.html
	- all the polyfill for es6 and index.js 

	-------------------------------------------------------------
	f9v10 - Planning our Project Archetecture with MVC

	------------------------------------------------------
	f9v1  - How ES6 module work
	index.js 
	1stteknik -	import str from "./model/Search"    <- no need for .js
	2ndteknik -	import {add, multiply} from "./views/searchView"    <-  {add, multiply} - we can choose what to pass
	3rdteknik - import {add as a , multiply as m, ID} from "./views/searchView"  - pwede reng gawing iba ung variable by setting 'as'
	4thteknik - import * as searchView = "./views/searchView"


			console.log(`This what we imported from Search.js ${str} and this is from views  ${add(ID, 2)} and ${multiply(3,5)})
		- to call the 4th teknik
		searchView.add(4, 5)   searchView.multiply(1,3)

		Search.js 
		export default "What a value !"


		searchView.js
		export const  add = (a,b) => a+b;
		export const multiply = (c,d)=> c*d;
--------------------------------------------------------------
f9v13 - Making our 1st API Calls

			- fetch - not working in all browser
			- axios - a very popular HTTP request library
				- npm i axios 
				- no need to put the folder location
				- it automatically returns .json file
				- better error handling than fetch
1. we can use try {} catch{}  for error handling		
------------------------------------------------------------------
f9v14 - Building the search model
	1. Search.js - I can read na ung laman. kaya no need to explain here

------------------------------------------------------------------
f9v15 - 15. Building the Search Controller
		- learn the application state
		- a simple way of implementing state

1. State - Very important - what is the state of our app in any given moment
	- what is the current search query
	- what is the curremt recipe
	- how many is being calculated
	- what is currently is inthe shoppong list
	- we want that on one simple place, like one central variable object
	- all data that defines our app in any given moment
	- in one place one object
2. now we create const state = {} on index.js
	- each time we load our app the state is empty
	- we create document.querySelector('.search').addEventListener('submit', e => {
	e.preventDefault(); 
		- e.preventDefault() ; - to prevent browser from loading when clicking the search button
		- then we create a function when we click the search button
		- controlSearch() - to be called when search recipe btn clicks
		- 
3. await state.search.getResults()  - kaya nalagay ung await kasi hinihintay natin ung result from API call
	- kaya need din natin mag lagay ng async dun sa pinaka function [  const controlSearch = async () ]
	- 

---------------------------------------------------------
f6v16 - Building the search view
		- advance DOM manipulation techniques
		- How to use ES6 template string to render entire HTML components
		- How to create loading spinner 
	
1. we create base.js on /views - it contains all elements that we selected in our DOM 
	- we import elements from /views/base - so we can use it
	- we also want everything from searchViews import * as searchView from './views/searchViews';
	- const query = searchView.getInput() - we can now read the search input
2. we create a function in searchView.js 
	-  export const renderResults = (recipes, page = 1, resPerPage = 10) => {
		- we create renderRecipe ( not exported--its a private function)
		- this is where the render function is hapenning.
		- we create const markup - where we will output the HTML
		- recipe.recipe_id - recipe function argument. recipe_id - API variable 
3. render it to the UI
	- elements.searchResList.insertAdjacentHTML('beforeend', markup);
	- 	searchView.renderResults(state.search.result); - call it finally in index.js
4. we create export const clearInput = ()
	- we will call it in index.js 
5. we create export const clearResults = () => {} 
	- then call it in index.js 

---------------------------------------------------------------
f9v17 - PART 2
1. shorten the title of the output
	- export const limitRecipeTitle  in searchViews.js
	- we check 1st the limit.length
	- if true - split() will create an array, then reduce() will sum them up
	- if accumulator + current index.length is <= limit (17) - 
	- then it will push in the newTitle array.
	- then return the  newTitle.join(' ') - join is oposite of split. pag sasamahin naman nyan ung mga array.
	- else { we just return the title}
2. use the limitRecipeTitle() in renderRecipe
	- ${limitRecipeTitle(recipe.title)}  pass the recipe title

--------------------------------------------------------------
f9v18 - Rendereing an AJAX loading spinner

1. go to views/base.js
	- create export const renderLoader = parent => {}
	- pass the parent element
2. 	renderLoader(elements.searchRes); in index.js 
	- so after we create function in base.js we call it in index.js
	- we pass the parent element
3. remove the spinner
	- 1st we create  
			export const elementStrings = {
    			loader: 'loader'
				};
	- kaya lang nya ginawa, kasi daw pangit.
	- loader: with a class name 'loader' make sense ee?
	- then we import and call it in index.js

--------------------------------------------------------------------
f9v19 - Pagination
	- How to use the .closest method for easier event handling
	- How and why to use data-* attributes in HTML5

1. hutaena dko nagets! - we modify renderResults(recipes, page=1, resPerPage=10)

2. we create const renderButtons = (page, numResults, resPerPage) => {}
	- panuorin mo nalang cguro noh?

3. we create const createButton = (page, type) => 
	- to pass the mark-up to the UI
4. daming hanash amfota. - not interested!
	-  recipes.slice(start, end).forEach(renderRecipe);
	-   renderButtons(page, recipes.length, resPerPage); final set nya para macall
5. index.js - event delegation
6. hindi ko na inintndi kasi sa WordPress meron ng Pagination

--------------------------------------------------------------------
f9v20 - Building Recipe model part 1

1. we create Recipe.js in /model folder
	- then we get all the api can return 
2.  we create calcTime() - to calculate cooking time and serving time
	- for every 3 ing. we need 15 minutes
		- numIng 
	- num of ingredient / 3 = periods.
3. and also calcServing() - no complex algo.

--------------MAHUSAY TO  changes when click--------------------------------------
f9v21 - Building the recipe Controller
	- How to read data from the page url
	- How to respond to hashchange event;
	- How to add same event listener to multiple events.

1. hashchange evenListener () - fired off each time that the hash that we have in the URL changes to something else
	- add to global object
	- window.location = is the entire URL adress
	- tapos .hash - gives us the content of the #  - window.location.hash
	- then replace the hash to nothing - window.location.hash.replace('#','')
	- now we have the ID
2. now we create object   	state.recipe = new Recipe(id)
3. get the data from the server   -> await state.recipe.getRecipe();
	- we add await so it will be asynchronous
4.  this is How to add same event listener to multiple events
// window.addEventListener('hashchange', controlRecipe );
// window.addEventListener('load', controlRecipe );

['hashchange','load'].forEach(event => window.addEventListener(controlRecipe));

5. we add try{} catch{} to handle the error
--------------------------------------------------------------
f9v22 - Building the recipe model part 2
		- Use array methods like map, slice findIndex and includes
		- How and why to use eval() 
1. we add new method in Recipe.js  parseIngredients() {}
	- we create new array  with some new ingredients based on the old ones.
	- in each iteration we will return a value
	- we create this.ingredients on the fly then store the newIngredients
2. we create the units - unitsLong[], unitsShort[]
3. we create let = ingredient  - will be base on the current element
	- then to lowerCase() - becoz sometimes it will appear like with capital
4. we are now going to loop over the unitsLong, so the ones that appearing in the ingredient
	- unitsLong.forEach((unit,i))  - we need both current element (unit)  current index (i)
	- ingredient = ingredient.replace(unit, unitShort[i])
			- we will manipulate the ingredient - we will replace ng short unit 
5. remove parenthesis . we google it. the we use regex
6. then we return ingredient

7. separate the unit from rest of the text
	- 1st we are going to test if there is a unit in the string, if yes, where it is located
	- 1st convert string to an array 
	- find the index where the units is located
		-   const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2))
		-  findIndex( callback ung el2 ) - for each elements it will make a test, and what we want to test is the units.includes(el2)
		-  .includes - it returns true - if the element is in the array . else false

-- From here on, inisa isa nya ung IF - ELSE IF - para sa output ng Object Ingredient objng

8. if (unitIndex > -1) - kung my unit
9. } else if (parseIntarrIng[0], 10){ - parse into int with a base of 10
	- if the conversion is successful it will return into a number
10. else if (unitIndex === -1 ){
		- no unit and no number in 1st position
		10a. create let not a const, becoz we need to define it outside the block
				- then mutate them inside of one of these if else blocks
				- this is the final object that we are gonna return
				- whihc is the object ingredient - objIng

		10b. ung objIng daw natin is always merong count=1, unit, ingredient
		 else if (unitIndex === -1) {
				// There is NO unit and NO number in 1st position
				objIng = {
					count: 1,
					unit: "",
					ingredient,
				};
			}
				- unit is emty - we have to put something there
				- kaya daw ganyan lang ung sa ingredient, kasi ung 
				- ingredient: ingredient talga dapat sya,
				- so, mainherit nya ung nasa taas
					- ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");
11. else if (parseInt(arrIng[0], 10)) 
	- ganon din gawa din tayong 
		objIng = {
					count: parseInt(arrIng[0], 10),
					unit: "",
					ingredient: arrIng.slice(1).join(" "),
				};
	- arrIng.slice(1).join(" "),
		- slice(1) - kung hnd daw nag set ng 2nd arg, it will set to the end
		- zero index - 
		- the entire array except the 1st element
			- 1st element is a number the rest is ingredient
		- that is why we sliced it then we put it back into a string using join()

12. if (unitIndex > -1) { 
		- ang haba. dko na masundan. 
		- bandang 32 minutes na
		- 

------------------------------------------------------------------------
f9v23. Building the Recipe View - Part 1
1. we create export const renderRecipe = (recipe, isLiked)
	- we paste the HTML na pinaka design sa frontend
	- then we change the value na galing sa model
2. elements.recipe.insertAdjacentHTML('afterbegin', markup); 
	- to finally call and display on the UI
3. we create ${recipe.ingredients.map(el => createIngredient(el)).join('')}
	- to loop <i> </i> elements . we created separated function createIngredient(el)
4. we create createIngredient() 
	- that has the <i> </i> markup 
5. then we add to the index.js
	- recipe.renderRecipe()
	- then we pass the state.recipe  -> recipeView.renderRecipe(state.recipe)

6. if(id){
		//prepare UI for changes
		renderLoader()

		- then we pass the parent, so the loader know where to display itself
7. also call  state.recipe.parseIngredients(); in index.js
8. create clearRecipe() in recipeViews.js then call it in index.js

------------------------------------------------------------------
f9v24 - Building Recipe view part 2 
	 - remove clicked CSS action 
1. we npm install Fractional - 
const formatCount = count => 
	- para ung 0.26 cups daw is magiging 1/4 cup .

	  example transformation
         count = 2.5 --> 5/2 --> 2 1/2
         count = 0.5 --> 1/2

2. if(count) -  we are looking here -> ${formatCount(ingredient.count)}
	- 1st is to separate the integer part from the decimal part

	const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));
		-  we use destructuring
		- 1st we convert it to string   count.toString() then split('.') them by the dot
		- now it will be an array for example 2.5 it wil be [2,5]
		- so array na, then we do map(el => parseInt(el, 10)) - parse int daw with the base of 10

3. in case there is no decimal  -  if(!dec) return count; 
	- for example 2.5 my decimal sya, so kung 2 lang edi wala.
4. if(int === 0 ) - example 0.5  
	- we we will convert 0.5 to string 1/2
	- now we will use the Fractional library
		- 1st we create const fr = new Fraction( count )  - base on count
		- from there we can read the numerator and denominator
		- so we can return the ${fr.numerator}/${fr.denominator} 
			- so incase we have 0.5, this will automatically calculate the numerator (0) is 1
			- then denominator(5) is 2.
	- done with the formatting incase on integer is zero
5. else  example stil 2.5
	- 1st again we create const fr = new Fraction()
		- we just want to create the new fraction of the 0.5 
		- we just want to create a fraction of the 0.5 part
	- so Fraction(count - int) 
		- return `${int} ${fr.numerator}/${fr.denominator}`;
		- so the int is 2   and the fraction is 1/2
6. was selected with gray background
	- punta, searchView.js 
		export const highlightSelected = id =>

	- document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
		- we want to select the href with the ID 
		- then add a classList.add('.result__link--active)
	- problem was, when we click ng marami, marami rin silang highlightSelected
	 	- const resultsArr = Array.from(document.querySelectorAll('.results__link'));
		- this is now an array.
	- resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
		- so remove ung class
	
	
-----------------------------------------------------------------
f9v25 - Updating Recipe Serving - 
		- Increase or Decrease the serving --
		- ways of implementing delegation .matches

1. we create function in Recipe.js 
		- updateServings (type)  - type to pass a string which is the increase or decrease
2. we create event delegation in index.js
	elements.recipe.addEventListener('click', e => {
			if (e.target.matches('.btn-decrease, btn-decrease *'))
		});
	- we want to do something if the target matches .btn-decrease[1st arg]
	- , .btn-decrease * [2nd arg]  - [*] means -  and then any child.  
		- [*] - is like a unversal selector inside the element
3. now we implement it in our controller (index.js) 
4. we create updateServingsIngredients() in recipeViews.js to display it in UI

-----------------------------------------------------------
f9v26 - Building the shopping list model
	- How and why to create unique IDs using an external package
	- Differece  between Array.slice and Array.splice
	- More uses cases for Array.findIndex and Array.find

1. we create List.js in model folder  - for our shopping list
2. this.item = [] - all the item will be push here and stored
3. now we create a method to add item in the this.item
4. we create addItem(count, unit, ingredient) { 
		- count, unit, ingredien  = is our list of ingredient - to add to the shopping list
		- then push item
5. deleteItem(id) - that accepts the id. 
	- find index from the items 
		- const index = this.items.findIndex(el => el.id === id);
	- then splice(index, 1) - index is the position of the id, 1 to remove only 1.  
6. then updateCount(id, newCount) - find() the element itself
	- we want to find the element that has ID then look for item.count = newCount;
	- we loop through all the elements in the items, then select the one
		- that has the ID equal to the that we passed into the function
		- then we return that object and change the count property on it
7. now go to the controller (index.js) to call them

8. window.l  = new List();
	- so we have now access to the methods by attaching to the window object the list.

