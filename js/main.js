$(document).on("scroll", window, function () {
  if ($(window).scrollTop() < 400) {
    $(".main-nav").hide();
  } else {
    $(".main-nav").slideDown(700);
  }
});
$(".btn-cookies").on("click", function () {
  $(".cookies").removeClass("cookies");
});

// ------------ Медленные якоря-------------
$(document).ready(function () {
  $("#slowmenu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#slowmenu2").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#slowmenu3").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
// ------------------- SLIDER --------------
$(function () {
  $(".your-class").slick({
    infinite: true,
    slidesToShow: 2,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});
