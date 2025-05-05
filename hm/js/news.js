// const window1650 = window.matchMedia('(min-width: 1650px)');

const first = document.querySelector('.news_box_1');
const first_a = document.querySelector('.news_a1');
const first_text = document.querySelector('.news_texts_1');
const first_text_line = document.querySelector('.first_news_text');
const first_p1 = document.querySelector('.news_p1');
const second = document.querySelector('.news_box_2');
const second_a = document.querySelector('.news_a2');
const third = document.querySelector('.news_box_3');
const third_a = document.querySelector('.news_a3');
const four = document.querySelector('.news_box_4');
const four_a = document.querySelector('.news_a4');
const four_text_line = document.querySelector('.four_news_text');
const four_red_box = document.querySelector('.red_box_4');
const four_p1 = document.querySelector('.news_p4');
const five = document.querySelector('.news_box_5');
const five_a = document.querySelector('.news_a5');

function resetStyles() {
  first.style = '';
  first_a.style.visibility = '';
  first_text.style = '';
  first_text_line.style = '';
  first_p1.style = '';
  second.style = '';
  second_a.style.visibility = '';
  third.style = '';
  third_a.style.visibility = '';
  four.style = '';
  four_a.style.visibility = '';
  four_text_line.style = '';
  four_red_box.style = '';
  four_p1.style = '';
  five.style = '';
  five_a.style.visibility = '';
}

function addEventListeners() {
  first.addEventListener('mouseenter', onFirstEnter);
  first.addEventListener('mouseleave', onFirstLeave);
  second.addEventListener('mouseenter', onSecondEnter);
  second.addEventListener('mouseleave', onSecondLeave);
  third.addEventListener('mouseenter', onThirdEnter);
  third.addEventListener('mouseleave', onThirdLeave);
  four.addEventListener('mouseenter', onFourEnter);
  four.addEventListener('mouseleave', onFourLeave);
  five.addEventListener('mouseenter', onFiveEnter);
  five.addEventListener('mouseleave', onFiveLeave);
}

function removeEventListeners() {
  first.removeEventListener('mouseenter', onFirstEnter);
  first.removeEventListener('mouseleave', onFirstLeave);
  second.removeEventListener('mouseenter', onSecondEnter);
  second.removeEventListener('mouseleave', onSecondLeave);
  third.removeEventListener('mouseenter', onThirdEnter);
  third.removeEventListener('mouseleave', onThirdLeave);
  four.removeEventListener('mouseenter', onFourEnter);
  four.removeEventListener('mouseleave', onFourLeave);
  five.removeEventListener('mouseenter', onFiveEnter);
  five.removeEventListener('mouseleave', onFiveLeave);
}

function onFirstEnter() {
  first.style.width = '765px';
  first_a.style.visibility = 'visible';
  first_text.style.width = '320px';
  first_text.style.height = '153px';
  first_text_line.style.width = '225px';
  first_p1.style.opacity = '1';
}

function onFirstLeave() {
  first.style.width = '350px';
  first_a.style.visibility = 'hidden';
  first_text.style.width = '240px';
  first_text.style.height = '100px';
  first_text_line.style.width = '120px';
  first_p1.style.opacity = '0';
}

function onSecondEnter() {
  second.style.height = '625px';
  second_a.style.visibility = 'visible';
}

function onSecondLeave() {
  second.style.height = '350px';
  second_a.style.visibility = 'hidden';
}

function onThirdEnter() {
  third.style.height = '625px';
  third_a.style.visibility = 'visible';
}

function onThirdLeave() {
  third.style.height = '350px';
  third_a.style.visibility = 'hidden';
}

function onFourEnter() {
  four.style.width = '765px';
  four.style.backgroundSize = '74%';
  four_a.style.visibility = 'visible';
  four_p1.style.opacity = '1';
  four_red_box.style.opacity = '1';
  four_text_line.style.width = '225px';
}

function onFourLeave() {
  four.style.width = '350px';
  four_text_line.style.width = '120px';
  four.style.backgroundSize = '100%';
  four_a.style.visibility = 'hidden';
  four_p1.style.opacity = '0';
  four_red_box.style.opacity = '0';
}

function onFiveEnter() {
  five.style.height = '625px';
  five_a.style.visibility = 'visible';
}

function onFiveLeave() {
  five.style.height = '350px';
  five_a.style.visibility = 'hidden';
}


function handleResize(event) {
  if (event.matches) {
    addEventListeners();
  } else {
    removeEventListeners(); 
    resetStyles(); 
  }
}

handleResize(window1650);
window1650.addEventListener('change', handleResize);
