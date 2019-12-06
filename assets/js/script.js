$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    lazyLoad : true,
    imagesLoaded : true,
    autoPlay: true
});

AOS.init({
    once : true
});


function whatstappMe() {
    window.open('https://api.whatsapp.com/send?phone=+6282216538309&text=Halo Pak Arif, saya liat dari web mohon info promo Suzuki nya', '_blank') ;
}


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll-top').css('opacity', '1') ; 
        } else { 
            $('#scroll-top').css('opacity', '0'); 
        } 
    }); 
    $('#scroll-top').click(function(){ 
        $("html, body").animate({ scrollTop: target.offset().top }, 1000); 
        return false; 
    }); 
});
