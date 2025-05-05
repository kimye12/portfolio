const slider = function() {
  const slides = document.querySelectorAll('.slide')
  const btnLeft =  document.querySelector('.slider__btn--left')
  const btnRight =  document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0;
  const maxSlide = slides.length - 1
  console.log(maxSlide);

 

  const createDots = function(){
    slides.forEach(function(_, i){
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    } )
  }

  createDots()


  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')
  }

  const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (-slide)}%)`)
  }

  goToSlide(0)
  activateDot(0)

  const nextSlide = function() {
    if(curSlide === maxSlide){
      curSlide = 0;
    }else{
      curSlide++;
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function() {
    if(curSlide === 0){
      curSlide = maxSlide;
    }else{
      curSlide--;
    }
    
    goToSlide(curSlide)
    activateDot(curSlide)
  }


  btnRight.addEventListener('click', function() {
    nextSlide()

  })
  btnLeft.addEventListener('click', function() {
    prevSlide()
  })


  document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })


  dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')){
      
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide)
      activateDot(curSlide)
    }
  })

};
slider();