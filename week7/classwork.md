## Glowing Box using %2 trick and recursion

````javascript
var op = [0.1,1];
var i = 0;
$('.box').on('click', animation);

function animation() {
  $('.box').animate(
	  {'opacity': op[i++%2] },
	  // i++
	  1000,
	  animation
	);
}
````
