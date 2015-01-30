#### Glossary of JavaScript Terms We have Used So Far


**Expression**: A sequence of one or more operations that results in single value after it is evaluated, e.g.:

```javascript
  Math.sqrt(9) + 4;
  // Math.sqrt(9) becomes 3
  // 4 is 4
  // 3 + 4 is 7, a single value
  // but as it is, this isn't saved anywhere, so it is discarded
  
```

**Statement**: an instruction to the computer to assign a name (on left) to a value (on right)

```javascript
  var sum = Math.sqrt(9) + 4;
  // Math.sqrt(9) is 3
  // 4 is 4
  // 3 + 4 is 7
  // sum is a variable
  // the value at the location of that variable is 7
  // statements change the state of the program
```
**Variable**: A name for the value at a particular **location** in memory.  Variables are useful because they give us a way to keep track of the container of a value and not the value itself. This way, we can change the value and retain the 'handle' to the container.

```javascript
var a = 14;
a = a / 2;
// 'a' is the name that the JavaScript engine uses to look up a location in memory
// we access the value of 'a' by referencing 'a' in an expression, like the one below
if (a > 5) {
  console.log(a);
}
// 7

```

**String**: A sequence of characters.

```javascript
var f = 'Douglas';
typeof f
// "string"
```

**Operator**: A built-in (e.g., you get it for free) function-like object that can change the value of one or more variables
example operators:
```javascript
  1 + 4
  // 5
  'abc' + 4 + 5
  //'abc45'
  'president' + ' of the ' + 'USA'
  //'president of the USA'

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
// 12
```
