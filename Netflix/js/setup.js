$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    
    responsive:{
        0:{
            items:1
        },
        300:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});