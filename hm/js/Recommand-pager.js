function pagerClick(args){
  const pagerItems = Array.from(document.querySelectorAll(`${args.pagerBox} ${args.pageritem}`))
  const boxItems = Array.from(document.querySelectorAll(`${args.container1} ${args.item1}`))



  function pagerHandle(){
    pagerItems.forEach((pageritem,index) => {
      pageritem.addEventListener('click', (event) =>{
        event.preventDefault();
        

        pagerItems.forEach((item) => item.classList.remove('active'))
        boxItems.forEach((box) => box.classList.remove('visible'))


        pageritem.classList.add('active')
        boxItems[index].classList.add('visible')
      })
    })
  }

  pagerHandle();
}


pagerClick({
  container1: '.recommand_center_mid',
  item1: ".rec_box",
  pagerBox: '.rec_pager',
  pageritem: '.rec_pager_item'
})