# Review

### Variables

A **variable** represents a binding to a value when the program runs.  When you assign a value to a variable, you are telling the JavaScript environment to hold onto that value in memory and not to let that memory address be overwritten or freed, aka 'garbage collected'.  This binding allows us to reference and act upon that value during the program's execution.

```javascript
var b = Math.sqrt(10); // b is now a reference to the value returned by Math.sqrt(10)
var a = Math.sqrt(8); // a is now a reference to the value returned by Math.sqrt(8)
console.log(b); // referencing b later in the program
console.log(a); // referencing a later in the program

````

### Arrays

Arrays are containers for storing 0 or more objects.  In JavaScript, an array is flexible in size and can contain a variety of different types of data.

````javascript
var things = [ 'book', 30, false, [] ];
things.push(['one','two']);
console.log(things); // [ 'book', 30, false, [], [ 'one', 'two' ] ]
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


### Dom Methods
````
A Venn-Diagram of Functions and Methods
_________________________
|     Functions         |
|                       |
|   ----------------    |
|   |              |    |
|   |    Methods   |    |
|   |              |    |
|   ----------------    |
|                       |
-------------------------

````
A few things about methods:
+ A method is a function.
+ A function is not necessarily a method ( see the diagram above).
+ A method is always bound to an object.

**METHOD TEST**

If you see a function call that involves a **.** somewhere in the variable name, that's a method.

**FUNCTION TEST**

If you don't see a **.** in the function call, it's not a method

````javascript
car.drive() // a method
document.getElementById('quick-links') // a method
robotGreeting() // not a method

```` 

````javascript 
document.getElementById('#main-menu'); // returns at most one Dom node.
document.getElementsByClassName('menu-item'); // returns an array of Dom nodes.
document.querySelector('#main-menu li'); // returns one match for the provided selector
document.querySelectorAll('#main-menu li'); // returns an array containing all matches of the provided selector
````
