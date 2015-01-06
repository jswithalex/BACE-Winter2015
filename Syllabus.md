## Week 1

## Plan
+ [introduction](#introduction)
+ [js console exercises](#js-console-exercises)
+ [the client-server story](#client-server-story)
+ [create a html page entirely with js](#create-a-html-page-entirely-with-js)


## Introduction

What do we do in this course?

We'll do a series of small, focused projects that extend a web page with JavaScript.  

+ create an html page with just javascript
+ html form validation
+ to-do list
+ menu hiding
+ timed effects
+ html5 canvas character
 
Additionally, we'll cover:

+ primitive data types, arrays and objects
+ assignment, statements and expressions
+ logic
+ functions 
+ program structure
+ best practices for readability, maintainability and optimization (time-permitting)
+ problem-solving

#### Why JavaScript?
  + HTML names the basic static elements for a web page. If a browser parses the html and sees a \<div\>...\</div\>, it will create a 'div' in the window.  When the page is loaded, what the browser received and could understand is what we see.

  + with HTML5, a lot more sophisticated and convenient features are built-in to the browser.
  + CSS provides the styling, also recently enhanced in CSS3
  + javascript allows us to exert fine-grained logical control over user and system actions and interactions. This is an abstract way of putting it, so here's an example:  say you're a newspaper and in your website's literature reviews you want to let the user get the definition of a word by hovering over it for a certain length of time.  With JavaScript, I can listen for a "word hover" (my words) and display a small window with a definition, as long as that element's "word hover" status is still true. 
  
#### THE JavaScript Environment
+ The Client-Server Story: 
    + we request a page from a web server specified at the link we put into our web browser.
    + the web server responds to our request by sending us back an HTML document
    + our web browser gets this document, parses it and creates a bunch of objects in a tree-shaped model out of it that we can then program against. With this model, you can use JavaScript to enhance what you write in your HTML file and CSS.  
    + TAKEAWAY: There are a lot of things going on at the ends of the client-server chain, but the data that concerns us is fairly light.  We aren't concerning ourselves with ***how*** the graphics are rendered.  We are writing somewhat light text files that describe how the objects the browser lets us have should look and where they should be and when.  So, most of the work is done for us. The HTML data is pretty light compared to what the web browsers themselves do.  
+ exploring the javascript console: selecting elements, changing their properties
+ javascript language basics: numbers, strings, true/false, arrays, expressions, statements

  #### JavaScript accesses the Web Browser via an interface called the DOM.  The DOM is a structure that holds the HTML information as it is 
  + [Dom Ref: MZ Developers Network](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
  + In short: The Dom 'makes web pages accessible to script' (above).
  + There is very important fourth element in our client-side picture so far. The DOM (document object model).  This is a model of the html page as it exists after being integrated into the browser. 
  
  
#### Week 2
+ **exercise**: form validation with html forms
+ writing html with javascript: DOM operations
+ composite data types: working with arrays
+ control flow mechanisms: for loops, if/else



#### Week 3
+ in-class project: drop-down menu
+ functions

#### Week 4
#### Week 5
#### Week 6
