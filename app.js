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



let pageButton = document.querySelectorAll('button');

let displayValue = "";

let display = document.querySelector('input');

let inputValue1 = 0;
let inputValue2 = 0;
let runningValue = 0;
let operatorValue = "";
let firstNum = 0;
let firstInput = true;
let newCalc = true;


for(let i = 0; i < pageButton.length; i += 1) {

pageButton[i].addEventListener('click', (e) => { 



if(pageButton[i].className === "number") {
    
   if(firstInput || newCalc) {
   inputValue1 = 0;
   displayValue += pageButton[i].value; 
   display.value = displayValue;
   inputValue1 = parseInt(display.value) ;
   //newCalc = false;
   //firstInput = false;
   console.log(inputValue1);} 
   else if (firstInput === false) {
   displayValue += pageButton[i].value; 
   display.value = displayValue;
   inputValue2 = parseInt(display.value) ;
   console.log(inputValue2);}
   
    
  // display.value = displayValue;
     
   
         } else if (pageButton[i].className === "operator") {
          
          
     operatorValue = pageButton[i].value;
         
     displayValue = "";
         
     firstInput = false;
     newCalc = false;
         
         }
         
         
       else  if(pageButton[i].className === "equal-sign") {
    
   displayValue = "";
       display.value =  operate(operatorValue, inputValue1, inputValue2);
       
       
       
       
       
       
       inputValue1 = parseInt(display.value);
       
       newCalc = true;
   
      
      console.log(displayValue);
      
       
       
       
       }
       
       
       
         else if (pageButton[i].className === "all-clear"){
         display.value = "0";
         displayValue = "";
         firstInput = true;
         runningValue = 0;
         }
         
         
         
     
      
      
       
         });
            
         }
    
        
         
  
  