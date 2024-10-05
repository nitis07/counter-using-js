const label = document.getElementById('labl');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');

let num = 0;
 let playGame = false;

  increase.addEventListener("click",()=>{
  num ++;
  label.innerHTML = `${num}`
playGame = true

});
  decrease.addEventListener("click",()=>{
   if (num>0) {
    num--;
    
   }
    label.innerHTML = `${num}`
    playGame = true

   });
   reset.addEventListener("click",()=>{
    num =0;
    label.innerHTML = `${num}`
    playGame = false

   });