const dd = document.getElementById('recommand')
const dd1 = document.getElementById('Arrivals')

window.addEventListener('scroll',()=>{
  let scrollLocation = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let boxHeight = dd.scrollHeight;
  console.log(scrollLocation)
  console.log(boxHeight)
  if(scrollLocation + windowHeight >= boxHeight){
   
  }
})