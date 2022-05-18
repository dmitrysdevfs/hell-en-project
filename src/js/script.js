$(document).ready(function () {
    $('.slider').slick({
        speed: 750,
        infinite:false,
        waitForAnimate: false,
        centerMode: true,
        fade: true,
        arrows:true,
        asNavFor: ".slider-pagination"
    });
    $('.slider-pagination').slick({
        infinite:true,
        asNavFor: ".slider",
        centerMode:true,
        variableWidth:true
    });
});