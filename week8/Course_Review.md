## Review of Concepts

#### Preamble

This course showed you ways to extend your websites with JavaScript.  We've learned how to target and manipulate elements on a page, how to attach onclick elements to capture user interaction programmatically, how to write asynchronous scripts that fetch data using 3rd party API services, and how to build a more comprehensive application-style menu that reflects our location on the current page.  

Our endeavors overlapped with the fundmentals of JavaScript, but I should note that there are some foundational things that every JavaScript programmer should know that we haven't talked about due to the nature and objectives of the class.  Topics we didn't cover, or covered in very little detail,  include the inner workings of primitive and object type methods, scope, mutability/immutability, functions in depth, Object Oriented JavaScript and various inheritance models.  

I encourage you to explore those topics if you enjoyed working with JavaScript.  Mastering them will be essential and empowering if you want to build more complex JavaScript applications or scripts (for example, using the HTML5 canvas is one example of where you'd need to know the basics of Object Oriented programming).  See the [References]() section if you would like help finding pedagogically sound JavaScript learning resources.  


#### Language versus Implementation

JavaScript is actually an informal term for the various implementations of the ECMAScript language standard.  This standard is a specification to which the various JavaScript engines attempt to adhere.

This means that not all JavaScripts are created equally.  There are in fact many implementations of JavaScript, some more noteworthy than others.  A popular one is Google's V8 JavaScript engine, which is found in Chrome, node.js and V8.NET. 

With this said, there is a 'core' language specification that attempts to layout what the language can and can't do independent of any host environment. This is what people refer to as 'core' JavaScript.

[[Here's a list of JavaScript engines for the curious](http://en.wikipedia.org/wiki/List_of_ECMAScript_engines)]

#### Variables

A variable is a human-readable label for storing and referencing values that are important.  In a variable assignment, the variable name always occurs on the left hand side and the value always occurs on the right.

Think of the left hand side of an assignment statement as 'how to find the value', and the right hand side as 'the value itself'.  Note, the right hand side can be an expression made up of one or more literal values, or it can be one or more expressions involving variables that ultimately resolve to a single value.

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

## Strings

Strings are immutable sequences of characters.  Strings have a length property that is very useful.  You can use the '+' operator with strings, but not the '*' operator.

````javascript
var s = 'elephant';
var x = s + 14;
console.log(x); // elephant14

````

Strings have a length method that comes in very handy.  You access it like this:

````javascript
var e = 'elephant';
console.log(e.length); // 8
````

#### Arrays

Arrays are containers for storing 0 or more objects.  In JavaScript, an array is flexible in size and can contain a variety of different types of data.

````javascript
var things = [ 'book', 30, false, [] ];
console.log(things); // [ 'book', 30, false, [] ]
````

Arrays have properties and methods ('attached' functions):


````javascript
things.push(['one','two']); // 5
console.log(things); // [ 'book', 30, false, [], [ 'one', 'two' ] ]
console.log(things.length); // 5
````

The syntax for accessing items in an array is to use the array name with ````[N] ```` appended to the end, where ````N```` is either a non-zero integer or an expression that evaluates to a non-zero integer, e.g. ````things[2]````.

### Functions

**What is a Function?**

+ A **function** is a self-contained set of expressions and/or statements that are executed in the order they are defined when the function is called.
+ A function lets you 1) **reuse** code, and 2) write your programs with **modular** pieces of self-contained code.

A function needs a definition using the **function** keyword:

  ````javascript
  function robotGreeting()
  {
    var typeOfBeing = 'robot';
    console.log('I am a ', typeOfBeing,'.');
  }
  ````

And this is how you call a function:

````javascript
  robotGreeting() // "I am a robot."
````

**Function's Code versus a Function's Execution**

+ Think of a function's name like a **variable** that we create using **function** and not the **var** keyword. It binds a human-readable label to a set of statements in memory, effectively remembering them so that they can be called in the order you specified them in your function definition. 

+ In JavaScript, referring to ```` robotGreeting ```` by its variable name alone will ask the JavaScript engine to fetch the literal block of code that you defined. But it won't call/execute the function.

+ Putting a set of parentheses at the end of the function name, e.g. ````robotGreeting()```` , runs the code.
+ So, think of the ````()```` as an instruction to the JavaScript engine to execute the statements referred to by the ````robotGreeting```` variable name to which the ````()```` is attached.

````javascript
robotGreeting; // does not run the function
robotGreeting(); // runs the function, outputting 'I am a robot.'
var functionAlias = robotGreeting;
functionAlias(); // runs the function code inside robotGreeting.  
functionAlias; // does not run the function inside robotGreeting.

var badFunctionAlias = robotGreeting();
badFunctionAlias;  // does nothing. badFunctionAlias is a variable name that is bound to 'undefined'.
badFunctionAlias(); // error! badFunctionAlias is not a function. 
// Can you figure out why these last two lines of code don't work?

````

#### Comparisons

JavaScript gives us the '==' and '===' binary operators for performing comparisons between entities.  The first operator tests whether the value of the two entities are the same.  The second tests whether the value AND type of the two entities are the same.  Why use one over the other? Well, '==' will return true if the entities compared are, say, 0 and false.  The strict equality operator ('===') will return false if the types are different, so no implicit conversion of elements is performed.  The strict operator is definitely the safer way to program if you don't have a specific reason to use '=='.  

````javascript
console.log(1 == true); // true
console.log(1 === true); // false
console.log(null == undefined); //true
console.log(null === undefined); //false

````

#### Truthiness, Falsiness

**truthy**: objects, a non-empty string, any non-zero number

**falsy**: null, undefined, 0, empty string

The boolean values ```` true ```` and ```` false ```` are technically the only true or false values.  But JavaScript does a lot of implicit type conversion (be careful here), and we can use it to our advantage.  If we want to know whether a value is something other than null, undefined, an empty string, or zero, we can use our knowledge of true / false conversions in a clever way inside an if block.  Here's an example:

````javascript

// we don't know what mysterious_function returns
// lets see by assigning the result to a var called ... result!
var result = mysterious_function();

if (result) // aka. 'if result is not null, undefined, an empty string, or zero, run the block of code'
{
  console.log(result);
}

````

This works due to the nature of an if block.  'If' essentially is short for 'if the following expression is true'.  This means that the expression inside the if block eventually must ultimately reduce to a boolean value.  Thus, the terms are coerced / converted to a true or false value.  A given term's truthiness or falsiness is determined by whether it is convertable to ````true```` or ````false```` in a Boolean context.  ````console.log(result)```` and ````Math.sqrt(result)```` are familiar examples of contexts that do not require Boolean values to proceed.


#### The DOM

In this class, we used JavaScript in the browser environment.  We request a page via the browser, the webserver responds to our browser with information sent over the internet in the form of HTML.  The browser parses this HTML and uses the valid (note, the valid ones only) 'directives' to generate the requested elements in the user's browser.  The information that is sent between client and server is very thin, it's just markup and css etc, not the code to create the actual visual elements.  I assume that code is all C++ and internal to the browser.   

Anyway, when the browser receives this information and creates the validly requested elements, it also constructs a model of the page.  This is the DOM, or the Document Object Model. There is also something called the BOM, or Browser Object Model, which 

The DOM as we know it is like an API in that it is an interface between the user and the browser's internal information.  It provides us with all sorts of interesting and useful capabilities, like the ability to handle user interaction, to detect where an element is on the page, and to inspect object properties thoroughly.

The DOM is not the only environment for JavaScript, though.  Node.js is a server-side implementation of JavaScript.  


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

jQuery returns an array object containing 0 or more matching DOM nodes, which is to say it returns an object whether it found what you were looking for or not.  When your selector string doesn't match, the array is empty.   When it does match (even in the case of an id selector, which should technically only match the first element found on the page), it should have all of the elements that matched the query string on the given page.  The fact that the return value is always an object is important to note if you intend on using 'truthiness'/'falsiness' to your advantage when writing conditional statements that run only when jQuery returns elements.  Here's an example:

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

#### jQuery and manipulating CSS styles

I'd consider it a better practice to toggle your CSS rules with jQuery/JavaScript instead of adding properties to selected elements with JavaScript.  It keeps separation of style and behavior separate which makes projects easier to debug and less complex in general.  Additionally, manipulating the CSS directly with JavaScript gives you inline styles in your HTML, which at this point in time, is anathema unless you have some sort of extenuatingn circumstance that calls for it.  

````javascript

// prefer this 
$('header ul li').toggleClass('visible');

// to this
$('header ul li').css('display','block');


````

#### jQuery arrays

jQuery returns an array of elements, but the jQuery function doesn't support array indexing with these nodes like you'd expect with 'vanilla' JavaScript.  The proper way to index into the arrays returned is to use the .eq() method.  Here's an example:

````javascript
var divs = $('div');
console.log( divs.eq(1).css('height') ); // height of first div matched by your jQuery selector, e.g.  '140px';

````

#### Constructing Queries Programmatically

Constructing jQuery selections programmatically is sometimes necessary.  To do this, just remember that jQuery takes a string, like document.querySelector and document.querySelectorAll do.  You can construct longer strings by concatenating a string with any other value and the end result will become a string (via implicit conversion).

````javascript

var div = 'div';
var divs_on_page = $(div);
var divs_on_page_containing_ul = $(div + ' ul');

````

#### Caching in jQuery

jQuery does not come without a performance cost.  One method of keeping the performance hit of lookups under control is to cache your jQuery variables.  This means that, if possible, you do your jQuery selections once at the beginning, instead of using the $('body a') selector over and over again in your function code. Here's an example:

````javascript

var anchors = $('body a');
var body = $('body');

$(body).on('click', function() {
  console.log(body.text()); // log all the text in the body
});
````
