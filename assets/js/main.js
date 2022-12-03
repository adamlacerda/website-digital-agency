// 
$(".nav-toggler").click(function () {
    $(".nav-items").toggleClass("show");
});

// Hero Slider
$(".hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dot: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})