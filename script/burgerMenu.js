$('.burger, .overlay').click(function () {
  $('.burger').toggleClass('active');
  $('.overlay').toggleClass('show');
  $('.mai-menu').toggleClass('show');
  $('body').toggleClass('overflow');
});

$('.sub-menu-toggle').click(function () {
  $(this).toggleClass('active');
  $(this).next('.mobile-sub-menu').toggleClass('show');
});
