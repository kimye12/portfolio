// 요소 & 사이즈
const list1 = document.querySelector('.offers_box');
const listScrollWidth1 = list1.scrollWidth;
const listClientWidth1 = list1.clientWidth;
// 이벤트마다 갱신될 값
let startX1 = 0;
let nowX1 = 0;
let endX1 = 0;
let listX1 = 0;











const getClientX1 = (e) => {
  const isTouches1 = e.touches ? true : false;
  
  return isTouches1 ? e.touches[0].clientX : e.clientX;
};

const getTranslateX1 = () => {
  return parseInt(getComputedStyle(list1).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX1 = (x) => {
  list1.style.transform = `translateX(${x}px)`;
};








const onScrollStart1 = (e) => {
  startX1 = getClientX1(e);
  
  window.addEventListener('mousemove', onScrollMove1);
  window.addEventListener('touchmove', onScrollMove1);
  window.addEventListener('mouseup', onScrollEnd1);
  window.addEventListener('touchend', onScrollEnd1);
};




const onScrollMove1 = (e) => {
  nowX1 = getClientX1(e);
  
  setTranslateX1(listX1 + nowX1 - startX1);
};




const onScrollEnd1 = (e) => {
  endX1 = getClientX1(e);
  listX1 = getTranslateX1();
  if (listX1 > 0) {
    setTranslateX1(0);
    list1.style.transition = `all 0.3s ease`;
    listX1 = 0;
  } else if (listX1 < listClientWidth1 - listScrollWidth1) {
    setTranslateX1(listClientWidth1 - listScrollWidth1);
    list1.style.transition = `all 0.3s ease`;
    listX1 = listClientWidth1 - listScrollWidth1;
  }

  window.removeEventListener('mousedown', onScrollStart1);
  window.removeEventListener('touchstart', onScrollStart1);
  window.removeEventListener('mousemove', onScrollMove1);
  window.removeEventListener('touchmove', onScrollMove1);
  window.removeEventListener('mouseup', onScrollEnd1);
  window.removeEventListener('touchend', onScrollEnd1);
  window.removeEventListener('click', onClick1);

  setTimeout(() => {
    bindEvents1();
    list1.style.transition = '';
  }, 300);
};






const onClick1 = (e) => {
  if (startX1 - endX1 !== 0) {
    e.preventDefault();
  }
};



const bindEvents1 = () => {
  list1.addEventListener('mousedown', onScrollStart1);
  list1.addEventListener('touchstart', onScrollStart1);
  list1.addEventListener('click', onClick1);
};
bindEvents1();

