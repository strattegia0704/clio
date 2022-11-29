import $ from 'jquery'

$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(25).fadeOut('slow'); 
  $('body').delay(25).css({'overflow': 'visible'});
})