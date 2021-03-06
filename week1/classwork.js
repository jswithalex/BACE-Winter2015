/*
   Week 1 - Introduction to JavaScript Variables and the JavaScript Browser Console
   
   note: When you enter things into the javascript console, it prints them out for you. If you're writing JS in a 
   text file, you won't see the same behavior. You'll need to use alert() or console.log() to see text output.
*/

// this is a comment

// this gives you an error because the JS environment doesn't know what x is.
x

// this is a variable declaration. It tells the JS environment to create a variable 'x' and keep track of it.
// always put 'var' in front of any variable when declaring it, or bad things will happen in your code.
var x

// this is a variable definition. It tells the JS environment that x is now 15.
x = 15

// this is an alternate way to declare and define a variable in a single line.
var x = 4

// here, we are using the Math library's square root function to get the sqrt of x.
Math.sqrt(x)

// but that function doesn't change x
x

// here, y holds the value of the square root of x
var y = Math.sqrt(x)

// now we have x's square root stored in y
y

// this is a pop-up
alert('x is ' + x)

// this is how you log info to the console
// also, the '+' operator here is not adding a string to a number, it's converting the number stored in x
// into a string and putting the two strings together
console.log('x is ' + x);

// this isn't valid syntax because of the 2x expression.  
console.log('2 times x is ' + 2x)

// now we have a valid expression: 2*x.
console.log('2 times x is ' + 2*x)

// this converts each 'x' to a string, but in a way you might not expect
// it doesn't add the x and the x first
console.log('x + x is ' + x + x )

// by putting a bracket around the two x's, we can add them before converting them to a string
console.log('x + x = ' + (x + x) )

var firstName = 'alex'

var lastName = 'alex'

var fullName = 'alex' + 'ramsdell'

var fullName = 'alex' + ' ' + 'ramsdell'

// capitalizing the word MAX because it's a constant.  This is a stylistic convention.
// it makes it easier to tell that this value won't change 
var MAX = 12;

// this is an if else statement. if the first thing is not true, the code in the 'else' block runs.
// this is called control flow and it is essential to programming.  
if (fullName.length > MAX ) {
    console.log('Your name is too long!')
}

else {
  console.log('You are all set.')  
}

x = 4

y = '4'

// testing if x and y are the same, but not taking into account what type of variables they are
// aka, converting them to the same type and only caring about their values
y == x

// this way only returns true if they are of the same type and if they are equal in value
y === x

y = x

y === x

if (x === y) {
  console.log('x and y are of the same type and they are equal')
}
else {
  console.log('x and y are not equal'); 
}


