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

#### Objects 

The JavaScript Object is a container for data that lets you store values and look them up by a **key**, which is always a string (it can be a variable that evaluates to a string).  Objects are sort of a 'blob' of data that isn't guaranteed to be in any order, but allows very fast access to data via the string **key**.


If I wanted to store a bunch of data about a person, I could put it in an object, using humanly readable string labels for all of the data items.  Here's an example, which uses a fictional founding father named Franklin Benjamin:

````javascript
    var person = {}
    person['firstName'] = 'Franklin';
    person['lastName'] = 'Benjamin';
    person['age'] = 275;
    console.log(person['firstName']) // 'Franklin'
    console.log(person['Franklin']) // undefined, no key by that name
    console.log(person['age']) // 275
````

You can also declare object with dot syntax, as long as the key doesn't contain special characters (e.g., '-'):

````javascript
    var person = {}; // initializing the object with '{}', the empty object literal
    person.firstName = 'Franklin'; // assigning firstName using dot notation
    person.lastName = 'Benjamin'; // assigning lastName using dot notation
    person.age = 275;
    person.is-nice = true; // error: invalid left-hand assignment 
    person['is-nice'] = true; // no problem here!
    console.log(person.is-nice); // error: nice is not defined ( compiler is trying to subtract 'nice' from 'is' )
    person.is = 4
    var nice = 3
    console.log(person.is-nice); // 1 --- why do you think this logs '1' ?
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

jQuery is a DOM manipulation library that is pure JavaScript.  It was written to solve cross-browser inconsistencies.  It exists as a function in your code once you've sourced it with the script tag.  Today, more and more developers, especially developers who are writing single page apps who are concerned about performance, argue that the browser inconsistencies do not pose the same sort of problem any more so jQuery may not be worth the extra kilobytes in download heft. However, it is widely in use, it really speeds up productivity and it has great AJAX (to be explained later) functions, so you should know how to use it if you want to work with JavaScript.  See the [demo](https://github.com/jswithalex/BACE-Winter2015/blob/master/week5/jQuery_Demo/demo.md) for common jQuery uses.

#### CDNs

CDN is short for Content Distribution Network. CDNs are distributed duplicates of a server that offer the same service. It means that we can request a copy of jQuery and the nearest CDN server will give it to us. Netflix is a good example of this sort of content delivery strategy, which explains how they can effectively serve their content to so many people.  

The main benefit of a CDN for our purposes is that, since they are a public shared resource, it increases the likelihood that the end user has already downloaded the jquery source.  We are using the CDN's popularity to our advantage.

#### APIs 

###### A definition

An API is an interface that an organization offers so that its users can take advantage of that organization's resources in a structured and supported way.  Here's a fabricated example to illustrate the value of an API: If you wanted to get the top stories from the New York Times, you could take the DIY approach and do what is called 'web scraping' which means that you essentially download the New York Times' main page and comb through the page source to isolate the important HTML tags that have the information that you want, eg. the H1 tags and their subheadings. 

###### A more direct approach

If you are building an app that depends on this information, you won't get very far because parsing HTML is a very unreliable method. If the HTML changes, your app won't pull in any data.  Also, you might just get your IP address banned from the site.  A better method, if possible, would be to use the (made up) New York Times API, which lets you access the information more directly by providing an interface for you to do queries on their actual database. You send a request to the url for the New York Times API with the proper query strings embeded in it in order to get the data you want.  

###### Requirements and Terms

Today, many APIs require an **API key** that you put in your search query string. It lets the organization tie you to the particular resource you are using, preventing anonymouse abuse of the service and allowing them to offer various levels of service, ranging from free to many levels of paid service.

APIs also often require you to read their terms of service which describe proper use of the API.  Here's an [example](http://openweathermap.org/appid).

#### Accessing an API

This is usually done in JavaScript via AJAX calls.  Ajax provides an asynchronous method of getting data from a remote server.  

**Asynchronous** means that the function is called but the JS engine doesn't wait until it finishes to move on.  This means that you can't rely on when the information will be returned.  Our programming approach has to change so that we aren't trying to access the API data before it gets to us.

It returns the data in the format you've requested (usually JSON or JSONP), and you turn that data into information that your app delivers.

#### What is JSON ?

I won't go too much into what JSON is, per se, because I think that's not in the scope of our class.  

**A brief, practical definition**: JSON is short for JavaScript Object Notation.  It uses JavaScript's object syntax as a format for transmitting data to remote services.  We need to convert this data when we receive it from a server.





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
