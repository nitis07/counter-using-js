const label = document.getElementById('labl');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');

let num = 0

increase.addEventListener("click",()=>{
 num ++;
 label.innerHTML = `${num}`
});
