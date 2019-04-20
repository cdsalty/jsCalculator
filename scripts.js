// alert("sanity check");

//Step 2: Create a Class (and a constructor function;)
class calculator {
    constructor(previousInput, currentInput) { 
        this.previousInput = previousInput; // gives ability to set these elements inside our calculator class.   
        this.currentInput = currentInput;
    }
     
}


//Step 1: Assign buttons to variables (To Call on them later)
const numberBtn=document.querySelectorAll('[data-number]');
const operationBtn=document.querySelectorAll('[data-operator]');
const equalsBtn=document.querySelector('[data-equals]')
const deleteBtn=document.querySelector('[data-delete]');
const clearScreen=document.querySelector('[data-allclear]');
const previousInput=document.querySelector('[data-previous-input]');
const currentInput=document.querySelector('[data-current-input]');

