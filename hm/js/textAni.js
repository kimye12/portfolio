var arrivals = document.getElementById("Arrivals");
var arrivalsText = document.querySelector(".title_wrap_2");
var recommand = document.getElementById("recommand");
var recommandText = document.querySelector(".title_wrap_4");
var trending = document.getElementById("Trending");
var trendingText = document.querySelector(".title_wrap_5");
var best = document.getElementById("Best");
var bestText = document.querySelector(".title_wrap_6");

var nowWidth = window.innerWidth;
["DOMContentLoaded", "load", "resize", "orientationchange"].forEach((event) => {
  window.addEventListener(event, function () {
    nowWidth = window.innerWidth;
  });
});
window.addEventListener("scroll", () => {
  var nowLocation = document.documentElement.scrollTop;

  function textAnimation(now, box, textbox) {
    var num;
    switch (box) {
      case arrivals:
        num = 600;
      case recommand:
        num = 900;
        break;
      case trending:
        if (nowWidth >= 1024) {
          num = 800;
          break;
        } else {
          num = 1000;
          break;
        }
      case best:
        num = 1000;
        break;
    }

    if (
      box.offsetTop < now + num &&
      now + num < box.offsetTop + box.offsetHeight
    ) {
      textbox.classList.remove("animate__fadeOutLeft");
      textbox.classList.add("animate__animated", "animate__fadeInLeft");
    } else {
      if (box == arrivals || box == recommand || box == trending) {
        textbox.classList.remove("animate__fadeInLeft");
        textbox.classList.add("animate__fadeOutLeft");
      }
    }
  }

  textAnimation(nowLocation, arrivals, arrivalsText);
  textAnimation(nowLocation, recommand, recommandText);
  textAnimation(nowLocation, trending, trendingText);
  textAnimation(nowLocation, best, bestText);
});
