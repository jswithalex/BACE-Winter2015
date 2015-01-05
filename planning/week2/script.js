var inputField = document.getElementById('input-field');
var submitButton = document.getElementById('submit-button');
var todolist = document.getElementById('to-do-list');
var todolistitem = document.querySelectorAll('ul#to-do-list li');

submitButton.onclick = function() {
  var todotext = inputField.value;
  var todotextnode = document.createTextNode(todotext);
  var li = document.createElement('li');
  li.className = '';
  li.appendChild(todotextnode);
  li.onclick = function() {
    this.parentNode.removeChild(this);
  }
  todolist.appendChild(li);
}
