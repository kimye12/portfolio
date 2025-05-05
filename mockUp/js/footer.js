//1
let roller1 = document.querySelector('.footer_p');
roller1.id = 'roller1'; // 아이디부여

let clone1 = roller1.cloneNode(true)
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone1.id = 'roller2';
document.querySelector('.footer_backtext').appendChild(clone1);

// document.querySelector('#roller1').style.left = '0px';
// document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth사용시 css에 position추가

roller1.classList.add('original1');
clone1.classList.add('clone1');