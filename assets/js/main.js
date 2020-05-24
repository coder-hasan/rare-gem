

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $("#my_toggle_nav").slideToggle();
    });
  });

$(document).ready(function(){
    $('.home_slider').slick({
        autoplay: false,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            // {
            // breakpoint: 1751,
            // settings: {
            //     centerMode: true,
            //     centerPadding: '15%',
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            // }
            // },
            {
            breakpoint: 575,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
    });
});    

if ($('.selectpickers').length > 0) {
$('.selectpickers').niceSelect();
}