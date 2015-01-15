## Best Practices

## Variable Names Matter

There is a saying that goes something like "the art of programming is the art of naming your variables".
This isn't really a joke.  Variable Names are important.  You want them to be descriptive and easy to read so that you can reduce your cognitive load while trying to solve a problem. 

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

So keeping your variable names consistent and naming them appropriately will be a great when your html/css/javascript pages grow.

## Outline your plan first

Outline what you are planning to do with comments before you code anything.  This will help you review your plan to make sure it's sound before you execute it.  Big time saver. Plus, you have a fully commented JavaScript file.

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

4) Use a standard HTML5 template for your projects


```html
<!doctype html>
<html lang="en">
<head>
  <meta charset='utf-8'>
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

5) put js scripts in order of dependency at the end of the body. In the example above, I'm putting my jQuery script tag above the script.js script tag because the processing is top-down and the script.js file depends on the jquery source.

6) Don't mix your javascript function calls with your HTML as in the following example:
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

6) end every statement with a semicolon (there are a few safe exceptions);
