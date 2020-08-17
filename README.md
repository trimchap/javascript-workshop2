Javascript in a nutshell

Saturday, August 15, 2020
7:13 PM

JavaScript

Where does it run?
	(1) Browsers
		○ used to only run in browsers
		○ every browser has a javascript engine that can execute code
			§ Firefox: SpiderMonkey
			§ Chrome: V8
	(2) Node (since 2009)
		○ in 2009 - Ryan Dahl took the open source javascript engine in chrome and embedded it inside a C++ program
		○ a C++ program that includes chrome's V8 javascript engine
		○ we can run javascript code outside of a browser
		○ we pass our javascript to Node for execusion 
		○ we can build the backend four our web and mobile applications
		
	Browsers & Node provide a run-time environment for our code

What is the difference between JavaScript and ECMAScript?
		○ ECMAScript is a specification
		○ JavaScript is a programming language that confirms to this specification
		○ ECMA is an org that takes care of the specification, since 1997
			§ 1997 - V1
			§ 2015 - ES2015/ES6 - lots of new changes
			§ yearly releases since 2015
What's Typescript?
Yep.  And then everyone realized that Javascript is too loosy goosey so then you put Typescript on top of that so you have basically a “strongly” typed javascript. it’s still sloppy but not as sloppy as plain ol js (ecmascript 5) - Jon

   
SET UP DEVELOPMENT ENVIRONMENT

	1. download Visual Studio Code
	2. download Node @ http://nodejs.org
	3. open vscode

Run JavaScript in HTML
	1. create index.html
	2. in it press ! and TAB to create boiler plate html, then save
	3. open Extensions tab on the left and search for live server
	4. Live Server - lightweight web server we'll use to host our web application
	5. install Live Server then
	6. restart visual studio code
	7. highlight index.html, right click, select Open with Live Server
	8. add a <script></script> element - either to the <head> section or the <body> section
	9. Best Practice: is to put it at the end of the <body> section after all the other elements
		a. page is processed from top to bottom, and you don't want to delay the load of the page with your code
		b. also your code will probably use the elements on the page, so putting the script element at the bottom of the page guarantees that all the elements have been rendered by the browser
		c. exception: 3rd party code that needs to be in the header
	10. write code between <script></script>
	11. all JavasScript statements should be delimited with a ;
	12. // prepended comment
	13. Bring up the Console
		a. either right click and select Inspect, then Console tab
		b. shortcut: ALT-CMD-i

Separation of Concerns - html separate from JavaScript
	HTML - about content - index.html
	JavaScript - all about behavior - index.js
	<script src="index.js"></script>
	
Run JavaScript in Node
	1. open terminal and type:  node index.js
	2. OR use integrated terminal in VS Code. also type: node index.js

Variables / Constants
	1. avoid using the var keyword. problems
	2. use let instead
	3. by default, variables are defined as undefined if they are unassigned
	4. let firstName = 'Trish'; // stick to camel notation 
Variable Types
	Primitives / Value Types
		String
		Number
		Boolean
		undefined - if you don't initialize a variable it's value is undefined
		null - if you want to explicitly clear the value of the variable
			let name = 'Trish';         // string literal
			let age = 55;               // number literal
			let isApproved = true;      // boolean literal
			let firstName = undefined;  // uncommon that we'd do this
			let selectedColor = null    // clear the value
		Dynamic Language - variable types can change
			§ the type of variables are determined at runtime based on the value you assign to them
			§ typeof
	Reference Types
		Objects - 
			let person = {
				name: 'Trish',
				age: 55
			};
			console.log(person); 
		Arrays
			let selectedColors = ['red', 'blue', 'green', 12]
		Functions ( parameter & arguments)
			function greet(firstName) {
				console.log('hello ',firstName)
			}
			
			// call function
greet('John')
