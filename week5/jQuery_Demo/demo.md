## jQuery Examples



**Note:** Adding inline styles to dom elements is possible with JS and jQuery, but it isn't advised.  You are **coupling** your javascript with your style when they should ideally be as independent of each other as possible. JavaScript is supposed to control the ***behavior*** of the page.

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


#### adding a class to an element and toggling it off and on
````javascript
// add the .blue CSS class to the body
$('body').addClass('blue'); // bg is blue
$('body').toggleClass('blue') // bg is white
$('body').toggleClass('blue') // bg is blue
$('body').toggleClass('blue') // bg is white

````
#### adding a new element to a list 
````javascript
// add the .blue CSS class to the body
$('ul').append('<li>four</li>'); // equivalent to setting the innerHTML to '<li>four</li>'

````

#### do something to each element returned by a jQuery selection
````javascript

jquery  returns    function
method  a list     applied to returned list
   |      |          | 
   v      v          v
$.each( $('li'),  function(index,value){
  console.log(index,value)
});
// 0 : <li>one</li>
// 1 : <li>two</li>
// 2 : <li>three</li>

````


###### Appending Elements to an existing Element
