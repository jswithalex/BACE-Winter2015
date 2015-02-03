#### Functions

First, here is what a section of code involving a function would look like:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**What is the purpose of a function?**

A function is a reusable section of code that contains 1 or more statements. Every time it runs, it executes those exact same statements, so you don't need to rewrite them every time you need to run them. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**What do I need to do to write my own functions?**

1. you need a reason for the function (e.g. to square a number)
2. write the definition of the function
2. call it

the definition is the part where you give a sort of blueprint for what happens when the function is called. 

first line: 'function <name> ( <arg1>, <arg 2>, ... )'
e.g. function squareN(n)

the function body: 1 or more statements inside '{}', e.g.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
   var product = n*n;
   alert(product);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

so here is the whole function definition again

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function squareN(n)
}
   var product = n*n;
   alert(product);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Some functions have return values. What is that?**

a return value looks like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
return n;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

when the function encounters this, it immediately exits and replaces the function call with the value returned.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function squareN(n)
}
   var product = n*n;
   return product;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

before the function runs, the code is

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var n = 2;
var result = squareN(n); // this will be replaced with return value

and after, it is

var n = 2;
result = 4; // function call replaced by return val

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The truth is, every function has a return value, but if you dont explicitly set one, it defaults to undefined. So if you took the first function and assigned its result to a variable, that result variable would be undefined.  if you added a final return value statement to the end, it would instead hold the value of its argument, squared.

On Sun, Jan 25, 2015 at 11:59 AM, Alexander Ramsdell <alexramsdell@gmail.com> wrote:
Hi Everyone,

Just a reminder that this week's reading is Chapter 2 of Eloquent JavaScript, which covers the basic elements you'd find in a program.  Don't worry so much about the case - switch construct at this point.  The information for the next week's reading/exercises will always be up on the github's readme on the day of class.

I think Thursday night's class was probably a lot to take in.  I want to suggest that you to try to experiment with javascript in a web browser once a day.  It's the best way to learn and more importantly retani this stuff.  This is my little spiel:

Javascript is not easy, especially if you're new to programming.
Don't worry too much about keeping everything in your head, just make sure that you're getting something out of the class and / or the reading.  
Force your self to dive into the web environment (e.g.  by doing things like the below).
My suggestion for an exercise you could do would be something like this:

goal: install a click handler that hides the google main image when you click on it.

steps:
1. open web dev tools for your browser
2. go to www.google.com
3. find the 'elements' section in your developer console so you can see the page elements and the CSS styles they have
4. navigate through the HTML elements while looking at the actual web page to see them highlighted
5. locate the 'google' image and see if it has an id
6. it does. it's 'hplogo'
7.  install a click handler on the document variable.  Because this represents the entire HTML document, by installing a click handler on it, you're ensuring that wherever you click on the page, you're going to be clicking on the body. 

var mainImage = document.getElementById('hplogo');
document.onclick = function() {
  mainImage.style.display = "none";
}

8. Then, if you want to get crazy, you could try to get it to toggle (i.e., to appear if it's hidden or to disappear if it's visible at the time of your click).

var imageIsVisible = true;
var mainImage = document.getElementById('hplogo');

document.onclick = function() {
  
  if (imageIsVisible === true)
  {
    mainImage.style.display = "none";
    imageIsVisible = false;
  }
  else
  {
    mainImage.style.display = "block";
    imageIsVisible = true;
  }
}
