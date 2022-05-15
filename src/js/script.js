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
        infinite:false,
        asNavFor: ".slider",
    });
});