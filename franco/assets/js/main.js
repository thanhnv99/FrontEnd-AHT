$(document).ready(()=>{
    $('#menu-button').click(()=>{
        $('.menu-nav').first().slideToggle("slow");
    });
});

$(document).ready(function(){
  var data = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    initialSlide:1
  };
  $(".blog-slider").slick(data);
});