## Best Practices

## Learn Git

+ Git lets you take snapshots of the state of your work and it makes it easy to return to those states, or to just look at the files.  
+ It is a form of backup system as well, and a tool that encourages you to take risks (you can revert to previous changes if you really mess something up).  
+ You can make alternate branches of a project and switch between them. I do this with web-layouts so I can switch between multiple versions of a website by just typing a phrase on the command line.
+ If the thing you want to save is storable as a text file, then git supports version control over it.  This means that not only every programming projects but also written projects like novels, essays, and to some extent research papers (not so sure about equations), can be backed up and version-controlled. 

Git References: 
+ [Git - The Simple Guide](http://rogerdudler.github.io/git-guide/)
+ [Pro Git](http://git-scm.com/book/en/v2)


## Variable Names Matter (and so does Design)

There is a saying that goes something like "the hardest part of programming is naming things". It is so true because naming a variable affects how you think about it in relation to other variables in your program and also to the program's overall design.  So, how do we avoid this problem?  In the long term, you want to be thinking about the overarching design of your program so that the names are meaningful and non-contradictory.  In the short term, you want them to be descriptive and easy to read so that you can reduce your and others' cognitive load while trying to solve a problem. 

Here's an example:

```js
var menuIsToggled = false;
```
versus 
```js
var t = false;
```

The second one requires you to think and is ambigous. The first is perfectly clear.

Remember, we are dealing with 3 'languages' here:

+ HTML
+ CSS
+ JavaScript

So keeping your variable names consistent and naming them appropriately will reduce complexity as your html/css/javascript pages grow.

## Outline your plan first

Outline what you are planning to do with comments before you code anything.  For several reasons: 
+ This will help you review your assumptions to make sure they're sound before you execute it.  A big time-saver.
+ If you have a good idea of what needs to be done, then you won't be naming variables on the fly and thus renaming them in the middle when you realize that they don't adequately express what you're modeling with your code but instead are actively increasing the amount of thinking you need to do to solve a problem.
+ You have a reasonably-commented JavaScript file at the end.


## Type out code block syntax first

Type out the code blocks before you insert statements into them. JavaScript is function-heavy and functions require braces and brackets , so you'll be doing yourself a favor if you make sure they are correct head of time.  The easiest way to do that is to type the function 'shells' out first, e.g.

```javascript
$('container').hover( 
  /* mouse enter */
  function(){},
  /* mouseout */
  function(){}
);

```

and then put the statements you want to be executed inside:

```javascript
$('container').hover( 
  /* mouse enter */
  function(){
    console.log('mouse is entering an element of class container');
  },
  /* mouseout */
  function(){
    console.log('mouse is leaving an element of class container');
  }
);

```
## Validate your HTML and CSS 

Sometimes, after a long time debugging JavaScript, it turns out that the issue you're having is related to the HTML, not the JavaScript.  So make sure to validate your HTML when you can.  Also, having valid HTML is important for your **users**. If you're not writing valid HTML or testing it in every conceivable browser and browser version, users using browser/browser versions or users who rely on accessibility features will have a hard time using your website.  Moreover, it may annoy or exclude them!

## Use a standard HTML5 template for your projects


```html
<!doctype html>
<html lang="en">
<head>
  <title>BACE Winter 2015 HTML Template</title>
  <meta charset='UTF-8'>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
  <div container="">
  <div id="menu"></div>
  <div id="content"></div>
  <div id="footer"></div>
  </div>
  
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>

```

## Call your JavaScript 1) just before the close of the body tag, and 2) in order of dependency

+ Put js scripts in order of dependency at the end of the body. 
  + This ensures that they run as soon as the DOM is fully loaded. The DOM is the **Document , our API interface for controlling the page elements) 

In the example above, I'm putting my jQuery script tag above the script.js script tag because the processing is top-down and the script.js file depends on the jquery source.

## Keep JavaScript out of the HTML

Don't mix your javascript function calls with your HTML as in the following example:
```javascript
<button id="button1" onclick="return buttonClick()">Click me!</button>
```
Attach an event handler to the element in your script, like this:

```javascript
  function notify(){
    console.log('button1 was clicked');
  }
  
  document.getElementById('button1').onclick = notify;
```

## End every statement with a semicolon

JavaScript uses ASI (Automatic Semicolon Insertion) when it compiles your code.  Do the semi-colon insertion yourself to prevent getting results that you definitely didn't intend. Or \<sarcasm\>...become a master of ASI rules at the expense of your productivity, and also expect your code to break in other people's hands \<\\sarcasm\>.  The aim of ASI is to make the code cleaner, but you really should know what you're doing before you consider yourself good enough to drop the semicolons.
