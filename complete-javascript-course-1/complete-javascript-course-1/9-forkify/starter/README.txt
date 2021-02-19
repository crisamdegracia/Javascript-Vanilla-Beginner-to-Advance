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
