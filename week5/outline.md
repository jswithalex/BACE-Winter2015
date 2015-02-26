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

Objects are a data structure that supports accessing values by a **key string**.  If I wanted to store a bunch of data about a person, I could put it in an object, using humanly readable string labels for all of the data items.  Here's an example:

````javascript
    var person = {}; // initializing the object with '{}', the empty object literal
    person['firstName'] = 'Alex';
    person['lastName'] = 'Ramsdell';
    person['age'] = 84;
    
````

#### Objects vs Arrays

Objects, like arrays, are containers for data. Objects and arrays have some similarities: both are objects in JavaScript, both allow a similar syntax for accessing their data. But they ultimately serve different purposes. Arrays are useful in situations where the order of elements is important. Objects are useful containers for logically grouping data together under a single name, but data that you do not need to access in a particular order.


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
