const company = document.getElementById("company");
const companyText = Array.from(document.querySelector(".text_box1").children);
const special = document.getElementById('special_offer') 
const specialText = document.querySelector('.h2_wrap_2')
const hotels = document.getElementById('hotels')
const hotelsText = Array.from(document.querySelector('.h2_wrap_3').children)
const offers = document.getElementById('offers')
const offersText = document.querySelector('.h2_wrap_4')


console.log(hotelsText);

window.addEventListener("scroll", () => {
  var nowlocation = document.documentElement.scrollTop;


  function textAni(now, box, textBox){
    if(box === company || box === hotels){
      if (
        box.offsetTop < now + 500 &&
        now + 500 < box.offsetTop + box.offsetHeight
      ) {
        textBox.forEach((e) => {
          e.classList.remove("animate__fadeOutLeft");
          e.classList.add("animate__animated", "animate__fadeInLeft");
        });
      } else {
        textBox.forEach((e) => {
          e.classList.remove("animate__fadeInLeft");
          e.classList.add("animate__fadeOutLeft");
        });
      }

    }else if (box === special || box === offers){
      if (
        box.offsetTop < now + 500 &&
        now + 500 < box.offsetTop + box.offsetHeight
      ){
        textBox.classList.remove("animate__fadeOutDown");
        textBox.classList.add("animate__animated", "animate__fadeInUp");
      }else{
        textBox.classList.remove("animate__fadeInUp");
        textBox.classList.add("animate__fadeOutDown");
      }
    }
  }
  textAni(nowlocation, company, companyText)
  textAni(nowlocation, hotels, hotelsText)
  textAni(nowlocation, special, specialText)
  textAni(nowlocation, offers, offersText)
});

document.querySelector('.hotels_p').innerText = `Premium Lifestyle Leading Company\n최고의 품격과 신뢰를 바탕으로 고객이 꿈꾸는\n라이프스타일을 제공하는 글로벌 선도기업`
