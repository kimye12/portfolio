function scrollSlide(args) {
  const scrollContainerEle = document.querySelector(args.container);
  const scrollItems = Array.from(document.querySelectorAll(`${args.container} ${args.item}`));
  const pagerItems = Array.from(document.querySelectorAll(`${args.pager} ${args.pagerItem}`));
  const ArrItems = Array.from(document.querySelectorAll(`${args.transbox} ${args.transitem}`));
  const arrowItems = Array.from(document.querySelectorAll(`${args.arrowbox} ${args.arrowitem}`));
  
  let allowAnimation = true;
  
  
  // NOTE:
  // INNER FUNCTIONS DECLARATION
  
  function addAnimationClasses() {
    scrollItems.forEach((item) => {
      item.classList.add(args.animType);
    });
  }

  function addLoppAnimClasses() {
    let activeItem = scrollItems.find((item) => {
      return item.classList.contains('active');
    });

    let nextItem = scrollItems[scrollItems.indexOf(activeItem) + 1];
    let prevItem = scrollItems[scrollItems.indexOf(activeItem) - 1];

    if (!nextItem) {
      nextItem = scrollItems[0];
    }

    if (!prevItem) {
      prevItem = scrollItems[scrollItems.length - 1];
    }
    let itemsProceed = 0;

    scrollItems.forEach((item) => {
      itemsProceed++;
      item.classList.remove('ss-move-prev');
      item.classList.remove('ss-move-next');

      if (itemsProceed === scrollItems.length) {
        nextItem.classList.add('ss-move-next');
        prevItem.classList.add('ss-move-prev');
      }
    });
  }

  function addAnimationDuration() {
    scrollItems.forEach((item) => {
      item.style.transitionDuration = `${args.duration}s`;
      addAnimationDelay(item);
    });
  }

  function addAnimationDelay(item) {
    item.style.transitionDelay = `${args.delay}s`;
  }

  function stopScrollAnim() {
    if (allowAnimation) {
      allowAnimation = false;
    }
    allowAnimationTimeout = setTimeout(() => {
      allowAnimation = true;

      scrollItems.forEach((item) => {
        item.classList.remove('ss-moving');
      });
    }, (args.duration + args.delay) * 1000);
  }

  function changeScrollSlide(moveDown) {
    // 현재 활성 슬라이드 확인
    const activeSlide = scrollItems.find((item) => item.classList.contains('active'));
    const activeIndex = scrollItems.indexOf(activeSlide);
  
    // 첫 슬라이드에서 위로 스크롤 시 제한
    if (activeIndex === 0 && !moveDown) {
      console.log('Reached the first slide, cannot scroll up.');
      return; // 아무 동작도 하지 않음
    }
  
    // 마지막 슬라이드에서 아래로 스크롤 시 제한
    if (activeIndex === scrollItems.length - 1 && moveDown) {
      console.log('Reached the last slide, cannot scroll down.');
      return; // 아무 동작도 하지 않음
    }
  
    // 다음 슬라이드로 이동
    let nextSlide;
    if (moveDown) {
      nextSlide = scrollItems[activeIndex + 1];
    } else {
      nextSlide = scrollItems[activeIndex - 1];
    }
  
    if (nextSlide) {
      updateActiveSlide(activeSlide, nextSlide);
    }
  }
  
  

  function updateActiveSlide(currentSlide, nextSlide) {
    currentSlide.classList.add('ss-moving');
    nextSlide.classList.add('ss-moving');
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');

    // Update pager items
    const activeIndex = scrollItems.indexOf(nextSlide);
    
    updatePagerItems(activeIndex);
    hiddenArrow(activeIndex)


    if (args.uncutMove) {
      addLoppAnimClasses();
    }
  }

  function hiddenArrow(index){
    // cIndex를 제외한 형제 요소들의 transform 초기화
    const siblings = Array.from(arrowItems[index].parentElement.children).filter(
      (item) => item !== arrowItems[index]
    );
    arrowItems[index].style.visibility = 'visible';
    siblings.forEach((sibling) => {
      sibling.style.visibility = 'hidden';
    });
    
  }

 

  function updatePagerItems(activeIndex) {
    pagerItems.forEach((pagerItem, index) => {
      if (index === activeIndex) {
        pagerItem.classList.add('active-pager');
      } else {
        pagerItem.classList.remove('active-pager');
      }
    });
  }

  function handlePagerClick() {
    pagerItems.forEach((pagerItem, index) => {
      pagerItem.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지
        const currentActive = scrollItems.find((item) => item.classList.contains('active'));
        const targetSlide = scrollItems[index];
        updateActiveSlide(currentActive, targetSlide);
      });
    });
  }
  

  // NOTE:
  // INNER FUNCTION CALLS
  addAnimationClasses();
  if (args.uncutMove) {
    addLoppAnimClasses();
  }
  addAnimationDuration();
  handlePagerClick();

  return (function () {
    let eventType;
    let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    let isIe = /MSIE|Trident/.test(window.navigator.userAgent);
    if (isFirefox) {
      eventType = 'DOMMouseScroll';
    } else if (isIe) {
      eventType = 'mousewheel';
    } else {
      eventType = 'wheel';
    }
    scrollContainerEle.addEventListener(eventType, function (event) {
      let scrollTop = scrollContainerEle.scrollTop,
          scrollHeight = scrollContainerEle.scrollHeight,
          height = scrollContainerEle.clientHeight;
  
      let delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0);
  
      // 현재 활성 슬라이드 확인
      const activeSlide = scrollItems.find((item) => item.classList.contains('active'));
      const activeIndex = scrollItems.indexOf(activeSlide);
  
      // 첫 슬라이드에서 위로 스크롤 시 기본 동작 허용
      if (activeIndex === 0 && delta > 0) {
        return; // 기본 스크롤 동작 허용
      }
  
      // 마지막 슬라이드에서 아래로 스크롤 시 기본 동작 허용
      if (activeIndex === scrollItems.length - 1 && delta < 0) {
        return; // 기본 스크롤 동작 허용
      }
  
      // 슬라이드 내에서 스크롤 동작 처리
      if ((delta > 0 && scrollTop - delta <= 0) || (delta < 0 && scrollTop + height >= scrollHeight - 1)) {
        if (delta > 0) {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(false);
          }
        } else {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(true);
          }
        }
        event.preventDefault(); // 슬라이드 전환 시 기본 스크롤 방지
      } else {
        if (delta < 0) {
          if (allowAnimation) {
            stopScrollAnim();
            changeScrollSlide(true);
          }
        }
        event.preventDefault(); // 슬라이드 전환 시 기본 스크롤 방지
      }
    });
  })();
  
}

// Call the function
scrollSlide({
  container: ".Arrivals_box_center",
  item: ".Arr-item",
  pager: ".Arr_pager",
  pagerItem: ".pager_box",
  transbox: '.Arr-con',
  transitem: '.Arr-move',
  arrowbox: '.Arr_arrow_box',
  arrowitem: '.arrow_item',
  animType: "ss-move-up",
  duration: 1,
  delay: 0,
  uncutMove: true
});

