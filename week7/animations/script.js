// JQUERY .ANIMATE() EXAMPLES


/*
// FUNCTION CALL FORMAT
$('element').animate(
  {
    'css_name':'css_property',
    'css_name':'css_property',
    'css_name':'css_property',
  },
  duration_length_in_ms,
  function() {
    optional call_back statements
  }
);
*/

// Turn a square into a circle
$('.box').on('click', function() {
  $('.box').animate({
    'left': '+=350px',
    'top': '+=100px',

  },
  300,
  function()
  {
    $(this).css({'border-radius':'50%'});
  });
});

/*
// MOVE TO SIDE AND CALL A FUNCTION AT END
$('.box').on('mouseenter', function() {
  $('.box').animate({
    'left': '+=350px',
  }, 
  300, 
  function()
  { 
    $(this).css({'height':'100%'});
  });
});
*/

/*
// MOVE TO SIDE ON HOVER IN 
$('.box').on('mouseenter', function() {
  $('.box').animate({
    'left': '+=350px',
    'opacity':'0.0',
  }, 3000);
});
*/

/*
// MOVE TO SIDE ON HOVER IN AND OUT 
$('.box').on('mouseenter mouseleave', function() {
  $('.box').animate({
    'left': '+=350px',
    'opacity':'0.0',
  }, 3000);
});
*/

/*
// MOVE TO SIDE AND FADE OUT COMPLETELY 
$('.box').on('mouseenter mouseleave', function() {
  $('.box').animate({
    'left': '+=350px',
    'opacity':'0.0',
  }, 3000);
});
*/
