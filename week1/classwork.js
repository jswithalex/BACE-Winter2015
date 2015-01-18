/*
   Week 1 - Introduction to JavaScript Variables and the JavaScript Browser Console

*/

// this is a comment

// this gives you an error because the JS environment doesn't know what x is.
x

// this is a variable declaration. It tells the JS environment to create a variable 'x' and keep track of it.
var x

// this is a variable definition. It tells the JS environment that x is now 15.
x = 15

// this is an alternate way to declare and define a variable in one statement.
var x = 4

// here, we are using the Math library's square root function to get the sqrt of x.
Math.sqrt(x)

// but that function doesn't change x
x

// here, y holds the value of the square root of x
y = Math.sqrt(x)

// now we have x's square root stored in y
y

x = Math.sqrt(x)

x

alert('x is ' + x)

console.log('x is ' + x);

console.log('2 times x is ' + 2x)

console.log('2 times x is ' + 2*x)

console.log('x + x is ' + x + x )

console.log('x + x = ' + (x + x) )

var firstName = 'alex'

var lastName = 'alex'

var fullName = 'alex' + 'ramsdell'

var fullName = 'alex' + ' ' + 'ramsdell'

x = 4

y = '4'

y == x

y === x

y = x

y === x

if (x === y) {
  console.log('x and y are of the same type and they are equal')
}
else {
  console.log('x and y are not equal'); 
}
}

