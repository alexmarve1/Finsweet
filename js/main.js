$(function() {
  $(".rateYo").rateYo({
    starWidth: "40px"
  });

  $('.reviwes__slider').slick({
    arrows: false,
    slidesToShow:2,
    draggable:false,
    dots: true,
    appendDots: $('.reviews__dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
  }]
  })

  $('.reviews__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.reviwes__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.reviwes__slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideToggle('')
  })

  $(".header__nav-burger").on("click","a", function (e) {
            e.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        })

  // $(window).on('scroll', function () {
  setInterval (() => {
    if ($(window).scrollTop() > 0) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
    })      
  }, 0)



  $('.burger, .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__nav-burger').toggleClass('header__list--open')
    $('.overlay').toggleClass('overlay--show')
})


// $(function() {

//   var mixer = mixitup('.target');

// });

