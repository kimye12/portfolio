
// $(function(){
  
//   let rolling1;
//   let count1 = 0
//   function gotoFade1(){
//     const sale_1 = document.querySelector('.sale_1');
//     if(count1 === 0){
//       sale_1.style.transform = `matrix(1, 0, 0, 1, 0, -50)`
//       sale_1.style.opacity = `0`
      
//       count1 = 1
//     } else if(count1 === 1){
//       sale_1.style.transform = `matrix(1, 0, 0, 1, 0, 50)`
//       count1 = 2
//     } else{
//       sale_1.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
//       count1 = 0
//       sale_1.style.opacity = `1`
      
//     }
//   }
  
//   let autocount = 0;
  
//   function autoFade1(){
//     rolling1 = setInterval(function(){
//       gotoFade1()
//     },2000)
//   }
  
//   autoFade1()
// })

// $(function(){
  
//   let rolling;
//   let count = 0
//   function gotoFade(){
//     const sale_2 = document.querySelector('.sale_2');
//     if(count === 0){
//       sale_2.style.transform = `matrix(1, 0, 0, 1, 0, -50)`
//       sale_2.style.opacity = `0`
      
//       count = 1
//     } else if(count === 1){
//       sale_2.style.transform = `matrix(1, 0, 0, 1, 0, 50)`
//       count = 2
//     } else{
//       sale_2.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
//       count = 0
//       sale_2.style.opacity = `1`
      
//     }
//   }
  
//   let autocount = 0;
  
//   function autoFade(){
//     setTimeout(() => {
//       gotoFade()
//       rolling = setInterval(function(){
//         gotoFade()
//       },2000)
//     }, 3000);
//   }
  
//   autoFade()
// })

// $(function(){
  
//   let rolling;
//   let count = 0
//   function gotoFade(){
//     const sale_3 = document.querySelector('.sale_3');
//     if(count === 0){
//       sale_3.style.transform = `matrix(1, 0, 0, 1, 0, -50)`
//       sale_3.style.opacity = `0`
      
//       count = 1
//     } else if(count === 1){
//       sale_3.style.transform = `matrix(1, 0, 0, 1, 0, 50)`
//       count = 2
//     } else{
//       sale_3.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
//       count = 0
//       sale_3.style.opacity = `1`
      
//     }
//   }
  
//   let autocount = 0;
  
//   function autoFade(){
//     setTimeout(() => {
//       gotoFade()
//       rolling = setInterval(function(){
//         gotoFade()
//       },2000)
//     }, 2300);
//   }
  
//   autoFade()
// })

// $(function(){
  
//   let rolling;
//   let count = 0
//   function gotoFade(){
//     const sale_4 = document.querySelector('.sale_4');
//     if(count === 0){
//       sale_4.style.transform = `matrix(1, 0, 0, 1, 0, -50)`
//       sale_4.style.opacity = `0`
      
//       count = 1
//     } else if(count === 1){
//       sale_4.style.transform = `matrix(1, 0, 0, 1, 0, 50)`
//       count = 2
//     } else{
//       sale_4.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
//       count = 0
//       sale_4.style.opacity = `1`
      
//     }
//   }
  
//   let autocount = 0;
//   let t = 2000
//   function autoFade(){
//     setTimeout(() => {
//       gotoFade();
//       if(count == 1){
//         t = 1000
//       } else {
//         t = 2000
//       }
//       rolling = setInterval(function(){
//         gotoFade();
      
//       },t)
//     }, 2500);
    
//   }
  
//   autoFade()
// })