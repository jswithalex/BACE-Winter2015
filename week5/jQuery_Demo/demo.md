## jQuery Examples



###### The Base jQuery function
````javascript
jQuery(); // the jQuery function. It takes as arguments a CSS selector string.
$(); // this is the same thing as above.  It is more prevalent due to it's brief, distinct syntax.
````

###### Selecting Elements

You select elements in the same way that you'd do with ````document.queryStringAll```` in 'vanilla' JavaScript.
````javascript
$("body *"); // return all descendants of the body tag in an array

$("#city a"); // return all anchor tags that descend from a dom node with the id 'city'
````


###### Adding a Class to an Element and Toggling it Off/On

**Note:** Adding inline styles to DOM elements is possible with JS and jQuery, but it isn't a good practice.  You are effectively **coupling** your javascript with your style, which means that the JavaScript is now involved in the styling of your page, where it is conventially accepted to use it exclusively for behavior (to the extent that this is possible). When a site gets large enough and/or has enough people working on separate parts of it, a JS change can then have unexpected consequences on the style.  The solution here is to toggle CSS selectors with JS/jQuery and not to add inline styles with ````$('body').css('background','red');````.  This way, the JS controls whether that style is engaged or not, but has no control over the style specifics, which are located in the CSS as expected.

````javascript
// add the .blue CSS class to the body
$('body').addClass('blue'); // bg is blue
$('body').toggleClass('blue') // bg is white
$('body').toggleClass('blue') // bg is blue
$('body').toggleClass('blue') // bg is white

````
###### adding a new element to a list 
````javascript
// add the .blue CSS class to the body
$('ul').append('<li>four</li>'); // equivalent to setting the innerHTML to '<li>four</li>'

````

###### Log Each Element Returned by a jQuery selection
````
$.Each takes two arguments: an array and a function to apply to each element of the array

         $('li')
jquery   returns    function
method   a list     applied to returned list
         of li's
   |       |          | 
   v       v          v
````
````javascript
$.each(  $('li'),  function(index,value){
  console.log(index,value)
});
// 0 : <li>one</li>
// 1 : <li>two</li>
// 2 : <li>three</li>
````

###### Remove All List Items
````
         $('li')
jquery   returns    - function gets each element
method   a list     - refers to it as this
         of li's    - deletes this
   |       |          | 
   v       v          v
````
```javascript
$.each(  $('li'),  function(){
  $(this).remove();
});
````

###### Create Nodes and Append them
````javascript
var ul = '<ul><li>test</li></ul>'
$('body').append('<div>' + ul + '</div>');
````

###### Accessing and Changing Text 
````
// gets first element of each ul with li elements
$('li:first-child').text() // returns each ul's first li element's text
$('li:first-child').text('modified first list element');
````

###### Change Text in Each List Item
````
         $('li')
jquery   returns    - function gets each element
method   a list     - refers to it as this
         of li's    - sets this.text() to be 'element ' plus the current $(this).text() value 
   |       |          | 
   v       v          v
````

```javascript
$.each(  $('li'),  function(){
  $(this).text('element ' + $(this).text());
});
````

###### Getting JSON data from a Geolocation Server using their API

````javascript
$.getJSON('http://ip-api.com/json', function(data) {
    var lat, lon;
    lat = data['lat'];
    lon = data['lon'];
    var text = 'You are roughly located at ' + lat + ',' + lon + '.';
    $('body').append('<h3>' + text + '</h3');
});
````
