// once the nav top offset is less than the window offset, apply nav.sticky class

// STATE MACHINE LOGIC

// if, else

// what determines whether the nav is 'stuck' or 'unstuck' ?
// STUCK : if nav is unstuck and the window offset surpasses nav offset, STICK
// UNSTUCK: if nav is stuck and nav offset surpasses window offset, UNSTICK 

var stuck = false;
var nav_offset = $('nav').offset().top; // this is a constant, define outside of func

$(window).on('scroll', function() {

  var window_offset = $(window).scrollTop();

  if ( !stuck && (window_offset > nav_offset) )
  {
    // once the window offset is greater than the nav offset
   // apply sticky class, which sets nav to position fixed at top
    $('nav').addClass('sticky');
    stuck = true;
    console.log('STICK!');
  }

  else if ( stuck && (nav_offset > window_offset) ) {
    $('nav').removeClass('sticky'); 
    console.log('UNSTICK!');
    stuck = false;
  } 

});
al-air:animation alexr$ cat js/stickynav.js 
// once the nav top offset is less than the window offset, apply nav.sticky class

// STATE MACHINE LOGIC

// if, else

// what determines whether the nav is 'stuck' or 'unstuck' ?
// STUCK : if nav is unstuck and the window offset surpasses nav offset, STICK
// UNSTUCK: if nav is stuck and nav offset surpasses window offset, UNSTICK 

var stuck = false;
var nav_offset = $('nav').offset().top; // this is a constant, define outside of func

$(window).on('scroll', function() {

  var window_offset = $(window).scrollTop();

  if ( !stuck && (window_offset > nav_offset) )
  {
    // once the window offset is greater than the nav offset
   // apply sticky class, which sets nav to position fixed at top
    $('nav').addClass('sticky');
    stuck = true;
    console.log('STICK!');
  }

  else if ( stuck && (nav_offset > window_offset) ) {
    $('nav').removeClass('sticky'); 
    console.log('UNSTICK!');
    stuck = false;
  } 

});
