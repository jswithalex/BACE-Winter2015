## Review of Concepts

#### Preamble

This course showed you ways to extend your websites with JavaScript.  Our endeavors overlapped with the fundmentals of JavaScript, but I should note that there are some foundational things that every JavaScript programmer should know that we haven't talked about due to time and theme constraints on the class.  Topics in the 'not covered' area are things like scope, mutability/immutability, Object Oriented JavaScript and inheritance.  I encourage you to explore those topics if you have enjoyed programming in JavaScript.  Mastering them will be essential to writing more complete JavaScript applications or scripts.  See the [References]() section if you would like help finding pedagogically sound JavaScript learning resources.  

#### Language versus Implementation

JavaScript is actually an informal term for the various implementations of the ECMAScript language standard.  This standard is a specification to which the various JavaScript engines attempt to adhere.

This means that not all JavaScripts are created equally.  There are in fact many implementations of JavaScript, some more noteworthy than others.  A popular one is Google's V8 JavaScript engine, which is found in Chrome, node.js and V8.NET 

[[Here's a list of JavaScript engines for the curious](http://en.wikipedia.org/wiki/List_of_ECMAScript_engines)]

#### Variables

A variable is a human-readable label for looking up stored values.  It is essential to assigning a value to a variable and always occurs on the left hand side of any assignment statement.

Think of the left hand side of an assignment statement as 'how to find the value', and the right hand side as 'the value itself'.  The right hand side can be an expression made up of one or more literal values, or it can be one ore more expressions involving variables that ultimately resolve to a single value.

````javascript
/* var HOW_TO_FIND_THE_VALUE = VALUE; */
var my_number = 4; // a gets the value 4.
Math.sqrt(my_number) = my_number // error because the Math.sqrt(my_number) is on the left hand side, but it isn't a valid label for any value
````

#### Data Types

Examples of data are the number ````12````, the number ````4.00````, the string ````'javascript'````, and the value ````false````.


Primitive Data Types: 

+ number
+ string 
+ boolean

Object Types:

+ Array
+ Function
+ Object

#### The DOM

In this class, we used JavaScript in the browser environment.  We request a page via the browser, the webserver responds to our browser with information sent over the internet in the form of HTML.  The browser parses this HTML and uses the valid (note, the valid ones only) 'directives' to generate the requested elements in the user's browser.  The information that is sent between client and server is very thin, it's just markup and css etc, not the code to create the actual visual elements.  I assume that code is all C++ and internal to the browser.   

Anyway, when the browser receives this information and creates the validly requested elements, it also constructs a model of the page.  This is the DOM, or the Document Object Model. 

The DOM as we know it is like an API in that it is an interface between the user and the browser's internal information.  It provides us with all sorts of interesting and useful capabilities, like the ability to handle user interaction, to detect where an element is on the page, and to inspect object properties thoroughly.

The DOM is not the only environment for JavaScript, though.  Node.js is a server-side implementation of JavaScript.  
