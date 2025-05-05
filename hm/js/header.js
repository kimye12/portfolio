const openBtn = document.querySelector(".m_btn");
const navWrap = document.querySelector(".header_gnb_wrap");
const closeBtn = document.querySelector(".close_btn");
const modal = document.querySelector('.modal')
openBtn.addEventListener("click", () => {
  navWrap.style.right = "0";
  navWrap.style.opacity = '1'
 
});

closeBtn.addEventListener("click", () => {
  navWrap.style.right = "-50%";
  navWrap.style.opacity = '0'
  
});

var innerWi = window.innerWidth;

["DOMContentLoaded", "load", "resize", "orientationchange"].forEach((event) => {
  window.addEventListener(event, function () {
    innerWi = window.innerWidth;
  });
});

window.addEventListener('resize',()=>{
  if(innerWi >= 1024){
    navWrap.style.right = "-50%";
    navWrap.style.opacity = '1'
  }else{
    navWrap.style.right = "-50%";
    navWrap.style.opacity = '0'
  }
})
