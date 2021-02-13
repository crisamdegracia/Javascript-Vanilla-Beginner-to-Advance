-- Final Project --

v6a. npm install webpack npm i webpack --save-dev 
	1a. --save-dev will save as dev dependecies of the project
v6b. npm i jquery  --save 
	2a. --save not as dev dependency but as dependency
	2b. npm uninstall jquery --save
v6c. npm i live-server --global 
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
		- by using npm run start - check mo ung naka set don
	2. error, ginagamit na daw sabi.
		- kasi nga sa VSCODE automatic narin na nag a-update.
		- so no need na siguro.
	3. napagana ko by changing  webpack-dev-server to webpack serve lang
		- from stack overflow