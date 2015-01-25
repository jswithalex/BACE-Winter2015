 // create an array of numbers
 var a = [1,2,3];
 
 // add another number
 a.push(4);
 
 //print out the array
 console.log(a); // prints [1,2,3,4]
 
 //print out each element of the array
 for (var i = 0; i < a.length; i++)
 {
   console.log(a[i]);
 }
 
 // remove last element 
 a.pop(); // gives you 4, the element removed from the end
 
 // show a
 console.log(a); // [1,2,3]
 
 // save the result of a.pop()
 var last = a.pop();
 console.log(a); // [1,2]
 console.log(last); // 3
 
 // add element to front of list
 a.unshift(0); // gives you 3, the number of elements now in the list
 console.log(a); // [0,1,2]
 
 // remove first element from front, aka shift array to left
 a.shift(); // gives you 0, the element you removed
 console.log(a); //[1,2]
 
 // 
 
 
