$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    });


    $('.png_slide .main_slide').slick({
        pauseOnHover: false,
        autoplaySpeed: 2000,
    });

    $('.pizza_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        slidesToScroll: 4,
        infinite: false,

    });
});