#### Glossary of JavaScript Terms We have Used So Far

**Variable**: A name for the value at a particular **location** in memory.  The value of a variable is subject to change, which is why variables are useful.

```javascript
var a = 14;
// 'a' is the name that the JavaScript engine uses to look up a location in memory
// we access the value of 'a' by referencing 'a' in an expression, like the one below
console.log(a);
// 

```

**String**: A sequence of characters.

```javascript
var f = 'Douglas';
var l = 'Crockford';
typeof f
// "string"
```

**Operator**: A built-in (e.g., you get it for free) function-like object that can change the value of one or more variables
example operators:
```javascript
+ -> add two numbers **or** concatenate two strings (we call an operator with this dual functionality 'overloaded');
- -> subtract two numbers
```

```javascript
var f = 'Douglas';
var l = 'Crockford';

console.log(f + ' ' + l);
//"Douglas Crockford"

var min = 0;
var max = 12;
var delta = max - min;
console.log(delta);
```
