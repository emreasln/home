$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});
const swiperOne = new Swiper('.swiper-one', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-one',
  },
  navigation: {
    nextEl: '.swiper-one-next',
    prevEl: '.swiper-one-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    }
  }
});
const swiperTwo = new Swiper('.swiper-two', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-two',
  },
  navigation: {
    nextEl: '.swiper-two-next',
    prevEl: '.swiper-two-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    }
  }
});
$(".mobile-menu-btn").click(function () {
  $(".mobile-menu").addClass("mobile-menu-active");
  $(".overlay").addClass("overlay-active");
});
$(".mobile-menu-close-btn, .overlay").click(function () {
  $(".mobile-menu").removeClass("mobile-menu-active");
  $(".overlay").removeClass("overlay-active");
});



