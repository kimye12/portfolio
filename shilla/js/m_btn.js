

const nav_wrap = document.querySelector('.header_gnb_wrap')
const m_btn_1 = document.querySelector('.m_btn')
const x_btn_1 = document.querySelector('.close_btn')

m_btn_1.addEventListener('click',function(){
  $('.modal').css({
    'display' : 'block'
  })
  nav_wrap.style.right = '0px'
})

x_btn_1.addEventListener('click',function(){
  $('.modal').css({
    'display' : 'none'
  })
  nav_wrap.style.right = '-50%'
})


