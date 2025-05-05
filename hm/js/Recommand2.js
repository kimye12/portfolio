function RecScroll2(args) {
  const scrollTextContainer = document.querySelector(args.textcontainer);
  const photoItems = Array.from(
    document.querySelectorAll(`${args.photocontainer} ${args.item}`)
  );

  const scrollPhotoContainer = document.querySelector(args.photocontainer);
  const ph_1 = document.querySelector(args.photo_1);
  const scrollArrowprev = document.querySelector(args.prevbtn);
  const scrollArrownext = document.querySelector(args.nextbtn);

  let textboxWidth = scrollTextContainer.offsetWidth;
  let photoboxWidth = ph_1.offsetWidth + scrollPhotoContainer.offsetWidth * 0.1;

  let secondtext = Math.round(-(textboxWidth * 1.1));
  let thirdtext = Math.round(-(textboxWidth * 2.2));
  let fourtext = Math.round(-(textboxWidth * 3.3));
  let fivetext = Math.round(-(textboxWidth * 4.4));

  let secondphoto = Math.round(-(photoboxWidth * 1));
  let thirdphoto = Math.round(-(photoboxWidth * 2));
  let fourphoto = Math.round(-(photoboxWidth * 3));
  let fivephoto = Math.round(-(photoboxWidth * 4));

  const updateSizes = () => {
    requestAnimationFrame(()=>{
      textboxWidth = scrollTextContainer.offsetWidth;
      photoboxWidth = ph_1.offsetWidth + scrollPhotoContainer.offsetWidth * 0.1;
  
      secondtext = Math.round(-(textboxWidth * 1.1));
      thirdtext = Math.round(-(textboxWidth * 2.2));
      fourtext = Math.round(-(textboxWidth * 3.3));
      fivetext = Math.round(-(textboxWidth * 4.4));
  
      secondphoto = Math.round(-(photoboxWidth * 1));
      thirdphoto = Math.round(-(photoboxWidth * 2));
      fourphoto = Math.round(-(photoboxWidth * 3));
      fivephoto = Math.round(-(photoboxWidth * 4));
      
    })
    console.log(photoboxWidth)
    setTranslateX1(0);
    setTranslateX2(0);
    firstMove();
  };

  ["DOMContentLoaded", "load", "resize", "orientationchange"].forEach(
    (event) => {
      window.addEventListener(event, updateSizes);
    }
  );

  function firstMove() {
    photoItems.forEach((item) => {
      item.classList.remove("active");
    });
    photoItems[0].classList.add("active");
  }

  function findprevActive() {
    let activeItem = photoItems.find((item) => {
      return item.classList.contains("active");
    });
    console.log(activeItem);
    let previtem = photoItems[photoItems.indexOf(activeItem) - 1];

    console.log(previtem);
    return previtem;
  }

  function findnextActive() {
    let activeItem = photoItems.find((item) => {
      return item.classList.contains("active");
    });

    let nextitem = photoItems[photoItems.indexOf(activeItem) + 1];

    return nextitem;
  }

  function prevActive() {
    let previtem = findprevActive();
    photoItems.forEach((item) => {
      item.classList.remove("active");
    });
    previtem.classList.add("active");
  }
  function nextActive() {
    let nextitem = findnextActive();

    photoItems.forEach((item) => {
      item.classList.remove("active");
    });
    nextitem.classList.add("active");
  }

  const getTranslateX1 = () => {
    return Math.round(
      getComputedStyle(scrollTextContainer).transform.split(/[^\-0-9]+/g)[5]
    );
  };
  const getTranslateX2 = () => {
    return Math.round(
      getComputedStyle(scrollPhotoContainer).transform.split(/[^\-0-9]+/g)[5]
    );
  };

  const setTranslateX1 = (x) => {
    scrollTextContainer.style.transform = `translateX(${x}px)`;
  };
  const setTranslateX2 = (x) => {
    scrollPhotoContainer.style.transform = `translateX(${x}px)`;
  };

  scrollArrowprev.addEventListener("click", () => {
    let TextTransform = getTranslateX1();
    let PhotoTransform = getTranslateX2();

    if (TextTransform === 0) {
      return;
    } else if (TextTransform === secondtext && PhotoTransform === secondphoto) {
      setTranslateX1(0);
      setTranslateX2(0);
      prevActive();
    } else if (TextTransform === thirdtext && PhotoTransform === thirdphoto) {
      setTranslateX1(secondtext); // -105%;
      setTranslateX2(secondphoto); // -105%;
      prevActive();
    } else if (TextTransform === fourtext && PhotoTransform === fourphoto) {
      setTranslateX1(thirdtext); // -210%;
      setTranslateX2(thirdphoto); // -210%;
      prevActive();
    } else if (TextTransform === fivetext && PhotoTransform === fivephoto) {
      setTranslateX1(fourtext); // -315%;
      setTranslateX2(fourphoto); // -315%;
      prevActive();
    }
  });

  scrollArrownext.addEventListener("click", () => {
    let TextTransform = getTranslateX1();
    let PhotoTransform = getTranslateX2();

    if (TextTransform === 0) {
      setTranslateX1(secondtext); // -105%
      setTranslateX2(secondphoto); // -105%
      nextActive();
    } else if (TextTransform === secondtext && PhotoTransform === secondphoto) {
      setTranslateX1(thirdtext); // -210%;
      setTranslateX2(thirdphoto); // -210%;
      nextActive();
    } else if (TextTransform === thirdtext && PhotoTransform === thirdphoto) {
      setTranslateX1(fourtext); // -315%;
      setTranslateX2(fourphoto); // -315%;
      nextActive();
    } else if (TextTransform === fourtext && PhotoTransform === fourphoto) {
      setTranslateX1(fivetext); // -420%;
      setTranslateX2(fivephoto); // -420%
      nextActive();
    } else if (TextTransform === fivetext && PhotoTransform === fivephoto) {
      return;
    }
  });
}

RecScroll2({
  textcontainer: ".text_men_box",
  photocontainer: ".men_photo_box",
  photo_1: ".men_ph_2",
  item: ".photo_item",

  prevbtn: ".rec_men_prev",
  nextbtn: ".rec_men_next",
});
RecScroll2({
  textcontainer: ".text_women_box",
  photocontainer: ".women_photo_box",
  photo_1: ".women_ph_2",
  item: ".photo_item2",
  prevbtn: ".rec_women_prev",
  nextbtn: ".rec_women_next",
});
RecScroll2({
  textcontainer: ".text_kids_box",
  photocontainer: ".kids_photo_box",
  photo_1: ".kids_ph_2",
  item: ".photo_item3",
  prevbtn: ".rec_kids_prev",
  nextbtn: ".rec_kids_next",
});
RecScroll2({
  textcontainer: ".text_baby_box",
  photocontainer: ".baby_photo_box",
  photo_1: ".baby_ph_2",
  item: ".photo_item4",
  prevbtn: ".rec_baby_prev",
  nextbtn: ".rec_baby_next",
});
