var scr_width = window.outerWidth;

const hotel_hv = document.querySelector(".shilla_hotel_h3");
const monogram_hv = document.querySelector(".shilla_monogram_h3");
const stay_hv = document.querySelector(".shilla_stay_h3");
const monogram_hv_a = document.querySelector(".mono_a");

hotel_hv.addEventListener("click", function (e) {
  e.preventDefault();
});

monogram_hv.addEventListener("click", function (e) {
  e.preventDefault();
});

stay_hv.addEventListener("click", function (e) {
  e.preventDefault();
});

const hotel_bx = document.querySelector(".shilla_hotel");
const monogram_bx = document.querySelector(".shilla_monogram");
const stay_bx = document.querySelector(".shilla_stay");

if (scr_width >= 768) {
  hotel_hv.addEventListener("click", function (e) {
    hotel_bx.style.visibility = "visible";
    monogram_bx.style.visibility = "hidden";
    stay_bx.style.visibility = "hidden";
  });

  monogram_hv.addEventListener("click", function (e) {
    hotel_bx.style.visibility = "hidden";
    monogram_bx.style.visibility = "visible";
    stay_bx.style.visibility = "hidden";
  });

  stay_hv.addEventListener("click", function (e) {
    e.preventDefault();
    hotel_bx.style.visibility = "hidden";
    monogram_bx.style.visibility = "hidden";
    stay_bx.style.visibility = "visible";
  });

  var isClick1 = false;
  var isClick2 = false;
  var isClick3 = false;

  hotel_hv.addEventListener("mouseover", function () {
    if (isClick1) {
      return;
    }
    hotel_hv.style.backgroundColor = "#F1E3C4";
    hotel_hv.style.borderColor = "#F1E3C4";
  });

  hotel_hv.addEventListener("mouseout", function () {
    if (isClick1) {
      return;
    }
    hotel_hv.style.backgroundColor = "#fff";
    hotel_hv.style.borderColor = "#000";
  });

  hotel_hv.addEventListener("click", function () {
    if (!isClick1) {
      isClick1 = true;
    }

    hotel_hv.style.backgroundColor = "#F1E3C4";
    hotel_hv.style.borderColor = "#F1E3C4";
    monogram_hv.style.backgroundColor = "#fff";
    monogram_hv_a.style.color = "#000";
    stay_hv.style.backgroundColor = "#fff";
    stay_hv.style.borderColor = "#000";
    closeClick2();
    closeClick3();
  });

  monogram_hv.addEventListener("mouseover", function () {
    if (isClick2) {
      return;
    }
    monogram_hv.style.backgroundColor = "#2D2926";
    monogram_hv_a.style.color = "#fff";
  });

  monogram_hv.addEventListener("mouseout", function () {
    if (isClick2) {
      return;
    }
    monogram_hv.style.backgroundColor = "#fff";
    monogram_hv_a.style.color = "#000";
  });

  monogram_hv.addEventListener("click", function () {
    if (!isClick2) {
      isClick2 = true;
    }

    monogram_hv.style.backgroundColor = "#2D2926";
    monogram_hv_a.style.color = "#fff";
    hotel_hv.style.backgroundColor = "#fff";
    hotel_hv.style.borderColor = "#000";
    stay_hv.style.backgroundColor = "#fff";
    stay_hv.style.borderColor = "#000";
    closeClick1();
    closeClick3();
  });

  stay_hv.addEventListener("mouseover", function () {
    if (isClick3) {
      return;
    }
    stay_hv.style.backgroundColor = "#EBE8E3";
    stay_hv.style.borderColor = "#EBE8E3";
  });

  stay_hv.addEventListener("mouseout", function () {
    if (isClick3) {
      return;
    }
    stay_hv.style.backgroundColor = "#fff";
    stay_hv.style.borderColor = "#000";
  });

  stay_hv.addEventListener("click", function () {
    if (!isClick3) {
      isClick3 = true;
    }

    stay_hv.style.backgroundColor = "#EBE8E3";
    stay_hv.style.borderColor = "#EBE8E3";
    hotel_hv.style.backgroundColor = "#fff";
    hotel_hv.style.borderColor = "#000";
    monogram_hv.style.backgroundColor = "#fff";
    monogram_hv_a.style.color = "#000";
    closeClick1();
    closeClick2();
  });

  function closeClick1() {
    isClick1 = false;
  }
  function closeClick2() {
    isClick2 = false;
  }
  function closeClick3() {
    isClick3 = false;
  }
}
