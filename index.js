
const firstPlan = document.querySelector('.calculator-screen-bottompart');
const secondPlan = document.querySelector('.calculator-screen-toppart');
const buttons = document.getElementsByClassName('number');
const realButtons = Array.from(buttons);
const signs = Array.from(document.getElementsByClassName('sign'));
const ac = document.querySelector('#buttonAC');
const del = document.querySelector('#clear');
const equals = document.querySelector('#buttonEquals');

//numbers
realButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(firstPlan.innerHTML.length < 18) {
        firstPlan.innerHTML += button.innerHTML;
        }
    })})

//operations
signs.forEach((sign) => {
   sign.addEventListener('click', () => {
       let regex =/\d$/; 
        //if digit is at the end of the string we can enter press sign
       if(regex.test(firstPlan.innerHTML)) {
        firstPlan.innerHTML = firstPlan.innerHTML + sign.innerHTML;
       }
   })
})

//del
del.addEventListener('click', () => {
    //removing the last sign/number from the string by replacing it with a new string without the last sign/number 
   firstPlan.innerHTML = firstPlan.innerHTML.slice(0, firstPlan.innerHTML.length-1); 
})

//AC 
ac.addEventListener('click',() => {
    firstPlan.innerHTML = '';
    secondPlan.innerHTML = '';


})

//equals
console.log(secondPlan)
equals.addEventListener('click',() => {
    if(/\d$/.test(firstPlan.innerHTML)) {
        //transforming string to mathematical expression and executing it
        secondPlan.innerHTML = eval(firstPlan.innerHTML);
        firstPlan.innerHTML = '';
    }
})
