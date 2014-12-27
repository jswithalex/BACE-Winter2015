#### Best Practices

+ put js scripts in order of dependency at the end of the body. For example, if your script, script.js, uses jQuery, put your
jQuery script tag above script.js
```html
<doctype! html>
<head>
</head>
<body>
<div container="">
<div id="menu"></div>
<div id="content"></div>
<div id="footer"></div>
</div>
<script src="googlecdn.jquery.min.1.1.11"></script>
<script src="js/script.js"></script>
</body>
</html>

```

+ end every statement with a semicolon.
