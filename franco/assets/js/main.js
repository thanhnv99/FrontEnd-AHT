$(document).ready(()=>{
    $('#menu-button').click(()=>{
        $('.menu-container').first().slideToggle("slow");
    });
});

$(document).ready(function(){
    var data = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
    };
    $(".blog-slider").slick(data);
  });
  