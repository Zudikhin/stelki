$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    $(".blog_content_item_content_read_btn").click(function(){
        $(this).parent().parent().parent().parent().addClass("active");
    });

    $('.game_one_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_two_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_three_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_four_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_five_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});