// get a handle on each element of the form
var form = document.getElementsByTagName('form')[0];
var username = document.getElementsByTagName('input')[0];
var password = document.getElementsByTagName('input')[1];
var password_confirm = document.getElementsByTagName('input')[2];
var submitButton = document.getElementsByTagName('input')[3];
var error_box = document.getElementsByTagName('p');

// error message array
var errors = [];
var USER_MIN = 5;
var PW_MIN = 8;

submitButton.onsubmit = function(e) {


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
    e.preventDefault();
  }

}
