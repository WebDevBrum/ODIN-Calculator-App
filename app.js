function add(a, b) {

  return a + b;
}

function subtract(a, b) {

	return a - b;
}

function multiply(a, b){

  return a * b;
}

function divide(a, b){

  return a / b;
}



function operate(operator, number1, number2) {
   
  value = window[operator](number1,
  number2);
  
  return value;
  

	
}

console.log(operate( "add",1, 3));

let pageButton = document.querySelectorAll('button');

let displayValue = "";

let display = document.querySelector('input');

for(let i = 0; i < pageButton.length; i += 1) {

pageButton[i].addEventListener('click', (e) => { 



if(pageButton[i].className === "number") {
         displayValue +=    pageButton[i].value; 
         console.log(displayValue);}
         display.value = displayValue;
       
         });
            
         }
    
        
         
  
  