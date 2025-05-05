const first = document.querySelector(".news_box_1");
const first_a = document.querySelector(".news_a1");
const first_text = document.querySelector(".news_texts_1");
const first_text_line = document.querySelector(".first_news_text");
const first_p1 = document.querySelector(".news_p1");
const four = document.querySelector(".news_box_4");
const four_a = document.querySelector(".news_a4");
const four_text_line = document.querySelector(".four_news_text");
const four_red_box = document.querySelector(".red_box_4");
const four_p1 = document.querySelector(".news_p4");

function expand_1() {
  first.style.transition = "3s linear"; // 확장 3초
  first_a.style.transition = "3s linear";
  first_text.style.transition = "3s linear";
  first_text_line.style.transition = "3s linear";
  first_p1.style.transition = "3s linear";
  first.style.width = "382.5px";
  first_a.style.visibility = "visible";
  first_text.style.width = "160px";
  first_text.style.height = "76.5px";
  first_text_line.style.width = "112.5px";
  first_p1.style.opacity = "1";

  setTimeout(shirnk_1, 3000);
}

function shirnk_1() {
  first.style.transition = "1s linear"; // 확장 3초
  first_a.style.transition = "1s linear";
  first_text.style.transition = "1s linear";
  first_text_line.style.transition = "1s linear";
  first_p1.style.transition = "1s linear";
  first.style.width = "175px";
  first_a.style.visibility = "hidden";
  first_text.style.width = "120px";
  first_text.style.height = "50px";
  first_text_line.style.width = "60px";
  first_p1.style.opacity = "0";
}

setInterval(expand_1, 4000);
expand_1();

function expand_4() {
  four.style.transition = "3s linear"; // 확장 3초
  four_a.style.transition = "3s linear";
  four_p1.style.transition = "3s linear";
  four_red_box.style.transition = "3s linear";
  four_text_line.style.transition = "3s linear";
  four.style.width = "382.5px";
  four.style.backgroundSize = "74%";
  four_a.style.visibility = "visible";
  four_p1.style.opacity = "1";
  four_red_box.style.opacity = "1";
  four_text_line.style.width = "112.5px";

  setTimeout(shirnk_4, 3000);
}

function shirnk_4() {
  four.style.transition = "1s linear"; // 확장 3초
  four_a.style.transition = "1s linear";
  four_p1.style.transition = "1s linear";
  four_red_box.style.transition = "1s linear";
  four_text_line.style.transition = "1s linear";
  four.style.width = "175px";
  four_text_line.style.width = "60px";
  four.style.backgroundSize = "100%";
  four_a.style.visibility = "hidden";
  four_p1.style.opacity = "0";
  four_red_box.style.opacity = "0";
}

setInterval(expand_4, 4000);
expand_4();
