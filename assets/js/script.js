$(document).ready(function(){
    // window load
    $(window).load(function() {
        $('#loader-wrapper').fadeOut();
    });


 // nav scrol
$(".nav-bar-box ul li a").click(function () {
    // scroll body
    $("html, body").animate(
        {
            scrollTop: $("#" + $(this).data("scrol")).offset().top
        },
        1100
        );
    $(".header-section .nav-bar-box").removeClass("openMenuClass");
    $(".overlay").hide();
    $("body").removeClass("body-over");
});


// openMenu
$(".header-section .open-menu i").click(function(){
    $(".header-section .nav-bar-box").addClass("openMenuClass");
    $(".overlay").show();
    $("body").addClass("body-over");
});


// closeMenu
$(".header-section .nav-bar-box .exit-icon i, .overlay").click(function(){
    $(".header-section .nav-bar-box").removeClass("openMenuClass");
    $(".overlay").hide();
    $("body").removeClass("body-over");
});


// display input value number
$('#number-input').keyup(function(e)
                                {
  if (/\D/g.test(this.value)){
    this.value = this.value.replace(/\D/g, '');
  }
});


// scroleBotton

$(window).scroll(function() {
    if($(window).scrollTop() >= 400) {
        $(".scrollBottn").fadeIn(400);
    }else{
        $(".scrollBottn").fadeOut(400);
    }
 });

 $(".scrollBottn").click(function(){
    $("html, body").animate(
        {
            scrollTop: $(".header-section").offset().top
        },
        600
        );
 })


 // aos

AOS.init();


});