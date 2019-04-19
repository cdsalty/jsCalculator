// alert("sanity check");

//Step 2: Create a Class (and a constructor function;)
class calculator {
    constructor(previousInput, currentInput) { //previousInput and currentInput will direct where to display our display text for the calculator)
        //Inside this function, create variables for the class.
        this.previousInput = previousInput;
        this.currentInput = currentInput;
    }
    //Consider each operation the calculator will need to perform and create a function for each one. 

    clear() {

    }

    delete(){

    }

    appendNumber(){ // what will happeh every time a user clicks a number to add to the screen. 

    }

    chooseOperation(operation){ // will happen when a user clicks on one of our four operation buttons. The funciton must take-in the operator the user selected;

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

