//slick is a javascript framework that helps to build responsive image slider

$('.slider-area').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        
centerMode: true,
centerPadding: '60px',
slidesToShow: 3,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
centerMode: true,
centerPadding: '40px',
slidesToShow: 2
}
},
{
breakpoint: 480,
settings: {
arrows: false,
centerMode: true,
centerPadding: '40px',
slidesToShow: 1
}
}
]
});
