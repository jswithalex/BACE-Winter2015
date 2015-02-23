## Review

#### Variables

A **variable** represents a binding to a value when the program runs.  When you assign a value to a variable, you are telling the JavaScript environment to hold onto that value in memory and not to free it or 'garbage collect' it.  This binding allows us to reference and act upon that value during the program's execution.

```javascript
var b = Math.sqrt(10); // b is now a reference to the value returned by Math.sqrt(10)
var a = Math.sqrt(8); // a is now a reference to the value returned by Math.sqrt(8)
console.log(b); // referencing b later in the program
console.log(a); // referencing a later in the program

````

#### Functions

A **function** is a self-contained set of expressions and/or statements that are executed when the function is called.

A function needs two things to be of use to you, the programmer:

+ it needs to be **defined** as a function using the **function** keyword.

````javascript
function robotGreeting()
{
  var typeOfBeing = 'robot';
  console.log('I am a ', typeOfBeing,'.');
}
````
+ it needs to be **called**

````javascript
  robotGreeting() // "I am a robot."
````

+ A function's name is a variable like any other (except we use the **function** and not the **var** keyword to identify a function). It binds a human-readable label to a set of statements in memory, effectively remembering them so that they can be called in the order you specified them in your function definition. 

+ In JavaScript, referring to the function by its variable name alone gets you the block of code that you defined.
+ Putting a set of parentheses at the end of the function name runs the code

````javascript
robotGreeting; // does not run the function
robotGreeting(); // runs the function
var functionAlias = robotGreeting;
functionAlias(); // runs the function code inside robotGreeting.  
functionAlias; // does not run the function

var badFunctionAlias = robotGreeting();
badFunctionAlias(); // error! badFunctionAlias is not a function, it's an undefined variable. Can you figure out why?

````

````javascript
robotGreeting ---> |  1) var typeOfBeing = 'robot';
                   |  2) console.log('I am a ', typeOfBeing,'.');
                   |  3) (return undefined;) 
````
#### Dom Methods

````javascript 
document.getElementById('#main-menu'); // returns at most one Dom node.
document.getElementsByClassName('menu-item'); // returns an array of Dom nodes.
document.querySelector('#main-menu li'); // returns one match for the provided selector
document.querySelectorAll('#main-menu li'); // returns an array containing all matches of the provided selector
````
