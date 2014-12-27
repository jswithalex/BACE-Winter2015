#### Best Practices

+ Here is the basic HTML5 structure we should all be using


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

+ put js scripts in order of dependency at the end of the body. For example, if your script, script.js, uses jQuery, put your
jQuery script tag above the script.js script tag

+ end every statement with a semicolon.
