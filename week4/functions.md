#### Introduction to Functions

First, here is what a section of code involving a function would look like:

```javascript
// first, define the function
function squareN(n)
{
    // this is a statement inside of a function
    alert(n*n);
}
// 
var n = 2;
// then call it with 'n' as an argument
// we could have passed it the literal, 2
squareN(n);
// alerts 4
```


**What is the purpose of a function?**

A function is a reusable section of code that contains 1 or more statements. Every time it runs, it executes those exact same statements, so you don't need to rewrite them every time you need to run them. 

```javascript


// first, define the function
function squareN(n)
{
    // this is a statement inside of a function
    alert(n*n);
}

var n = 2;
// then call it
squareN(n);
// alerts 4
```


**What do I need to do to write my own functions?**

1. you need a reason for the function (e.g. to square a number)
2. write the definition of the function
2. call it

the definition is the part where you give a sort of blueprint for what happens when the function is called. 

first line: 'function <name> ( <arg1>, <arg 2>, ... )'
e.g. function squareN(n)

the function body: 1 or more statements inside '{}', e.g.

```javascript
{
   var product = n*n;
   alert(product);
}
```

so here is the whole function definition again

```javascript
function squareN(n)
}
   var product = n*n;
   alert(product);
}
```

**Some functions have return values. What is that?**

a return value looks like this:

```javascript

return n;
```

when the function encounters this, it immediately exits and replaces the function call with the value returned.

```javascript
function squareN(n)
}
   var product = n*n;
   return product;
}
```

before the function runs, the code is

```javascript

var n = 2;
var result = squareN(n); // this will be replaced with return value

and after, it is

var n = 2;
result = 4; // function call replaced by return val

```

The truth is, **every function has a return value**, but if you dont explicitly set one, it defaults to undefined. So if you took the first function and assigned its result to a variable, that result variable would be undefined.  if you added a final return value statement to the end, it would instead hold the value of its argument, squared.

