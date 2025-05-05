$(function () {
  let pauseNum = 0;
  var scr_width = window.outerWidth;
  var box1_width = document.querySelector(".hotel_1").offsetWidth;
  var box1_height = document.querySelector(".hotel_1").offsetHeight;
  var box2_width = document.querySelector(".hotel_2").offsetWidth; // 더 박스크기가 큰거
  var box2_height = document.querySelector(".hotel_2").offsetHeight; // 더 박스크기가 큰거
  var box1_left = box1_width + 12;
  var box2_left = box2_width + 12;

  const pauseBtns = document.querySelectorAll(".pause_btn");
  if (scr_width >= 768) {
    $(".hotel_1").animate({ left: `-${box1_left}px`, top: "30px" });
    $(".hotel_3").animate({ left: `${box2_left}px`, top: "30px" });
  } else {
    $(".hotel_1").animate({ left: `-${box1_left}px` });
    $(".hotel_3").animate({ left: `${box2_left}px` });
  }

  let currentIndex = 1;
  let slideLength = $(".hotel_box_wrap>div").length;
  let rolling1;
  function gotoSlider1(index) {
    let firstIndex = currentIndex === 0 ? slideLength - 1 : currentIndex - 1;
    let lastIndex = index === slideLength - 1 ? 0 : index + 1;

    let firstSlide = $(".hotel_box_wrap>div").eq(firstIndex);
    let currentSlide = $(".hotel_box_wrap>div").eq(currentIndex);
    let nextSlide = $(".hotel_box_wrap>div").eq(index);
    let lastSlide = $(".hotel_box_wrap>div").eq(lastIndex);

    if (scr_width >= 768) {
      $(firstSlide)
        .css({ left: `-${box1_left}px` })
        .stop()
        .animate({ left: `-${box1_left * 3}px` });

      $(firstSlide).css({
        "z-index": "1",
        opacity: "0.5",
      });
      $(currentSlide)
        .css({ left: "0", top: "0" })
        .stop()
        .animate({ left: `-${box1_left}px`, top: "30px" });

      $(currentSlide).css({
        opacity: "0.5",
        width: box1_width,
        height: box1_height,
        "z-index": "2",
      });

      $(nextSlide)
        .css({ left: `${box2_left}px`, top: "30px" })
        .stop()
        .animate({ left: "0", top: "0" });
      $(nextSlide).css({
        opacity: "1",
        width: box2_width,
        height: box2_height,
        "z-index": "2",
      });
      $(lastSlide)
        .css({ left: `${box2_left * 3}px` })
        .stop()
        .animate({ left: `${box2_left}px`, top: "30px" });
      $(lastSlide).css({ opacity: "0.5" });
      $(".pager>span").removeClass("active");
      $(".pager>span")
        .eq(currentIndex % 3)
        .addClass("active");

      currentIndex = index;
    } else {
      $(firstSlide)
        .css({ left: `-${box1_left}px` })
        .stop()
        .animate({ left: `-${box1_left * 3}px` });

      $(firstSlide).css({
        "z-index": "1",
        opacity: "0.5",
      });
      $(currentSlide)
        .css({ left: "0" })
        .stop()
        .animate({ left: `-${box1_left}px` });

      $(currentSlide).css({
        opacity: "0.5",
        width: box1_width,
        height: box1_height,
        "z-index": "2",
      });

      $(nextSlide)
        .css({ left: `${box2_left}px` })
        .stop()
        .animate({ left: "0" });
      $(nextSlide).css({
        opacity: "1",
        width: box2_width,
        height: box2_height,
        "z-index": "2",
      });
      $(lastSlide)
        .css({ left: `${box2_left * 3}px` })
        .stop()
        .animate({ left: `${box2_left}px` });
      $(lastSlide).css({ opacity: "0.5" });
      $(".pager>span").removeClass("active");
      $(".pager>span")
        .eq(currentIndex % 3)
        .addClass("active");

      currentIndex = index;
    }
  } //gotoslide

  function autoSlide1() {
    rolling1 = setInterval(function () {
      let nextIndex = (currentIndex + 1) % slideLength;
      gotoSlider1(nextIndex);
    }, 3000);
  }

  function stopSlide1() {
    clearInterval(rolling1);
  }

  pauseBtns.forEach((pause) => {
    pause.addEventListener("click", function () {
      if (pauseNum === 0) {
        stopSlide1();
        pause.style.backgroundImage = "url(image/icon/play.png)";

        pauseNum = 1;
      } else if (pauseNum === 1) {
        autoSlide1();
        pause.style.backgroundImage = "url(image/icon/pause.png)";

        pauseNum = 0;
      }
    });
  });

  function responsive() {
    var winWidth = $(window).width();
    if (winWidth < 768) {
      if (scr_width > 767) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      }
    } else if (winWidth < 1024) {
      if (scr_width > 1023) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      } else if (scr_width < 768) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      }
    } else if (winWidth < 1650) {
      if (scr_width > 1649) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      } else if (scr_width < 1024) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      }
      //pc
    } else if (winWidth < 1920) {
      if (scr_width < 1650) {
        jQuery(function ($) {
          window.onresize = function () {
            document.location.reload();
          };
        });
      }
    }
  } //responsive

  $(window).on({
    "ready load resize orientationchange": function () {
      responsive();
    },
  }); //on

  autoSlide1();
});
