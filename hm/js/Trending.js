
const header_h1 = document.querySelector('.header_h1')
function responsive(){
  if(matchMedia('screen and (min-width: 1024px)').matches){
    
    header_h1.classList.remove('ir_pm')
    
  } else{
    
    header_h1.classList.add('ir_pm')

  }
}

['DOMContentLoaded', 'load', 'resize', 'orientationchange'].forEach(event => {
  window.addEventListener(event, responsive)
})




function responsive2(){
  if(matchMedia('screen and (min-width: 768px)').matches){
    document.querySelector('.copyright_4').innerText= '이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다.'

  } else{
    document.querySelector('.copyright_4').innerText= '이 사이트의 콘텐츠는 저작권 보호를 받고 있는 \n H & M Hennes & Mauritz AB의 자산입니다.'

  }
}
['DOMContentLoaded', 'load', 'resize', 'orientationchange'].forEach(event =>{
  window.addEventListener(event, responsive2)
})


document.querySelector('.best_6_text').innerText = '엠브로이더리\n코튼 블라우스'
document.querySelector('.sign_up_p').innerText = '3만원 이상 무료배송\n& 첫구매 10% 할인'