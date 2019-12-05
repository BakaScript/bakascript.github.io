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

$(document).ready(function(){
    $(document).scroll(function(){
        console.log('ok') ;
    }) ;
}) ;

function whatstappMe() {
    window.open('https://api.whatsapp.com/send?phone=+6282216538309&text=boleh tanya soal mobilnya?', '_blank') ;
}
