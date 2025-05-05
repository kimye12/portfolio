


const media1023 = window.matchMedia('(max-width: 1023px)')
const media1024 = window.matchMedia('(min-width: 1024px)')
if (media1023.matches){
  RecScroll({
    textcontainer: '.text_men_box',
    photocontainer: '.men_photo_box', 
    prevbtn: '.rec_men_prev',
    nextbtn: '.rec_men_next'
  })
  RecScroll({
    textcontainer: '.text_women_box',
    photocontainer: '.women_photo_box', 
    prevbtn: '.rec_women_prev',
    nextbtn: '.rec_women_next'
  })
  RecScroll({
    textcontainer: '.text_kids_box',
    photocontainer: '.kids_photo_box', 
    prevbtn: '.rec_kids_prev',
    nextbtn: '.rec_kids_next'
  })
  RecScroll({
    textcontainer: '.text_baby_box',
    photocontainer: '.baby_photo_box', 
    prevbtn: '.rec_baby_prev',
    nextbtn: '.rec_baby_next'
  })

}

if (media1024.matches){
  
  RecScroll2({
    textcontainer: '.text_men_box',
    photocontainer: '.men_photo_box', 
    item: '.photo_item',
    prevbtn: '.rec_men_prev',
    nextbtn: '.rec_men_next'
  })
  RecScroll2({
    textcontainer: '.text_women_box',
    photocontainer: '.women_photo_box', 
    item: '.photo_item2',
    prevbtn: '.rec_women_prev',
    nextbtn: '.rec_women_next'
  })
  RecScroll2({
    textcontainer: '.text_kids_box',
    photocontainer: '.kids_photo_box', 
    item: '.photo_item3',
    prevbtn: '.rec_kids_prev',
    nextbtn: '.rec_kids_next'
  })
  RecScroll2({
    textcontainer: '.text_baby_box',
    photocontainer: '.baby_photo_box', 
    item: '.photo_item4',
    prevbtn: '.rec_baby_prev',
    nextbtn: '.rec_baby_next'
  })
}

media1023.addEventListener('change', (event) => {
  if (event.matches){
    RecScroll({
      textcontainer: '.text_men_box',
      photocontainer: '.men_photo_box', 
      prevbtn: '.rec_men_prev',
      nextbtn: '.rec_men_next'
    })
    RecScroll({
      textcontainer: '.text_women_box',
      photocontainer: '.women_photo_box', 
      prevbtn: '.rec_women_prev',
      nextbtn: '.rec_women_next'
    })
    RecScroll({
      textcontainer: '.text_kids_box',
      photocontainer: '.kids_photo_box', 
      prevbtn: '.rec_kids_prev',
      nextbtn: '.rec_kids_next'
    })
    RecScroll({
      textcontainer: '.text_baby_box',
      photocontainer: '.baby_photo_box', 
      prevbtn: '.rec_baby_prev',
      nextbtn: '.rec_baby_next'
    })
  } else{
    RecScroll2({
      textcontainer: '.text_men_box',
      photocontainer: '.men_photo_box', 
      item: '.photo_item',
      prevbtn: '.rec_men_prev',
      nextbtn: '.rec_men_next'
    })
    RecScroll2({
      textcontainer: '.text_women_box',
      photocontainer: '.women_photo_box', 
      item: '.photo_item2',
      prevbtn: '.rec_women_prev',
      nextbtn: '.rec_women_next'
    })
    RecScroll2({
      textcontainer: '.text_kids_box',
      photocontainer: '.kids_photo_box', 
      item: '.photo_item3',
      prevbtn: '.rec_kids_prev',
      nextbtn: '.rec_kids_next'
    })
    RecScroll2({
      textcontainer: '.text_baby_box',
      photocontainer: '.baby_photo_box', 
      item: '.photo_item4',
      prevbtn: '.rec_baby_prev',
      nextbtn: '.rec_baby_next'
    })
  }
})

function RecScroll(args){

  const scrollTextContainer = document.querySelector(args.textcontainer);
  const scrollPhotoContainer = document.querySelector(args.photocontainer);
  
  const scrollArrowprev = document.querySelector(args.prevbtn);
  const scrollArrownext = document.querySelector(args.nextbtn);
  
  
  let textboxWidth = scrollTextContainer.offsetWidth;
  let photoboxWidth = scrollPhotoContainer.offsetWidth;
  
  let secondtext = Math.round(-(textboxWidth * 1.05));
  let thirdtext = Math.round(-(textboxWidth * 2.1));
  let fourtext = Math.round(-(textboxWidth * 3.15));
  let fivetext = Math.round(-(textboxWidth * 4.2));

  let secondphoto = Math.round(-(photoboxWidth * 1.05));
  let thirdphoto = Math.round(-(photoboxWidth * 2.1));
  let fourphoto = Math.round(-(photoboxWidth * 3.15));
  let fivephoto = Math.round(-(photoboxWidth * 4.2));

  const updateSizes = () => {
    requestAnimationFrame(() => {
      textboxWidth = scrollTextContainer.offsetWidth;
      photoboxWidth = scrollPhotoContainer.offsetWidth;
  
      secondtext = Math.round(-(textboxWidth * 1.05));
      thirdtext = Math.round(-(textboxWidth * 2.1));
      fourtext = Math.round(-(textboxWidth * 3.15));
      fivetext = Math.round(-(textboxWidth * 4.2));
  
      secondphoto = Math.round(-(photoboxWidth * 1.05));
      thirdphoto = Math.round(-(photoboxWidth * 2.1));
      fourphoto = Math.round(-(photoboxWidth * 3.15));
      fivephoto = Math.round(-(photoboxWidth * 4.2));
    });
  };

  ['DOMContentLoaded', 'load', 'resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event,updateSizes)
  })

  const getTranslateX1 = () => {
    return Math.round(getComputedStyle(scrollTextContainer).transform.split(/[^\-0-9]+/g)[5]);
  };
  const getTranslateX2 = () => {
    return Math.round(getComputedStyle(scrollPhotoContainer).transform.split(/[^\-0-9]+/g)[5]);
  };
  
  const setTranslateX1 = (x) => { 
    scrollTextContainer.style.transform = `translateX(${x}px)`;
  };
  const setTranslateX2 = (x) => { 
    scrollPhotoContainer.style.transform = `translateX(${x}px)`;
  };

  

  scrollArrowprev.addEventListener('click', ()=>{
    let TextTransform = getTranslateX1()
    let PhotoTransform = getTranslateX2()
    
    if (TextTransform === 0){
      return
    } else if(TextTransform === secondtext && PhotoTransform === secondphoto){
      setTranslateX1(0) 
      setTranslateX2(0) 
    } else if(TextTransform === thirdtext && PhotoTransform === thirdphoto){
      setTranslateX1(secondtext) // -105%;
      setTranslateX2(secondphoto) // -105%;
    } else if(TextTransform === fourtext && PhotoTransform === fourphoto){
      setTranslateX1(thirdtext) // -210%;
      setTranslateX2(thirdphoto) // -210%;
    } else if(TextTransform === fivetext && PhotoTransform === fivephoto){
      setTranslateX1(fourtext) // -315%;
      setTranslateX2(fourphoto) // -315%;
    }
  })



  scrollArrownext.addEventListener('click', ()=>{
    let TextTransform = getTranslateX1()
    let PhotoTransform = getTranslateX2()

    if (TextTransform === 0){
      setTranslateX1(secondtext) // -105%
      setTranslateX2(secondphoto) // -105%
      
    } else if(TextTransform === secondtext && PhotoTransform === secondphoto){
      setTranslateX1(thirdtext) // -210%;
      setTranslateX2(thirdphoto) // -210%;
    } else if(TextTransform === thirdtext && PhotoTransform === thirdphoto){
      setTranslateX1(fourtext) // -315%;
      setTranslateX2(fourphoto) // -315%;
    } else if(TextTransform === fourtext && PhotoTransform === fourphoto){
      setTranslateX1(fivetext) // -420%;
      setTranslateX2(fivephoto) // -420%
    } else if(TextTransform === fivetext && PhotoTransform === fivephoto){
      return
    }
  })
  
  
}
function RecScroll2(args){

  const scrollTextContainer = document.querySelector(args.textcontainer);
  const photoItems = Array.from(document.querySelectorAll(`${args.photocontainer} ${args.item}`))
  const scrollPhotoContainer = document.querySelector(args.photocontainer);
  const scrollArrowprev = document.querySelector(args.prevbtn);
  const scrollArrownext = document.querySelector(args.nextbtn);
  
  
  let textboxWidth = scrollTextContainer.offsetWidth;
  let photoboxWidth = 300;
  
  let secondtext = Math.round(-(textboxWidth * 1.1));
  let thirdtext = Math.round(-(textboxWidth * 2.2));
  let fourtext = Math.round(-(textboxWidth * 3.3));
  let fivetext = Math.round(-(textboxWidth * 4.4));

  let secondphoto = Math.round(-(photoboxWidth * 1));
  let thirdphoto = Math.round(-(photoboxWidth * 2));
  let fourphoto = Math.round(-(photoboxWidth * 3));
  let fivephoto = Math.round(-(photoboxWidth * 4));

  const updateSizes = () => {
    requestAnimationFrame(() => {
      textboxWidth = scrollTextContainer.offsetWidth;
      photoboxWidth = scrollPhotoContainer.offsetWidth;
  
      secondtext = Math.round(-(textboxWidth * 1.05));
      thirdtext = Math.round(-(textboxWidth * 2.1));
      fourtext = Math.round(-(textboxWidth * 3.15));
      fivetext = Math.round(-(textboxWidth * 4.2));
  
      secondphoto = Math.round(-(photoboxWidth * 1.05));
      thirdphoto = Math.round(-(photoboxWidth * 2.1));
      fourphoto = Math.round(-(photoboxWidth * 3.15));
      fivephoto = Math.round(-(photoboxWidth * 4.2));
    });
  }
  
  ['DOMContentLoaded', 'load', 'resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event,updateSizes)
  })
  
  function findprevActive(){
    let activeItem = photoItems.find((item) => {
      return item.classList.contains('active')
    })
    console.log(activeItem)
    let previtem = photoItems[photoItems.indexOf(activeItem) - 1];

    
    console.log(previtem)
    return previtem
  }
 
  function findnextActive(){
    let activeItem = photoItems.find((item) => {
      return item.classList.contains('active')
    })
    
    let nextitem = photoItems[photoItems.indexOf(activeItem) + 1]
    
    return nextitem
  }
  
  function prevActive(){
    let previtem = findprevActive()
    photoItems.forEach((item)=>{
      item.classList.remove('active')
    })
    previtem.classList.add('active')
    
  }
  function nextActive(){
    let nextitem = findnextActive()
   
    photoItems.forEach((item)=>{
      item.classList.remove('active')
    })
    nextitem.classList.add('active')
    
  }

  const getTranslateX1 = () => {
    return Math.round(getComputedStyle(scrollTextContainer).transform.split(/[^\-0-9]+/g)[5]);
  };
  const getTranslateX2 = () => {
    return Math.round(getComputedStyle(scrollPhotoContainer).transform.split(/[^\-0-9]+/g)[5]);
  };
  
  const setTranslateX1 = (x) => { 
    scrollTextContainer.style.transform = `translateX(${x}px)`;
  };
  const setTranslateX2 = (x) => { 
    scrollPhotoContainer.style.transform = `translateX(${x}px)`;
  };

  

  scrollArrowprev.addEventListener('click', ()=>{
    let TextTransform = getTranslateX1()
    let PhotoTransform = getTranslateX2()
    
    if (TextTransform === 0){
      return
    } else if(TextTransform === secondtext && PhotoTransform === secondphoto){
      setTranslateX1(0) 
      setTranslateX2(0) 
      prevActive()
    } else if(TextTransform === thirdtext && PhotoTransform === thirdphoto){
      setTranslateX1(secondtext) // -105%;
      setTranslateX2(secondphoto) // -105%;
      prevActive()
    } else if(TextTransform === fourtext && PhotoTransform === fourphoto){
      setTranslateX1(thirdtext) // -210%;
      setTranslateX2(thirdphoto) // -210%;
      prevActive()
    } else if(TextTransform === fivetext && PhotoTransform === fivephoto){
      setTranslateX1(fourtext) // -315%;
      setTranslateX2(fourphoto) // -315%;
      prevActive()
    }
  })



  scrollArrownext.addEventListener('click', ()=>{
    let TextTransform = getTranslateX1()
    let PhotoTransform = getTranslateX2()

    if (TextTransform === 0){
      setTranslateX1(secondtext) // -105%
      setTranslateX2(secondphoto) // -105%
      nextActive()
    } else if(TextTransform === secondtext && PhotoTransform === secondphoto){
      setTranslateX1(thirdtext) // -210%;
      setTranslateX2(thirdphoto) // -210%;
      nextActive()
    } else if(TextTransform === thirdtext && PhotoTransform === thirdphoto){
      setTranslateX1(fourtext) // -315%;
      setTranslateX2(fourphoto) // -315%;
      nextActive()
    } else if(TextTransform === fourtext && PhotoTransform === fourphoto){
      setTranslateX1(fivetext) // -420%;
      setTranslateX2(fivephoto) // -420%
      nextActive()
    } else if(TextTransform === fivetext && PhotoTransform === fivephoto){
      return
    }
  })
  
  
}

