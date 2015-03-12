var $nav_lists = $('.nav_list'); 
var $sections = $('.content_box');

var i = 0;  // this index corresponds to current list AND current CONTENT BOX 
var $current_list = $nav_lists.eq(i); 
$current_list.toggleClass('visible');

$(window).on('scroll', function() {

  var window_offset,
      next_element_offset,
      prev_element_offset; 

  window_offset = $(window).scrollTop(); 
  
  if ($sections.eq(i+1).height()) {
    next_element_offset = $sections.eq(i+1).offset().top; 
  }
  if ($sections.eq(i).height()) {
    prev_element_offset = $sections.eq(i).offset().top;
  }

  if (window_offset  > next_element_offset) {
    i++; // go to next content and next list item
    console.log('NEXT');
   
    if ($sections.eq(i+1).height()) { 
      $current_list.toggleClass('visible',250); 
      $current_list = $nav_lists.eq(i); 
      $current_list.toggleClass('visible',250); 
    }
  }

  else if (window_offset > $('header').height() && window_offset < prev_element_offset) {
    console.log('PREV');
    $current_list.toggleClass('visible');
    $current_list = $nav_lists.eq(--i); 
    $current_list.toggleClass('visible');
  }
  console.log(i);
});
