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

Objects, like arrays, are containers for data. Objects and arrays have some similarities: both are objects in JavaScript, both allow a similar syntax for accessing their data. But they ultimately serve different purposes. Arrays are useful in situations where the order of elements is relevant. Objects are useful containers for logically grouping data together under a single name, but data that you do not need to access in a particular order.


I could put the same data in an array, but see if you can guess why it's not the best data structure for this:

````javascript
    var person = []; // initializing the object with '[]', the empty array literal
    person.push('Franklin');
    person.push('Benjamin');
    person.push(84);
    console.log(person);
    // [ 'Franklin', 'Benjamin', 275 ]

````


The problem with using an array for this example is that we need to remember the position of each item in order to know what the data ***means***.  With the object, we can look up 'firstName' in the person object and know that what we are getting back is the first name.

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
