const header = document.querySelector('.header_wrap')
const visual = document.getElementById('visual')
const nav = document.querySelector('.nav__links')

const stickyNav = function(entries) {
  const [entry] = entries
  console.log(entry);

  if(!entry.isIntersecting) header.classList.add('sticky')
  else{header.classList.remove('sticky')}
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin : '-100px'
})

headerObserver.observe(visual)


nav.addEventListener('click', function(e){
  e.preventDefault()
  console.log(e.target);
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({
      behavior : 'smooth',
      block : 'center'

    })
  }
})


const headerHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('.nav__links').querySelectorAll('.nav__link')
    const h1 = document.querySelector('.nav>h1')

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    })

    h1.style.opacity = this;
  }
}

nav.addEventListener('mouseover', headerHover.bind(0.5))
nav.addEventListener('mouseout', headerHover.bind(1))


