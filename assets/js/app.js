
const toggler = document.getElementById('switch-theme');
toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark') ;
    } else {
        document.body.classList.remove('dark') ;
    }
});

$('.slider-hero').owlCarousel({
    loop:true ,
    margin: 20,
    autoplay : true ,
    nav:false,
    animateOut: 'fadeOut' ,
    lazyLoad: true ,
    video:true,
    width : 100 ,
    center:true,
    items: 1 ,
})
$('.card').owlCarousel({
    loop:true ,
    margin: 20,
    autoplay : true ,
    nav: false ,
    animateOut: 'fadeOut' ,
    lazyLoad: true ,
    video:true,
    width : 100 ,
    center:true,
    items: 5,
})


window.addEventListener('scroll' , function() {
  if (window.scroll > 150) {
    $('#data-back-top-btn').show() ;
  } else {
    $('#data-back-top-btn').hide() ;
  }
});







