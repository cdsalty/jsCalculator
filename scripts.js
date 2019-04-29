// alert("sanity check");

//Step 2: Create a Class (and a constructor function;)
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { 
        this.previousOperandTextElement = previousOperandTextElement; // gives ability to set these elements inside our calculator class.   
        this.currentOperandTextElement = currentOperandTextElement;
        // As soon as we create our calculator, we want to call the 'clear function' to zero out everything; the default display
        this.clear(); // clears and sets to this default value.
    }
    //Step 3: Consider all the operations our calculator class can perform
    clear(){ // To clear out our different variables; what specifically to clear out.
        this.currentOperand = '';  // the input being entered on the lower portion of the calculator display
        this.previousOperand = ''; // the input previously entered, stored/display on the top of the calculator display
        this.operation = undefined; // if we clear things, there will be no current, previous or operations displayed; undefined;
        // this is setting the properties displayed in the calculator window to empty strings; call it as soon as a new instance of
        // the calculator is created.
    }

    delete(){ // to remove a single number
        this.currentOperand = this.currentOperand.toString().slice(0, -1); // saving all the numbers from 0 to second to last and storing it into this.currentOperand
        // go from index position '0' to the second to last number; essentially chopping off the last number
    }

    appendNumber(number){ // What will happen each time a user clicks a number; We will need to pass the number param the user selected.
        // this.currentOperand = number; // this only appends one number; will not allow mulitple numbers.
        if (number === '.' && this.currentOperand.includes('.')) return  // prevents multiple decimals being typed. If no decimal in place, it will not run
        this.currentOperand = this.currentOperand.toString() + number.toString(); // Otherwise, 1 + 1 would be 2 vs. 1 & 1 showing 11
    }

    chooseOperation(operation){  // anytime a user clicks on the operation; this function will take the operation selected and do something.
        if (this.currentOperand === '') return  // if there isn't a current number typed/inputted, prevent user from selecting an operator
        if (this.previousOperand !== ''){  // as long is the value isn't empty, it will allow you to continuely do 8 + 8, display 64 and then * 2 and continue
            this.compute();                 // compute the values when any operation is pressed. 
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand; // now, the previousOperand will hold the currentOperand input
        this.currentOperand = ''; // now the currentOperand position is empty. 
    }

    compute(){  // will take values inside our calculator and compute a singe value for what needs to display.
        let computation;  // created variable; it will become the result of our compute function
        const prev = parseFloat(this.previousOperand);  // converting the string back to a number 
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current))  // if user presses equal and there isn't a number, return and don't allow or if the current input is empty, prevent user from computing because there is nothing to compute.
        return

        switch(this.operation){  // using since there are many operations on just one object.
            case '+':
              computation = prev + current;
              break
            case '-':
              computation = prev - current;
              break
            case '*':
              computation = prev * current;
              break
            case '÷':
              computation = prev / current;
              break

            default: // similar to an else statment
              return;
        }
        this.currentOperand = computation; // will the the result of operation
        this.operation = undefined;
        this.previousOperand = ''
    }

    updateDisplay(){    // this will update the values inside of our output.
        this.currentOperandTextElement.innerText=this.currentOperand;
        if (this.operation != null) {   // as long as the operation isn't empty or if there IS AN OPERATION that has been input by user
            this.previousOperandTextElement.innerText = 
              `${this.previousOperand} ${this.operation}`
        }
        // this.previousOperandTextElement.innerText=this.previousOperand; //overlooked this function and what a nightmare 
    }   
}



//Step 1: Assign buttons to variables (To Call on them later)
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]');
const clearScreen = document.querySelector('[data-allclear]');
const previousOperandTextElement = document.querySelector('[data-previous-input]');
const currentOperandTextElement = document.querySelector('[data-current-input]');

// Step 4: Create a calculator object and pass everything into it.
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
// Step 5: Add EventListners 
    // For each button that is a number
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log("sanity check");
        calculator.appendNumber(button.innerText);  // calling append function and passing the innerText of the selected button
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

equalsBtn.addEventListener('click', (button) => {
    calculator.compute();
    calculator.updateDisplay();
})

clearScreen.addEventListener('click', (button) => {
    calculator.clear(); // assinged when the calulator is first called upon
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', (button) => {
    calculator.delete();
    calculator.updateDisplay();
})