#### Best Practices

1) keep your variable names consistent.  We are dealing not with one technology or programming language*, but 3 +:
+ HTML
+ CSS
+ JavaScript

So keeping  your variable names consistent and naming them appropriately will be a great help to you.

2) Outline what you are planning to do with comments before you code anything.  This will help you review your plan to make sure it's sound before you execute it.  Big time saver. Plus, you have a fully commented JavaScript file.

3) type out the function blocks before you insert statements into them. JavaScript is function-heavy, so you will really need to keep your closing brackets and parentheses straight.  The easiest way to do that is to type the function 'shells' out first, e.g.

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

6) end every statement with a semicolon (there are a few safe exceptions);
