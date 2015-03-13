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

## The code for our app_menu menu.js file somewhat annotated and placed inside of an IIFE (Immediately Invoked Function Expression) to prevent any clobbering of variables by other scripts

````javascript

;(function() { 

// all lists are set to invisible at the start

// getting back a list of .nav_list matches
var $nav_lists = $('.nav_list'); 

// getting back a list of .content_box matches
var $sections = $('.content_box');

var i = 0;  // this index corresponds to current list AND current CONTENT BOX 

// initially, this points to the first nav list 
var $current_list = $nav_lists.eq(i); // nav_lists[i]

// init first list
$current_list.toggleClass('visible');


$(window).on('scroll', function() {

  var window_offset,
      next_element_offset,
      prev_element_offset; 

  window_offset = $(window).scrollTop(); 

	// is there a next element?
    if ($sections.eq(i+1).height) {
      next_element_offset = $sections.eq(i+1).offset().top; 
    }
    
    // is 
    prev_element_offset = $sections.eq(i).offset().top;


  if (window_offset  > next_element_offset) {
    i++; // go to next content and next list item
    //console.log('NEXT');
   
    if ($sections.eq(i+1).height()) { 
      $current_list.toggleClass('visible'); 
      $current_list = $nav_lists.eq(i); 
      $current_list.toggleClass('visible'); 
    }
  }

  else if (window_offset > $('header').height() && window_offset < prev_element_offset) {
    //console.log('PREV');
    $current_list.toggleClass('visible');
    $current_list = $nav_lists.eq(--i); 
    $current_list.toggleClass('visible');
  }
  console.log(i);
});

}());

````

## stickynav annotated code

````javascript
// once the nav top offset is less than the window offset, apply nav.sticky class

// STATE MACHINE LOGIC

// if, else

// what determines whether the nav is 'stuck' or 'unstuck' ?
// STUCK : if nav is unstuck and the window offset surpasses nav offset, STICK
// UNSTUCK: if nav is stuck and nav offset surpasses window offset, UNSTICK 

var stuck = false; // 

var nav_offset = $('nav').offset().top; // this is a constant, define outside of func

$(window).on('scroll', function() {

  var window_offset = $(window).scrollTop(); 
  // window distance from top

  if ( !stuck && (window_offset > nav_offset) )
  {
    // once the window offset is greater than the nav offset
   // apply sticky class, which sets nav to position fixed at top
    $('nav').addClass('sticky'); // 
    stuck = true;
    //console.log('STICK!');
  }

  else if ( stuck && (nav_offset > window_offset) ) {
    $('nav').toggleClass('sticky'); 
    stuck = false;
    //console.log('UNSTICK!');
  } 

});

````
