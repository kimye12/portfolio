const hotel_btn = document.querySelector(".first_btn");
const check_in_btn = document.querySelector(".second_btn");
const check_out_btn = document.querySelector(".third_btn");
const gnb_box = document.querySelector(".check_gnb_box");
const search_btn = document.querySelector(".search_btn");
const prev1_btn = document.querySelector(".prev_btn1");
const prev2_btn = document.querySelector(".prev_btn2");
const prev3_btn = document.querySelector(".prev_btn3");

hotel_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(-100%)";
});

check_in_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(-200%)";
});

check_out_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(-300%)";
});

prev1_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(0%)";
});

prev2_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(-100%)";
});

prev3_btn.addEventListener("click", function () {
  gnb_box.style.transform = "translateX(-200%)";
});

search_btn.addEventListener("click", function (e) {
  e.preventDefault();
});

let nowWidth1;
["DOMContentLoaded", "load", "resize", "orientationchange"].forEach((event) => {
  window.addEventListener(event, function () {
    nowWidth1 = window.innerWidth;
    ww(nowWidth1);
  });
});

function ww(now) {
  if (now >= 768) {
    document.querySelector(
      ".fade_slider div>h3"
    ).innerText = `The Shilla Hotel exceeded expectations`;
  } else if (now < 768) {
    document.querySelector(
      ".fade_slider div>h3"
    ).innerText = `The Shilla Hotel exceeded\nexpectations`;
  }
}
