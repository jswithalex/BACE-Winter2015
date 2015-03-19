## Review of Concepts

#### Preamble

This course introduced you to the fundamentals of extending your websites with JavaScript.  This overlaps with the fundmentals of JavaScript, but I should note that there are some foundational things that every JavaScript programmer should know that we haven't talked about due to time and theme constraints on the class.  Topics in the 'not covered' area are things like scope, mutability/immutability, Object Oriented JavaScript and inheritance.  I encourage you to explore those topics if you have enjoyed programming in JavaScript.  See the [References]() section if you would like help finding pedagogically sound JavaScript learning resources.  

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

#### 
