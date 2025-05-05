function autoSlide(args) {
  let scr_width = window.innerWidth;
  let smallWidth = document.querySelector(args.smallBox).offsetWidth;
  let smallHeight = document.querySelector(args.smallBox).offsetHeight;
  let bigWidth = document.querySelector(args.bigBox).offsetWidth;
  let bigHeight = document.querySelector(args.bigBox).offsetHeight;
  const totalBox = document.querySelectorAll(args.allBox);
  const pagers = document.querySelectorAll(args.pager);
  const pauseBtn = document.querySelector(args.pause);

  let small_left = smallWidth + 12;
  let big_left = bigWidth + 12;

  let currentIndex = 1;
  let rolling;
  var pauseNum = 0;
  var nextIndex, leftIndex, rightIndex;

  function gotoSlider(first, second, third) {
    let ff = first === 0 ? 5 : first - 1;
    totalBox[ff].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox[ff].style.opacity = `0`;
    totalBox[ff].style.left = `-${small_left * 3}px`;
    totalBox[ff].style.zIndex = `0`;

    totalBox[first].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox[first].style.left = `-${small_left}px`;
    totalBox[first].style.top = `30px`;
    totalBox[first].style.width = `${smallWidth}px`;
    totalBox[first].style.height = `${smallHeight}px`;
    totalBox[first].style.zIndex = `2`;
    totalBox[first].style.opacity = `0.5`;

    totalBox[second].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox[second].style.left = `0`;
    totalBox[second].style.top = `0`;
    totalBox[second].style.width = `${bigWidth}px`;
    totalBox[second].style.height = `${bigHeight}px`;
    totalBox[second].style.zIndex = `2`;
    totalBox[second].style.opacity = `1`;

    totalBox[third].style.transition = `all 3s ease 0s, visibility 0s`;
    totalBox[third].style.left = `${big_left}px`;
    totalBox[third].style.top = `30px`;
    totalBox[third].style.opacity = `0.5`;

    let nextIndex = (third + 1) % totalBox.length;
    totalBox[
      nextIndex
    ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
    totalBox[nextIndex].style.left = `${big_left * 2}px`;
    totalBox[nextIndex].style.top = `30px`;
    totalBox[nextIndex].style.opacity = `0`;
    totalBox[nextIndex].style.zIndex = `0`;

    let nextnextIndex = (third + 2) % totalBox.length;
    totalBox[
      nextnextIndex
    ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
    totalBox[nextnextIndex].style.left = `${big_left * 2}px`;
    totalBox[nextnextIndex].style.top = `30px`;
    totalBox[nextnextIndex].style.opacity = `0`;
    totalBox[nextnextIndex].style.zIndex = `0`;

    pagers[first % 3].classList.remove("active");
    pagers[second % 3].classList.add("active");
    currentIndex = third;
    console.log(currentIndex);
  }

  function findIndex(index) {
    nextIndex = index % totalBox.length;
    leftIndex = index === 0 ? totalBox.length - 1 : index - 1;
    rightIndex = index === totalBox.length - 1 ? 0 : index + 1;
  }

  setTimeout(function () {
    findIndex(currentIndex);
    gotoSlider(leftIndex, nextIndex, rightIndex);
  }, 1000);

  function setSlider() {
    rolling = setInterval(function () {
      findIndex(currentIndex);
      gotoSlider(leftIndex, nextIndex, rightIndex);
    }, 3000);
  }

  function stopSlider() {
    clearInterval(rolling);
  }

  function pagerSlide(i) {
    var leftt = i === 0 ? totalBox.length - 1 : i - 1;
    var rightt = i === totalBox.length - 1 ? 0 : i + 1;
    totalBox.forEach((box, index) => {
      if (index !== i && index !== leftt && index !== rightt) {
        box.style.left = `-${small_left * 3}px`;
        box.style.top = `30px`;
        box.style.width = `${smallWidth}px`;
        box.style.height = `${smallHeight}px`;
        box.style.zIndex = `2`;
        box.style.opacity = `0.5`;
      }

      totalBox[leftt].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox[leftt].style.left = `-${small_left}px`;
      totalBox[leftt].style.top = `30px`;
      totalBox[leftt].style.width = `${smallWidth}px`;
      totalBox[leftt].style.height = `${smallHeight}px`;
      totalBox[leftt].style.zIndex = `2`;
      totalBox[leftt].style.opacity = `0.5`;

      totalBox[i].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox[i].style.left = `0`;
      totalBox[i].style.top = `0`;
      totalBox[i].style.width = `${bigWidth}px`;
      totalBox[i].style.height = `${bigHeight}px`;
      totalBox[i].style.zIndex = `2`;
      totalBox[i].style.opacity = `1`;

      totalBox[rightt].style.transition = `all 3s ease 0s, visibility 0s`;
      totalBox[rightt].style.left = `${big_left}px`;
      totalBox[rightt].style.top = `30px`;
      totalBox[rightt].style.opacity = `0.5`;

      let right1Index = (rightt + 1) % totalBox.length;
      totalBox[
        right1Index
      ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
      totalBox[right1Index].style.left = `${big_left * 2}px`;
      totalBox[right1Index].style.top = `30px`;
      totalBox[right1Index].style.opacity = `0`;
      totalBox[right1Index].style.zIndex = `0`;

      let right2Index = (rightt + 2) % totalBox.length;
      totalBox[
        right2Index
      ].style.transition = `all 0s ease 0s, visibility 0s, opacity 0s`;
      totalBox[right2Index].style.left = `${big_left * 2}px`;
      totalBox[right2Index].style.top = `30px`;
      totalBox[right2Index].style.opacity = `0`;
      totalBox[right2Index].style.zIndex = `0`;

      pagers.forEach((pager) => {
        pager.classList.remove("active");
      });
      pagers[i % 3].classList.add("active");
    });
  }

  pauseBtn.addEventListener("click", function () {
    if (pauseNum === 0) {
      stopSlider();
      pauseBtn.style.backgroundImage = "url(image/icon/play.png)";

      pauseNum = 1;
    } else if (pauseNum === 1) {
      setSlider();
      pauseBtn.style.backgroundImage = "url(image/icon/pause.png)";

      pauseNum = 0;
    }
  });

  pagers[0].addEventListener("click", () => {
    stopSlider();
    if (currentIndex === 5 || currentIndex === 0) currentIndex = 0;
    else if (currentIndex === 2 || currentIndex === 3) currentIndex = 3;
    pagerSlide(currentIndex);
    setSlider();
  });
  pagers[1].addEventListener("click", () => {
    stopSlider();
    if (currentIndex === 0 || currentIndex === 1) currentIndex = 1;
    else if (currentIndex === 3 || currentIndex === 4) currentIndex = 4;
    pagerSlide(currentIndex);
    setSlider();
  });
  pagers[2].addEventListener("click", () => {
    stopSlider();
    if (currentIndex === 1 || currentIndex === 2) currentIndex = 2;
    else if (currentIndex === 4 || currentIndex === 5) currentIndex = 5;
    pagerSlide(currentIndex);
    setSlider();
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

  setSlider();
}

autoSlide({
  smallBox: ".hotel_1",
  bigBox: ".hotel_2",
  allBox: ".hotel_slide_box",
  pager: ".hotel_pager",
  pause: ".pause_btn_1",
});
