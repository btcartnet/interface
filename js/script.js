$(document).ready(function() {
    $(".menu__button>a").on('click', function(e) {
        $(this).toggleClass("active__menu");
        if ($(this).hasClass("active__menu")) {
            $("body,html").css("overflow-y", "hidden");
            $("header .outer__header .header__menu>ul").css("top", "0px");
        } else {
            $("body,html").css("overflow-y", "auto");
            $("header .outer__header .header__menu>ul").css("top", "-100vh");
        }
    });

    $(".scrollable__list a").on("click", function(e) {
        e.preventDefault();
        if ($(window).width() > 991) {
            e.preventDefault();
            var currentLink = $(this).attr("data-block");
            $('html').animate({
                scrollTop: $("." + currentLink).offset().top
            }, 1500);
        } else {
            var currentLink = $(this).attr("data-block");
            $("body,html").css("overflow-y", "auto");
            $("header .outer__header .header__menu>ul").css("top", "-100vh");
            $('html').animate({
                scrollTop: $("." + currentLink).offset().top
            }, 1500);
        }
    });
});