(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.hidden-codeher').hide().each(function(i){
      $(this).delay(300 * i).fadeIn();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
