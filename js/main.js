//  main slide
var main = new Swiper(".main", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#count01",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next01",
    prevEl: "#prev01",
  },
});

var text = new Swiper(".text-slide", {
  direction: "vertical",
  loop: true,
});

$("#play01").hide();

$("#pause01").on("click", function () {
  $(this).hide();
  $("#play01").show();
  main.autoplay.stop();
});

$("#play01").on("click", function () {
  $(this).hide();
  $("#pause01").show();
  main.autoplay.start();
});

main.controller.control = text;
text.controller.control = main;

// section 1
var section1 = new Swiper(".first", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count02",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next02",
    prevEl: "#prev02",
  },
  breakpoints: {
    768: {
      slidesPerView: 1, //브라우저가 768보다 클 때
    },
    1024: {
      slidesPerView: 4, //브라우저가 1024보다 클 때
    },
  },
});

$("#play02").hide();

$("#pause02").on("click", function () {
  $(this).hide();
  $("#play02").show();
  section1.autoplay.stop();
});

$("#play02").on("click", function () {
  $(this).hide();
  $("#pause02").show();
  section1.autoplay.start();
});

//    section 2
var section2 = new Swiper(".second", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count3",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next03",
    prevEl: "#prev03",
  },
  breakpoints: {
    768: {
      slidesPerView: 4, //브라우저가 768보다 클 때
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4, //브라우저가 1024보다 클 때
      slidesPerGroup: 4,
    },
  },
});

$("#play03").hide();

$("#pause03").on("click", function () {
  $(this).hide();
  $("#play03").show();
  section2.autoplay.stop();
});

$("#play03").on("click", function () {
  $(this).hide();
  $("#pause03").show();
  section2.autoplay.start();
});

//    popup
var popup = new Swiper(".third", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count04",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next04",
    prevEl: "#prev04",
  },
});

$("#play04").hide();

$("#pause04").on("click", function () {
  $(this).hide();
  $("#play04").show();
  popup.autoplay.stop();
});

$("#play04").on("click", function () {
  $(this).hide();
  $("#pause04").show();
  popup.autoplay.start();
});

// next page
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a:not(.exclude)");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "../page/detail.html";
    });
  });
});
