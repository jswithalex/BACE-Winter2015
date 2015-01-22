## Best Practices

## Validate your HTML and CSS 

Sometimes, after a long time debugging JavaScript, it turns out that the issue you're seeing is in the HTML, not the JavaScript.  So make sure to validate your HTML when you can.

## Variable Names Matter, so does Design

There is a saying that goes something to the effect of "the hardest part of programming is naming things".
This isn't really a joke.  Variable Names are important and they are tied up in design (see 'Outline Your Plan first').  At the very least, you want them to be descriptive and easy to read so that you can reduce your cognitive load while trying to solve a problem. 

Here's an example:

```js
var isToggled = false;
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

## Use a standard HTML5 template for your projects


```html
<!doctype html>
<html lang="en">
<head>
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
