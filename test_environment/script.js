/*
	A Simple Test Environment for Learning Function Basics
*/
var form = document.forms[0];
console.log = function(msg)
{
	var results = document.getElementById('results');
	results.innerHTML = msg;
}
// DEFINE YOUR FUNCTIONS HERE



// END OF FUNCTION DEFINITIONS

form.onsubmit = function(e) {

  e.preventDefault();
  var input_field = document.getElementById('input_field');
  var results = document.getElementById('results');

  var num = input_field.value;
  var result;

  if (!num)
    return;

  // CALL FUNCTIONS HERE

    

  // END CALL FUNCTIONS
}
