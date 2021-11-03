$( document ).ready(function() {
    // adding active class for portfolio
    $('.list-btns-1 li').click(function() {
    $('.list-btns-1 li.active').removeClass('active');
    $(this).addClass('active');
    });
    // MixItUp Plugin
    let mixer = mixitup('#porto');
    // Scroll TO Top Button
  let scrollToTop = $('.up-buttom');
  let nav =$('.navbar');
  $(window).scroll(function(){
    if($(window).scrollTop() >= 500){
      scrollToTop.addClass('active1');
      nav.css({position: 'fixed'});
    }else{
       scrollToTop.removeClass('active1');
       nav.css({position: 'sticky'});
    }
  });
});

