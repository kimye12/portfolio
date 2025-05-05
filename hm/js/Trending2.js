



const first_box = document.querySelector('.trending_first_box')
const second_box =document.querySelector('.trending_second_box')
const third_box =document.querySelector('.trending_third_box')

const window1650 = window.matchMedia('(min-width: 1650px)');
const window1024 = window.matchMedia('(max-width: 1649px) and (min-width: 1024px)');
const window768 =  window.matchMedia('(max-width: 1023px)')

if (window1650.matches) {
  trending1650();
  
} else if (window1024.matches) {
  trending1024();
  
}
window1650.addEventListener('change',(event)=>{
  if(event.matches){
    trending1650()
    console.log('1650')
  }
})
window1024.addEventListener('change',(event)=>{
  if(event.matches){
    trending1024()
    console.log('1024')
  } 

})
window768.addEventListener('change',(event)=>{
  if(event.matches){
    trending768()
  }
})
function trending768(){
  first_box.style.width = '100%'
  second_box.style.width = '100%'
  third_box.style.width = '100%'  
  first_box.addEventListener('mouseenter', ()=>{
    first_box.style.width = '100%'
    first_box.style.zIndex = '2'
  })
  first_box.addEventListener('mouseleave', ()=>{
    first_box.style.width = '100%'
    first_box.style.zIndex = '1'
  })
  second_box.addEventListener('mouseenter', ()=>{
    
    second_box.style.width = '100%'
    second_box.style.zIndex = '2'
  })
  second_box.addEventListener('mouseleave', ()=>{
    second_box.style.width = '100%'
    second_box.style.zIndex = '1'
  })
  third_box.addEventListener('mouseenter', ()=>{
    third_box.style.width = '100%'
    third_box.style.zIndex = '2'
  })
  third_box.addEventListener('mouseleave', ()=>{
    third_box.style.width = '100%'
    third_box.style.zIndex = '1'
  })
}
function trending1650(){
 
  first_box.addEventListener('mouseenter', ()=>{
    first_box.style.width = '1120px'
    first_box.style.zIndex = '2'
  })
  first_box.addEventListener('mouseleave', ()=>{
    first_box.style.width = '600px'
    first_box.style.zIndex = '1'
  })
  second_box.addEventListener('mouseenter', ()=>{
    
    second_box.style.width = '1100px'
    second_box.style.zIndex = '2'
  })
  second_box.addEventListener('mouseleave', ()=>{
    second_box.style.width = '600px'
    second_box.style.zIndex = '1'
  })
  third_box.addEventListener('mouseenter', ()=>{
    third_box.style.width = '1160px'
    third_box.style.zIndex = '2'
  })
  third_box.addEventListener('mouseleave', ()=>{
    third_box.style.width = '600px'
    third_box.style.zIndex = '1'
  })
}

function trending1024(){
  first_box.style.width = '40%'
  second_box.style.width = '40%'
  third_box.style.width = '40%'
  first_box.addEventListener('mouseenter', ()=>{
    first_box.style.width = '72%'
    first_box.style.zIndex = '2'
  })
  first_box.addEventListener('mouseleave', ()=>{
    first_box.style.width = '40%'
    first_box.style.zIndex = '1'
  })
  second_box.addEventListener('mouseenter', ()=>{
    
    second_box.style.width = '60%'
    second_box.style.zIndex = '2'
  })
  second_box.addEventListener('mouseleave', ()=>{
    second_box.style.width = '40%'
    second_box.style.zIndex = '1'
  })
  third_box.addEventListener('mouseenter', ()=>{
    third_box.style.width = '75%'
    third_box.style.zIndex = '2'
  })
  third_box.addEventListener('mouseleave', ()=>{
    third_box.style.width = '40%'
    third_box.style.zIndex = '1'
  })
}


