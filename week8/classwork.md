## Review of Concepts

#### Preamble

This course showed you ways to extend your websites with JavaScript.  Our endeavors overlapped with the fundmentals of JavaScript, but I should note that there are some foundational things that every JavaScript programmer should know that we haven't talked about due to time and theme constraints on the class.  Topics in the 'not covered' area are things like scope, mutability/immutability, Object Oriented JavaScript and inheritance.  I encourage you to explore those topics if you have enjoyed programming in JavaScript.  Mastering them will be essential to writing more complete JavaScript applications or scripts.  See the [References]() section if you would like help finding pedagogically sound JavaScript learning resources.  

#### Language versus Implementation

JavaScript is actually an informal term for the various implementations of the ECMAScript language standard.  This standard is a specification to which the various JavaScript engines attempt to adhere.

This means that not all JavaScripts are created equally.  There are in fact many implementations of JavaScript, some more noteworthy than others.  A popular one is Google's V8 JavaScript engine, which is found in Chrome, node.js and V8.NET. 

With this said, there is a 'core' language specification that attempts to layout what the language can and can't do independent of any host environment. This is what people refer to as 'core' JavaScript.

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

Anyway, when the browser receives this information and creates the validly requested elements, it also constructs a model of the page.  This is the DOM, or the Document Object Model. There is also something called the BOM, or Browser Object Model, which 

The DOM as we know it is like an API in that it is an interface between the user and the browser's internal information.  It provides us with all sorts of interesting and useful capabilities, like the ability to handle user interaction, to detect where an element is on the page, and to inspect object properties thoroughly.

The DOM is not the only environment for JavaScript, though.  Node.js is a server-side implementation of JavaScript.  
#### Truthiness, Falsiness

The boolean values ```` true ```` and ```` false ```` are technically the only true or false values.  But JavaScript does a lot of implicit type conversion (be careful here), and we can use it to our advantage.  If we want to know whether a value is something other than null, undefined or zero, we can use an if block like this:

````javascript

var result = mysterious_function();
if (result)
{
  console.log(result);
}

````

#### How to Call your JavaScript scripts

In our class, I've suggested we put ```` <script></script>```` tags at the very end of your document's body section, in order of dependency. The accepted method used to be to wrap your code in a $(document).ready() function.  The $(document).ready() function fires once the entire DOM is loaded, meaning that all of the resources you've requested are available.  But the $(document).ready() function may not actually fire as soon as the DOM is loaded, so, for our purposes (i.e., we are not writing JS applications which may make more intensive and varied resource demands), putting our scripts at the bottom of the body ensures that our JS scripts immediately fire after the DOM elements are all loaded.  

#### Accessing Elements in the DOM

Methods that use 'vanilla' JavaScript:

document.getElementById(id); // finds at most one element
document.getElementsByClassName(className);
document.getElementsByTagName(tagName);
document.querySelector('body a');
document.querySelectorAll('body a');

Methods that use the jQuery JavaScript library:

$('#main') // returns selects the element with an id of main 

#### jQuery

$() is shorthand for jQuery(). Both represent the jQuery library function that we use to target elements on our pages. 

Finding elements

The jQuery syntax for targeting elements on the page is similar to the document.querySelector() method available to us in 'vanilla' JavaScript.  jQuery takes in a **query** in the same form that you use to style elements with CSS.  

In CSS, if you wanted every element with a class name of 'nav-item' inside of the body, you would use the following rule format:

````css
body .nav-item
{
  list-style-type: underline;
}
````

in jQuery, if you wanted to target all items inside the body with the classname 'nav-item', you would call the jQuery function like this:

````javascript
$('body .nav-item').addClass('underline');
````

Notice the difference between the initial thing we pass jQuery, which is in the form of a CSS rule, and the way we specify a classname as such.  With the ````.addClass()```` method, we are adding the **name** of a class, not the CSS notation, ````'.underline'````.  

#### jQuery Return Values

jQuery returns an array object whether it found what you were looking for or not.  When your selector string doesn't match, the array is empty.   When it does match (even in the case of an id selector, which should technically only match the first element found on the page), it should have all of the elements that matched the query string on the given page.  This is important to note if you intend on using 'truthiness'/'falsiness' to your advantage when writing conditional statements that run only when jQuery returns elements.  Here's an example:

````javascript
var uls = $('body > ul');
if (uls) {
  console.log('uls!');
}
else {
  console.log('no uls');
}
````

The code above will always run the first block in the conditional because jQuery returns objects always.  Objects always are coerced to the value ````true```` when appropriate.  What you need to do is query the object's length, which is a simple data type and as such obeys 'truthiness' and 'falsiness' coercion.  This is how you would leverage type coercion with objects:

````javascript
var uls = $('body > ul');
if (uls.length) { // using .length here. if length is 0, the else block runs
  console.log('uls!');
}
else {
  console.log('no uls');
}
````
