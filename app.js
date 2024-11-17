let ibtn = document.querySelector('.ibtn')
let counterInput = document.querySelector('.counter input')

function iclick(){
    let value = Number(counterInput.value)
    counterInput.value = value + 1;
  
} 
ibtn.addEventListener('click', iclick)


let dbtn = document.querySelector('.dbtn')
function dclick (){
    let value = Number(counterInput.value)
   if(value > 1){
    counterInput.value = value-1
   }
    

}
dbtn.addEventListener('click', dclick)

function convertToPositive (){
   let pN= Math.abs(counterInput.value)
   counterInput.value=pN
}
counterInput.addEventListener('keyup',convertToPositive)