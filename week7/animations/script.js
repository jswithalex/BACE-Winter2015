// move to side and fade out completely 
$('.box').on('mouseenter mouseleave', function() {
  $('.box').animate({
    'left': '+=350px',
    'opacity':'0.0',
    'transform':'rotate(90deg)',
  }, 3000);
});

$('.box').on('mouseenter mouseleave', function() {
  console.log('click');
  $('.box').animate({
    'left': '+=50px',
    'opacity':'0.0',
  }, 1000);
});
