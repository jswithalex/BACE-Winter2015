# Review

### Variables

A **variable** represents a binding to a value when the program runs.  When you assign a value to a variable, you are telling the JavaScript environment to hold onto that value in memory and not to let that memory address be overwritten or freed, aka 'garbage collected'.  This binding allows us to reference and act upon that value during the program's execution.

```javascript
var b = Math.sqrt(10); // b is now a reference to the value returned by Math.sqrt(10)
var a = Math.sqrt(8); // a is now a reference to the value returned by Math.sqrt(8)
console.log(b); // referencing b later in the program
console.log(a); // referencing a later in the program

````

### Functions

**What is a Function?**

+ A **function** is a self-contained set of expressions and/or statements that are executed in the order they are defined when the function is called.
+ A function lets 1) you **reuse** code, and 2) write your programs with **modular** pieces of self-contained code.
+ There are two major ways of considering your functions:
    + **internally**: Test your functions to ensure that they produce the results we expect.
    + **externally**: Ignore the interal details of a function and instead think of them as 'black boxes' about which you know nothing other than the simple fact that function x does y.

A function needs two things to be of use to you, the programmer:

1 ) It needs to be **defined** as a function using the **function** keyword.
  ````javascript
  function robotGreeting()
  {
    var typeOfBeing = 'robot';
    console.log('I am a ', typeOfBeing,'.');
  }
  ````
2 ) It needs to be **called**

````javascript
  robotGreeting() // "I am a robot."
````

**Function's Code versus a Function's Execution**

+ Think of a function's name like a **variable** that we create using **function** and not the **var** keyword. It binds a human-readable label to a set of statements in memory, effectively remembering them so that they can be called in the order you specified them in your function definition. 

+ In JavaScript, referring to ```` robotGreeting ```` by its variable name alone will ask the JavaScript engine to fetch the literal block of code that you defined. But it won't call/execute the function.

+ Putting a set of parentheses at the end of the function name ( ````robotGreeting()```` ) runs the code.
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
+ A **method** is a function.
+ A function is not necessarily a method ( see the diagram above).
+ A **method** is always ***bound to an object***.
+ The object to which the **method** is attached is called it's **context**.

**METHOD TEST**

If you see a function call that involves a **.** somewhere in the variable name, that's a method.

**FUNCTION TEST**

If you don't see a **.** in the function call, it's not a method

````javascript
car.drive() // a method
robotGreeting() // not a method

```` 

````javascript 
document.getElementById('#main-menu'); // returns at most one Dom node.
document.getElementsByClassName('menu-item'); // returns an array of Dom nodes.
document.querySelector('#main-menu li'); // returns one match for the provided selector
document.querySelectorAll('#main-menu li'); // returns an array containing all matches of the provided selector
````
