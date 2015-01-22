## Week 2 topics
+ review of week 1 (variables, strings, operators, conditionals)
  + Address concepts from reading, questions
  + **Exercise**: 
    + For each of the following brackets in the format i've specified below, create a variable for that word and then concatenate them into a sentence and print it
    + **format**: My name is **FIRST_NAME** **LAST_NAME**.  I am **AGE** years old.  My favorite thing to do is **FAVORITE_THING**.

+ Arrays: What Are They, How Are They Used?

  + Collection of elements in an ordered sequence, aka positional
  + first element is found at location 0. 
  + The location of a value in an array is called the 'index'.
  + Think about the difference between counting (cardinal, or natural numbers) and positional indexing

  ``` javascript
  var names = [];
  names[0] = 'Sam'; //first element, but found at [0]
  names[1] = 'Robert'; // second element, but found at [1]
  names[2] = 'Jane';
  // alternate way of declaring array and defining it in one statement
  var names = ['Sam','Robert','Jane'];
  ```
  + How are arrays similar to strings?
    + sequence of elements with length
    + you can access individual elements with array syntax, e.g. s[0]
  + How are arrays different from strings?
    + arrays can hold all types of things, not just characters 
    + arrays are READ-WRITE after you create them
      + this means that if you are changing an array element, the array is still the same array
    + strings are READ-ONLY after you create them
      + if you try to change one or more characters, it won't be saved (but you don't get an error).
      + you need to recreate the string to change just one character
      ```javascript
      var s = 'abc';
      s[0] = 'z';
      console.log(s);
      // 'abc'
      var t = ['a','b','c'];
      t[0] = 'z';
      console.log(t);
      // ['z','b','c']
      ```
  + ARRAY METHODS 
    ```javascript
      var animals = ['dog','giraffe','human'];
    ```
    + **push**: add an element to end of array
    ```javascript
      animals.push('gazelle');
      // ['dog','giraffe','human','gazelle']
    ```
    + **pop**: remove last element of array
    ```javascript
      animals.pop('gazelle');
      // ['dog','giraffe','human']
    ```
    + **shift**: remove element from front
    ```javascript
      animals.shift();
      // ['giraffe','human']
    ```
    + **unshift**: add element to front
    ```javascript
      animals.pop('gazelle');
      // ['gazelle','giraffe','human']
    ```
    + **Exercise**: 
    + redo the exercise above but create an array 
```javascript
FORM: My name is <FIRST NAME> <LAST NAME>.  I am <AGE> years old.  My favorite thing to do is <FAVORITE THING>.

```

+ HTML forms review
  + purpose of a form
  + purpose of each form element
  + how we access the values of the elements
  
+ Form Validation
  + why form validation?
  + (small digression: other ways of preventing user error)
  + how do we go about 'validating' user input?
  
+ Dom Tree Structure (Time Permitting)
  + parent / child & sibling relationships
