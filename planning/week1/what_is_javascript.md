## What is our JavaScript Environment? Where does JS fit in with HTML and CSS?

The JavaScript we are going to be writing runs in a user's **web browser**.  It acts on the HTML and CSS elements that the browser has loaded. The browser could be Chrome, Firefox, IE, or Opera, any modern browser supports JavaScript.  

#### This is how HTML/CSS is rendered:

+ In Chrome, you click on a link that points to some address, **http://www.tmz.com/year/2001/posts/22**. 
+ Your web browser sends off a request to the server at **http://www.tmz.com** asking for the information at the link you clicked on.
+ The server that lives at **http://www.tmz.com** receives the request and if it has the requested resource **/year/2001/posts/22** and is allowed to serve it, it sends it back to the browser along with the type of content it is (html, plain text, json data, etc).  This type information determines how the browser displays the information.  
+ The browser takes that data and does two important things: 
    +  **1)** it renders the information according to the type of data it is -- if it's html, it renders it appropriately with the styles that are specified, if it's plain text, it renders it as plain text... and 
    +  **2)** it constructs a model of the data so that the client-side technologies can make use of it.


JS is used to manipulate the model that the web browser constructs from the data it receives for a given page request.  The browser implementation of JavaScript runs in what is called the browser 'sandbox' which is designed to prevent JavaScript code from running anything directly on your computer.  

## Our Workflow
We will primarily write JavaScript in a separate file and reference it in any HTML files that use it, although it is possible to enclose JavaScript code inside a script tag in the HTML head or body.

## Things we will learn a little bit about in addition to JavaScript in this course:

+ Client-Server Model and flow of Data
+ The DOM API
+ The Tree Data Structure




