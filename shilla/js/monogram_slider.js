function autoSlide2(args) {
  let scr_width = window.innerWidth;
  let smallWidth2 = document.querySelector(args.smallBox).offsetWidth;
  let smallHeight2 = document.querySelector(args.smallBox).offsetHeight;
  let bigWidth2 = document.querySelector(args.bigBox).offsetWidth;
  let bigHeight2 = document.querySelector(args.bigBox).offsetHeight;
  const totalBox2 = document.querySelectorAll(args.allBox);
  const pagers2 = document.querySelectorAll(args.pager);
  const pauseBtn2 = document.querySelector(args.pause);

  let small_left2 = smallWidth2 + 12;
  let big_left2 = bigWidth2 + 12;

  let currentIndex2 = 1;
  let rolling2;
  var pauseNum2 = 0;
  var nextIndex2, leftIndex2, rightIndex2;

  function gotoSlider2(first, second, third) {
    let ff2 = first === 0 ? 5 : first - 1;
    totalBox2[ff2].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox2[ff2].style.opacity = `0`;
    totalBox2[ff2].style.left = `-${small_left2 * 3}px`;
    totalBox2[ff2].style.zIndex = `0`;

    totalBox2[first].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox2[first].style.left = `-${small_left2}px`;
    totalBox2[first].style.top = `30px`;
    totalBox2[first].style.width = `${smallWidth2}px`;
    totalBox2[first].style.height = `${smallHeight2}px`;
    totalBox2[first].style.zIndex = `2`;
    totalBox2[first].style.opacity = `0.5`;

    totalBox2[second].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox2[second].style.left = `0`;
    totalBox2[second].style.top = `0`;
    totalBox2[second].style.width = `${bigWidth2}px`;
    totalBox2[second].style.height = `${bigHeight2}px`;
    totalBox2[second].style.zIndex = `2`;
    totalBox2[second].style.opacity = `1`;

    totalBox2[third].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox2[third].style.left = `${big_left2}px`;
    totalBox2[third].style.top = `30px`;
    totalBox2[third].style.opacity = `0.5`;

    let nextIndex2 = (third + 1) % totalBox2.length;
    totalBox2[
      nextIndex2
    ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
    totalBox2[nextIndex2].style.left = `${big_left2 * 2}px`;
    totalBox2[nextIndex2].style.top = `30px`;
    totalBox2[nextIndex2].style.opacity = `0`;
    totalBox2[nextIndex2].style.zIndex = `0`;

    let nextnextIndex2 = (third + 2) % totalBox2.length;
    totalBox2[
      nextnextIndex2
    ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
    totalBox2[nextnextIndex2].style.left = `${big_left2 * 2}px`;
    totalBox2[nextnextIndex2].style.top = `30px`;
    totalBox2[nextnextIndex2].style.opacity = `0`;
    totalBox2[nextnextIndex2].style.zIndex = `0`;

    pagers2[first % 3].classList.remove("active2");
    pagers2[second % 3].classList.add("active2");
    currentIndex2 = third;
    console.log(currentIndex2);
  }

  function findIndex2(index) {
    nextIndex2 = index % totalBox2.length;
    leftIndex2 = index === 0 ? totalBox2.length - 1 : index - 1;
    rightIndex2 = index === totalBox2.length - 1 ? 0 : index + 1;
  }

  setTimeout(function () {
    findIndex2(currentIndex2);
    gotoSlider2(leftIndex2, nextIndex2, rightIndex2);
  }, 1000);

  function setSlider2() {
    rolling2 = setInterval(function () {
      findIndex2(currentIndex2);
      gotoSlider2(leftIndex2, nextIndex2, rightIndex2);
    }, 3000);
  }

  function stopSlider2() {
    clearInterval(rolling2);
  }

  function pagerS2lide(i) {
    var leftt2 = i === 0 ? totalBox2.length - 1 : i - 1;
    var rightt2 = i === totalBox2.length - 1 ? 0 : i + 1;
    totalBox2.forEach((box, index) => {
      if (index !== i && index !== leftt2 && index !== rightt2) {
        box.style.left = `-${small_left2 * 3}px`;
        box.style.top = `30px`;
        box.style.width = `${smallWidth2}px`;
        box.style.height = `${smallHeight2}px`;
        box.style.zIndex = `2`;
        box.style.opacity = `0.5`;
      }

      totalBox2[leftt2].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox2[leftt2].style.left = `-${small_left2}px`;
      totalBox2[leftt2].style.top = `30px`;
      totalBox2[leftt2].style.width = `${smallWidth2}px`;
      totalBox2[leftt2].style.height = `${smallHeight2}px`;
      totalBox2[leftt2].style.zIndex = `2`;
      totalBox2[leftt2].style.opacity = `0.5`;

      totalBox2[i].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox2[i].style.left = `0`;
      totalBox2[i].style.top = `0`;
      totalBox2[i].style.width = `${bigWidth2}px`;
      totalBox2[i].style.height = `${bigHeight2}px`;
      totalBox2[i].style.zIndex = `2`;
      totalBox2[i].style.opacity = `1`;

      totalBox2[rightt2].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox2[rightt2].style.left = `${big_left2}px`;
      totalBox2[rightt2].style.top = `30px`;
      totalBox2[rightt2].style.opacity = `0.5`;

      let right1Index2 = (rightt2 + 1) % totalBox2.length;
      totalBox2[
        right1Index2
      ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
      totalBox2[right1Index2].style.left = `${big_left2 * 2}px`;
      totalBox2[right1Index2].style.top = `30px`;
      totalBox2[right1Index2].style.opacity = `0`;
      totalBox2[right1Index2].style.zIndex = `0`;

      let right2Index2 = (rightt2 + 2) % totalBox2.length;
      totalBox2[
        right2Index2
      ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
      totalBox2[right2Index2].style.left = `${big_left2 * 2}px`;
      totalBox2[right2Index2].style.top = `30px`;
      totalBox2[right2Index2].style.opacity = `0`;
      totalBox2[right2Index2].style.zIndex = `0`;

      pagers2.forEach((pager) => {
        pager.classList.remove("active2");
      });
      pagers2[i % 3].classList.add("active2");
    });
  }

  pauseBtn2.addEventListener("click", function () {
    if (pauseNum2 === 0) {
      stopSlider2();
      pauseBtn2.style.backgroundImage = "url(image/icon/play.png)";

      pauseNum2 = 1;
    } else if (pauseNum2 === 1) {
      setSlider2();
      pauseBtn2.style.backgroundImage = "url(image/icon/pause.png)";

      pauseNum2 = 0;
    }
  });

  pagers2[0].addEventListener("click", () => {
    stopSlider2();
    if (currentIndex2 === 5 || currentIndex2 === 0) currentIndex2 = 0;
    else if (currentIndex2 === 2 || currentIndex2 === 3) currentIndex2 = 3;
    pagerS2lide(currentIndex2);
    setSlider2();
  });
  pagers2[1].addEventListener("click", () => {
    stopSlider2();
    if (currentIndex2 === 0 || currentIndex2 === 1) currentIndex2 = 1;
    else if (currentIndex2 === 3 || currentIndex2 === 4) currentIndex2 = 4;
    pagerS2lide(currentIndex2);
    setSlider2();
  });
  pagers2[2].addEventListener("click", () => {
    stopSlider2();
    if (currentIndex2 === 1 || currentIndex2 === 2) currentIndex2 = 2;
    else if (currentIndex2 === 4 || currentIndex2 === 5) currentIndex2 = 5;
    pagerS2lide(currentIndex2);
    setSlider2();
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

  setSlider2();
}

autoSlide2({
  smallBox: ".monogram_1",
  bigBox: ".monogram_2",
  allBox: ".monogram_slide_box",
  pager: ".monogram_pager",
  pause: ".pause_btn_2",
});
