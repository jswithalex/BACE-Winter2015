#### HTML Tree Exercises

**TASK**: Turn a description of a tree structure into HTML

**description**:

a \<span\> tag nested inside of a \<p\> tag

**description**:

a \<body\> tag that contains a \<header\>, which itself contains an \<h2\> tag.

**description**:


a \<ul\> tag has 4 \<li\> children. each of those children has an anchor tag, except the last one, which is just text.


#### FINAL IN-CLASS CODE FOR THE FORM VALIDATION

```javascript
// get a handle on each element of the form
var form = document.getElementsByTagName('form')[0];
var username = document.getElementsByTagName('input')[0];
var password = document.getElementsByTagName('input')[1];
var password_confirm = document.getElementsByTagName('input')[2];
var submitButton = document.getElementsByTagName('input')[3];
var error_box = document.getElementsByTagName('p')[0];

// error message array

var USER_MIN = 5;
var PW_MIN = 8;

form.onsubmit = function(e) {

  var errors = [];
  error_box.innerHTML = "";
  
  // what are our conditions for success?
  
  // five or more chars in username
  // eight or more chars in passwords
  // passwords need to be identical
  
  if ( (username.value.length >= USER_MIN) && 
       (password.value.length >= PW_MIN) && 
       (password.value === password_confirm.value)
     )
  {
  	 console.log('you submitted!');
  }
  
  else {
  // prevent form submission by canceling the event
    e.preventDefault();
    
    // check for specific condition so we can generate a useful
    // error message
    if (username.value.length < USER_MIN)
    	errors.push('usernames must be at least ' + USER_MIN + ' characters');
	if (password.value.length === 0)
		errors.push('empty password field!');
	if (password_confirm.value.length == 0)
		errors.push('please confirm your password!');
	if (password.value !== password_confirm.value)
		errors.push('your passwords don\'t match');
    
    var ul = document.createElement('UL');
    
    
    // for each element in the errors array
	for (var i = 0; i<errors.length; i++)
	{
		// create a list item to hold the error message
		var li = document.createElement('li');
		// create a text node
		var text = document.createTextNode(errors[i]);
		li.appendChild(text);
		// 
		ul.appendChild(li);

	}
	error_box.appendChild(ul);
  }

}

```
