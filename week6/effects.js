/*

  Fahrenheight to Celcius Conversion (and vice versa)

  C = (F -32) * 5/9
  F = C * 9/5 + 32

*/

var isFahr = true;
var units = {'f':'F°','c':'C°'};
var tempNode = $('#temp');
var unitNode = $('#unit');


function tempConv() {
  console.log('here');
  var convertedTemp;
  // target the #temp id with jQuery
  var temp = $('#temp').text();
  var temp_float = parseFloat(temp);

  // this is a 'trick'
  // in JS, if you try to turn a string into a number and it fails
  // you get 'NaN' as a return value.
  // in JS, NaN is the only 'value' that is never equal to itself. 
  // if temp_float isn't equal to itself, it's not a number 
  // we need a number, so if it's not a number, we return false
  if (temp_float != temp_float)
  {
    // the point is to catch any non numeric data
    // i.e. if the function is called before the data is returned
    return false;
  }

  if (isFahr)
  {
    convertedTemp = (temp_float - 32) * (5/9);
    $('#unit').text(units['c']);
  }
    else
  {
    convertedTemp = (temp_float * (9/5)) + 32;
    $('#unit').text(units['f']);

  }

  isFahr = !isFahr;
  $('#temp').text(convertedTemp.toFixed(2));

}


$('#temp').on('click', tempConv);
