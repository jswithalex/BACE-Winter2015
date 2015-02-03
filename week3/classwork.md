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
//var submit_button = document.getElementsByTagName('input')[3];
var error_box = document.getElementsByTagName('p')[0];

// capitalized variables stand for values that are assumed to be constant
var USER_MIN = 5;
var PW_MIN = 8;

// by passing 'e' into the function, we are subsequently able to use 'e' to get information about
// the onsubmit event, such as 1) the element was originally clicked, 2) its node name

form.onsubmit = function(e) {
  // here, we both create a new array to put new errors in
  // and two, we overwrite the array that existed before
  var errors = [];

  // here we erase the error messages for the user from the error_box
  // we are saying the innerHTML of the error box is nothing, or an empty string.
  error_box.innerHTML = "";

  // WHAT ARE THE SUCCESS CONDITIONS?
  // five or more chars in username
  // eight or more chars in passwords
  // passwords need to be identical

  if ( (username.value.length >= USER_MIN) && 
       (password.value.length >= PW_MIN) && 
       (password.value === password_confirm.value)
     )
  {
         // event fires as it should if there aren't any basic problems
         // with the password lengths, matching and the username length
     console.log('you submitted!');
  }

  else {

    // there were problems, so use the 'e' variable to prevent form submission
    e.preventDefault();

    // check for specific conditions so we can generate a useful error msg

    // ERROR MESSAGE LOGIC
    // notice that we use multiple IF's which lets us  get all the error messages
    // if we only wanted to add at most one to the array, we would use IF, then ELSE IF, ELSE IF ... ELSE
    if (username.value.length < USER_MIN)
        // we use the errors array .push method to add the message to the array
        errors.push('usernames must be at least ' + USER_MIN + ' characters');
    if (password.value.length === 0)
    errors.push('Empty password field!');
    if (password_confirm.value.length == 0)
    errors.push('Please confirm your password!');
    if (password.value !== password_confirm.value)
    errors.push('Your passwords don\'t match');

    // now we create a list to hold these errors 
    var ul = document.createElement('UL');
    //    i'm creating a <ul></ul> above.  no <li>error 1</li> yet.

    // Don't worry about the 'for (var i = 0; i<errors.length; i++)' construct here, just know that it is saying
    // something like "for every error in the errors array, execute the following statements"
    for (var i = 0; i<errors.length; i++)
    {
        // create a list item to hold the error message
        // aka, make an <li></li>
        var li = document.createElement('li');

        // create a text node using the text of the error message
        // aka createTextNode("empty password field!");
        var text = document.createTextNode(errors[i]);

        // now put "empty password field!"  inside the <li></li> (that's what appendChild means)
        // result: <li>"empty password field!"</li>
        li.appendChild(text);

        // now put the newly generated LI element, <li>"Empty Password Field!"</li>,
        // inside the <ul></ul> we created above 

        // so after the first error message is created, we have
        // <ul>
        //   <li>"usernames must be at least ' + USER_MIN + ' characters"</li>
        //   <li>"Empty Password Field!"</li>
        //   <li>"Please Confirm you Password!"</li>
        // </ul>
        ul.appendChild(li);

    }
    
    // give the error box a class that outlines the error box
    error_box.className = "error";


    // all errors have been generated, so append the UL that holds them all into the error box
    // 
    //     <p class="error-box">
    //        <ul>
    //          <li>"usernames must be at least ' + USER_MIN + ' characters"</li>
    //          <li>"Empty Password Field!"</li>
    //          <li>"Please Confirm you Password!"</li>
    //        </ul>
    //      </p>
    error_box.appendChild(ul);
  }

}
```
