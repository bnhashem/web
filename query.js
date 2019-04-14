// Loading Screen 
$(window).load(function() {
    
    // Loading Elements 
    $(".overlay .spinner").fadeOut(2000, function() {
        $(this).parent().fadeOut(2000, function() {
            // Show the Scroll
    $("body").css("overflow", "auto")
            $(this).remove();
        } );

    } );
} );

// Cashing The Scroll Top Element 
var ScrollButton = $("#scroll-top");
$(window).scroll(function() {
if ($(this).scrollTop() >=700 ) {
    ScrollButton.show();
} else {
    ScrollButton.hide();
}

});
// Click On Button To Scroll Top 
ScrollButton.click(function() {
    $("html,body").animate({scrollTop:0}, 600);
});

// 1. Simple mode, it styles document scrollbar:
$(function() {  
    $("body").niceScroll();
});