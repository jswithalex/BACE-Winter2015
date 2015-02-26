## Weather & Location API

#### Outline of Topics
+ Objects 
+ Objects vs Arrays
+ jQuery
    + relationship with JavaScript
    + comparisons with JavaScript code
    + common functions
+ CDNs for script sourcing
+ API definition
+ JSON
+ Functions
+ AJAX and Asynchronous events
+ Callback function
+ GET requests
+ namespacing with ````var app = app || {}:````

#### Objects 

Objects are a data structure that supports accessing values by a **key string**.  
The technical definition of an object is an associative array, meaning a container for **mapping property names to values**.

```javascript
PROPERTY NAME ==> VALUE // YES
VALUE ==> PROPERTY NAME // NO
dictionary['value'] -- X --> 'property name'

person['firstName'] // 'Franklin'
person['Franklin'] // undefined, no key by that name

````

If I wanted to store a bunch of data about a person, I could put it in an object, using humanly readable string labels for all of the data items.  Here's an example, which uses a fictional founding father named Franklin Benjamin:

````javascript
    var person = {}; // initializing the object with '{}', the empty object literal
    person['firstName'] = 'Franklin'; // assinging using bracket syntax for ['firstName']
    person['lastName'] = 'Benjamin';
    person['age'] = 275;
    console.log(person);
    // { firstName: 'Alex', lastName: 'Ramsdell', age: 84 }
````
A syntactic variation for assigning data to an object goes like this:

````javascript
    var person = {}; // initializing the object with '{}', the empty object literal
    person.firstName = 'Franklin'; // assigning firstName using dot notation
    person.lastName = 'Benjamin';
    person.age = 275;
    console.log(person);
    // { firstName: 'Alex', lastName: 'Ramsdell', age: 84 }
````

The difference between the two is that the second method of assigning values to an object will not allow certain characters in the key, such as '-'.  Because the key string isn't yet a string, it needs to be parsed, and the JavaScript engine won't parse '-' as a dash, but as the minus operator.  so ...

````javascript

    person.firstName; // yes
    person['firstName']; // yes
    person['first-name']; // yes
    person.first-name; // no, error: 'name is not defined'

````


#### Objects vs Arrays

Objects are a special sort of array that does not guarantee order but allows you to look up data by a string instead of a non-negative integer. It is important to consider their difference in practical use. Arrays are appropriate when the sequential order of elements is important. Objects are useful containers for logically grouping data together under a single name, but data that you do not need to access in a particular order.


I could put the same Franklin Benjamin data in an array, but see if you can guess why it's not the best data structure for this:

````javascript
    var person = []; // initializing the object with '[]', the empty array literal
    person.push('Franklin');
    person.push('Benjamin');
    person.push(84);
    console.log(person);
    // [ 'Franklin', 'Benjamin', 275 ]

````


The problem with using an array for this example is that I need to personally remember the position of each item in order to know what the data ***means*** (i.e. if this 'name' looking thing is a first name or last name).  With an object, we can write data to an object under the label of 'firstName' and thus we will later know that what we are getting back is the first name.


#### jQuery

jQuery is a JavaScript library written to solve cross-browser inconsistencies.  It is a pure JavaScript library that exists as a function in your code once you've referred to it with the script tag.  Today, more and more developers, especially developers who are writing single page apps who are concerned about performance, argue that the browser inconsistencies do not pose the same sort of problem any longer, and that jQuery is not worth the extra kilobytes in download heft. However, it is widely in use, it really speeds up productivity and it has great AJAX (to be explained) functions, so you should know how to use it if you want to work in JavaScript.  Here is a primer on the basic jQuery functions:

###### The Base jQuery function
````javascript
jQuery(); // the jQuery function. It takes as arguments a CSS selector string.
$(); // this is the same thing as above.  It is more prevalent due to it's brief, distinct syntax.
````
###### Selecting Elements

You select elements in the same way that you'd do with document.queryStringAll in 'vanilla' JavaScript.
````javascript
$("body *"); // return all descendants of the body tag in an array

$("#city a"); // return all anchor tags that descend from a dom node with the id 'city'
````

###### The basic jQuery function
````javascript
$('body').addClass('blue'); // 
$('body').toggleClass('blue');

````

#### Comprehension Questions 

+ How does jQuery differ from JavaScript?
+ What is a major reason to use AJAX?
+ What does a callback function allow us to do that a 'regular' function doesn't?
+ How does offering an official API benefit both the developer and the site offering the service?
    + Are there any downsides to this model?

#### Important Links for This Exercise
+ [Register with OpenWeatherMap to get an API Key](http://openweathermap.org/register)
+ [How to Use the OpenWeatherMap API Key](http://openweathermap.org/appid#use)
+ [Get Weather for One Location](http://openweathermap.org/forecast#one)
+ [JSON output example for OpenWeatherMap](http://api.openweathermap.org/data/2.5/weather?q=London,uk)
