const men_prev = document.querySelector('.Arr_men_prev')
const men_next = document.querySelector('.Arr_men_next')

const women_prev = document.querySelector('.Arr_women_prev')
const women_next = document.querySelector('.Arr_women_next')

const kids_prev = document.querySelector('.Arr_kids_prev')
const kids_next = document.querySelector('.Arr_kids_next')

const baby_prev = document.querySelector('.Arr_baby_prev')
const baby_next = document.querySelector('.Arr_baby_next')

const menWrap = document.querySelector('.Arrivals_Men_center')
const womenWrap = document.querySelector('.Arrivals_Women_center')
const kidsWrap = document.querySelector('.Arrivals_Kids_center')
const babyWrap = document.querySelector('.Arrivals_Baby_center')


function menClick() {
  let transX = 0;
  const epsilon = 1; // 오차 허용 범위
  function getmenX() {
    return Math.round(getComputedStyle(menWrap).transform.split(/[^\-0-9]+/g)[5]);
  };

  men_prev.addEventListener('click', () => {
    transX = Math.abs(getmenX());
    let widthX = document.querySelector('.Arr_men_1').offsetWidth * 2;
    
    if (Math.abs(transX - widthX) < epsilon || transX - widthX < 0) {
      menWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    } else {
      transX -= widthX;

      if (Math.abs(transX) < epsilon || transX < 0) {
        menWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      } else {
        menWrap.style.transform = `matrix(1, 0, 0, 1, ${-transX}, 0)`;
      }
    }
  });

  men_next.addEventListener('click', () => {
    transX = Math.abs(getmenX());

    let widthX = document.querySelector('.Arr_men_1').offsetWidth * 2;
    let maxwidthX = document.querySelector('.Arrivals_Men_center').scrollWidth - document.querySelector('.Arrivals_Men_center').offsetWidth;

    transX += widthX;

    if (transX < maxwidthX - epsilon) {
      menWrap.style.transform = `matrix(1, 0, 0, 1, ${-transX}, 0)`;
    } else {
      menWrap.style.transform = `matrix(1, 0, 0, 1, ${-maxwidthX}, 0)`;
    }
  });
}

menClick();





function womenClick(){
  let transwX = 0;
  const epsilon = 1;
  function getwomenX(){
    return Math.round(getComputedStyle(womenWrap).transform.split(/[^\-0-9]+/g)[5]);
  };

  
  
  women_prev.addEventListener('click',()=>{
    
    transwX = Math.abs(getwomenX());

    let widthwX = (document.querySelector('.Arr_women_1').offsetWidth) * 2;
    if(Math.abs(transwX-widthwX) < epsilon ||transwX-widthwX < 0){
      
      womenWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
      
    } else {
      transwX -= widthwX
      
      if (Math.abs(transwX) < epsilon || transwX < 0){
        womenWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
        
      } else{
        womenWrap.style.transform = `matrix(1, 0, 0, 1, ${-transwX}, 0)`
        
      }
    }
  })

  women_next.addEventListener('click', ()=>{
    transwX = Math.abs(getwomenX());
    
    let widthwX = (document.querySelector('.Arr_women_1').offsetWidth) * 2;
    let maxwidthwX = (document.querySelector('.Arrivals_Women_center').scrollWidth - document.querySelector('.Arrivals_Women_center').offsetWidth);
    transwX += widthwX
    if(transwX < maxwidthwX - epsilon){
      
      womenWrap.style.transform = `matrix(1, 0, 0, 1, ${-transwX}, 0)`
    } else {
      
      womenWrap.style.transform = `matrix(1, 0, 0, 1, ${-(maxwidthwX)}, 0)`
    }
    
  })
}

womenClick()




function kidsClick(){
  let transkX = 0;
  const epsilon = 1;
  function getkidsX(){
    return Math.round(getComputedStyle(kidsWrap).transform.split(/[^\-0-9]+/g)[5]);
  };

  
  
  kids_prev.addEventListener('click',()=>{
    
    transkX = Math.abs(getkidsX());

    let widthkX = (document.querySelector('.Arr_kids_1').offsetWidth) * 2;
    if(Math.abs(transkX-widthkX) < epsilon ||transkX-widthkX < 0){
      
      kidsWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
      
    } else {
      transkX -= widthkX
      
      if (Math.abs(transkX) < epsilon || transkX < 0){
        kidsWrap.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
        
      } else{
        kidsWrap.style.transform = `matrix(1, 0, 0, 1, ${-transkX}, 0)`
        
      }
    }
  })

  kids_next.addEventListener('click', ()=>{
    transkX = Math.abs(getkidsX());
    
    let widthkX = (document.querySelector('.Arr_kids_1').offsetWidth) * 2;
    let maxwidthkX = (document.querySelector('.Arrivals_Kids_center').scrollWidth - document.querySelector('.Arrivals_Kids_center').offsetWidth);
    transkX += widthkX
    if(transkX < maxwidthkX - epsilon){
      
      kidsWrap.style.transform = `matrix(1, 0, 0, 1, ${-transkX}, 0)`
    } else {
      
      kidsWrap.style.transform = `matrix(1, 0, 0, 1, ${-(maxwidthkX)}, 0)`
    }
    
  })
}

kidsClick()


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