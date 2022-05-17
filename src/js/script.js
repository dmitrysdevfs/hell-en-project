$(document).ready(function () {
    $('.slider').slick({
        speed: 750,
        infinite:false,
        initialSlide: 5,
        waitForAnimate: false,
        centerMode: true,
        fade: true,
        arrows:true,
        asNavFor: ".slider-pagination"
    });
    $('.slider-pagination').slick({
        infinite:true,
        asNavFor: ".slider",
        slidesToShow: 3,
        centerMode:true,
        variableWidth:true
    });
});