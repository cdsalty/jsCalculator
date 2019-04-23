// alert("sanity check");

//Step 2: Create a Class (and a constructor function;)
class Calculator {
    constructor(previousInputElement, currentInputElement) { 
        this.previousInputElement = previousInputElement; // gives ability to set these elements inside our calculator class.   
        this.currentInputElement = currentInputElement;
        // As soon as we create our calculator, we want to call the 'clear function' to zero out everything; the default display
        this.clear(); // clears and sets to this default value.
    }
    //Step 3: Consider all the operations our calculator class can perform
    clear(){ // To clear out our different variables; what specifically to clear out.
        this.currentOperation = '';  // the input being entered on the lower portion of the calculator display
        this.previousOperation = ''; // the input previously entered, stored/display on the top of the calculator display
        this.operation = undefined; // if we clear things, there will be no current, previous or operations displayed; undefined;
        // this is setting the properties displayed in the calculator window to empty strings; call it as soon as a new instance of
        // the calculator is created.
    }

    delete(){ // to remove a single number

    }

    appendNumber(number){ // What will happen each time a user clicks a number; We will need to pass the number param the user selected.
        // this.currentOperation = number; // this only appends one number; will not allow mulitple numbers.
        if (number === '.' && this.currentOperation.includes('.'))   // prevents multiple decimals being typed. If no decimal in place, it will not run
        return;
        this.currentOperation = this.currentOperation.toString() + number.toString(); // Otherwise, 1 + 1 would be 2 vs. 1 & 1 showing 11
    }

    chooseOperation(operation){  // anytime a user clicks on the operation; this function will take the operation selected and do something.
        if (this.currentOperation === '') 
        return;
        if (this.previousOperation !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperation = this.currentOperation; // making the previousOperation now hold the currentOperation that was input
        this.currentOperation = ''; // now the currentOperation position is empty. 
    }

    compute(){  // will take values inside our calculator and compute a singe value for what needs to display.

    }

    updateDisplay(){    // this will update the values inside of our output.
        this.currentInputElement.innerText=this.currentOperation;
    }
     
}



//Step 1: Assign buttons to variables (To Call on them later)
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]');
const clearScreen = document.querySelector('[data-allclear]');
const previousInputElement = document.querySelector('[data-previous-input]');
const currentInputElement = document.querySelector('[data-current-input]');

// Step 4: Create a calculator object and pass everything into it.
const calculator = new Calculator(previousInputElement, currentInputElement);
// I originally had "new (c)alculator" the lowercase caused a "not defined statement." 
// syntax: var object = new Object();

// Step 5: Add EventListners 
    // For our buttons that are numbers
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log("sanity check");
        calculator.appendNumber(button.innerText);  // hey mr. appendNumber function in the calculator, I want you to update the 
                                                    // display to show the innerText of the button clicked. 0-9 and .
        calculator.updateDisplay();                 // updateDisplay, I want to call you too
    })
});

    // For our operations button (Will make use of the chooseOperation function)
operationBtns.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});