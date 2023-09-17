$(document).ready(function () {
    $('.customer-logos').slick({
		swipe: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
		infinite: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
		swipeToSlide: true,
		lazyLoad: 'ondemand',
        pauseOnHover: true,
		centerMode: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});