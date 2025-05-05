//1
let roller1 = document.querySelector('.left_slide_wrap');
roller1.id = 'roller1'; // 아이디부여

let clone1 = roller1.cloneNode(true)
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone1.id = 'roller2';
document.querySelector('.left_slide_box').appendChild(clone1);

// document.querySelector('#roller1').style.left = '0px';
// document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth사용시 css에 position추가

roller1.classList.add('original1');
clone1.classList.add('clone1');









//2
let roller2 = document.querySelector('.right_slide_wrap');
roller2.id = 'roller3'; // 아이디부여

let clone2 = roller2.cloneNode(true)
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone2.id = 'roller4';
document.querySelector('.right_slide_box').appendChild(clone2);

// document.querySelector('#roller1').style.left = '0px';
// document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth사용시 css에 position추가

roller2.classList.add('original2');
clone2.classList.add('clone2');









//3
let roller3 = document.querySelector('.hotels_h3');
roller3.id = 'rollerh3'; // 아이디부여

let clone3 = roller3.cloneNode(true)
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone3.id = 'rollerh3_2';
document.querySelector('.h3_wrap_3').appendChild(clone3);

// document.querySelector('#roller1').style.left = '0px';
// document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth사용시 css에 position추가

roller3.classList.add('original3');
clone3.classList.add('clone3');





