var form = document.forms[0];

// DEFINE YOUR FUNCTIONS HERE

function isEven(n)
{
  return n%2 === 0;
}

function squareN(n)
{
  return n*n;
}


// END OF FUNCTION DEFINITIONS

form.onsubmit = function(e) {

  e.preventDefault();
  var input_field = document.getElementById('input_field');
  var results = document.getElementById('results');

  var num = input_field.value;
  var result;

  if (!num)
    return;

  // WRITE YOUR CONDITIONAL LOGIC HERE

  if ( isEven(num) )
  {
    var result = squareN(num);
    results.innerHTML = result;
  }
  else
  {
    results.innerHTML = num + ' is not even';
  }



  // END OF YOUR CONDITIONAL LOGIC
}
