
function babyClick(){
  let transkX = 0;
  const epsilon = 1;
  function getbabyX(){
    return Math.round(getComputedStyle(babyWrap).transform.split(/[^\-0-9]+/g)[5]);
  };

  
  
  baby_prev.addEventListener('click',()=>{
    
    transkX = Math.abs(getbabyX());

    let widthkX = (document.querySelector('.Arr_baby_1').offsetWidth) * 2;
    if(Math.abs(transkX-widthkX) < epsilon ||transkX-widthkX < 0){
      
      babyWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
      
    } else {
      transkX -= widthkX
      
      if (Math.abs(transkX) < epsilon || transkX < 0){
        babyWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
        
      } else{
        babyWrap.style.transform = `matrix(1, 0, 0, 1, ${-transkX}, 0)`
        
      }
    }
  })

  baby_next.addEventListener('click', ()=>{
    transkX = Math.abs(getbabyX());
    
    let widthkX = (document.querySelector('.Arr_baby_1').offsetWidth) * 2;
    let maxwidthkX = (document.querySelector('.Arrivals_Baby_center').scrollWidth - document.querySelector('.Arrivals_Baby_center').offsetWidth);
    transkX += widthkX
    if(transkX < maxwidthkX - epsilon){
      
      babyWrap.style.transform = `matrix(1, 0, 0, 1, ${-transkX}, 0)`
    } else {
      
      babyWrap.style.transform = `matrix(1, 0, 0, 1, ${-(maxwidthkX)}, 0)`
    }
    
  })
}

babyClick()