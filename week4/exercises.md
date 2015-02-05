## Week 4 Exercises

#### 1) Replace the Google Main Image with a Beach Ball

| resources |
|:-------------|
| Beachball image URL: http://www.clipartbest.com/cliparts/McL/LXB/McLLXBXca.svg |

+ go to www.google.com
+ open your JavaScript Console (⌘ + Option + J in chrome, ⌘ + Option + K in Firefox)
+ Find the ID attribute of the main Google Image by right clicking on the image and clicking 'inspect element'
+ create a variable that holds the Google main image element (using a document.getElement_______ function)
+ give the image node a new **src** attribute by setting the variable's .src attribute to the URL of the beach ball image 

#### 2) Functions that use other Functions

| resources |
|:-------------|
| [My Functions Introduction](https://github.com/jswithalex/BACE-Winter2015/blob/master/week4/functions.md) |
| [A simple test environment](https://github.com/jswithalex/BACE-Winter2015/tree/master/test_environment) |

+ download [the course repo](https://github.com/jswithalex/BACE-Winter2015/archive/master.zip) and put your functions in 'BACE-Winter-2105/test_environment/script.js'.  There are clearly commented sections where your code should go.
+ Write a function called **isEven** that takes a number and if it is even, returns true. If it is false, it returns false.
+ write a function called **squareN** takes input and squares that number and **logs the result** to the console, but does not return anything
+ finally, write a script that uses these two functions in the following way:
  + if n is even, then square the result and log it to the console
  + if n is odd, log 'n is odd' to the console
  + hint: you might approach this with more clarity if you write out what you need to do before you start coding
