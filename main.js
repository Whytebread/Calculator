// global variables
const calculatorDisplay = document.querySelector("#numberInput");
const equalButton = document.querySelector("#equalButton");
const clearButton = document.querySelector("#clearButton");

// inital variables to store numbers and operator
let numOne = "";
let numTwo = "";
let selectedOperator = "";
let isSecondNumber = false;
calculatorDisplay.value = "";

// operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// number buttons
const numberButtons = document.querySelectorAll(".number");

// event listeners for buttons
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick)
});

operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick)
});

equalButton.addEventListener("click", handleEqualClick);

clearButton.addEventListener("click", handleClearClick);

// functions to handle button clicks
function handleNumberClick(event) {
    digit = event.target.value
    calculatorDisplay.value += digit;
}

function handleOperatorClick(event) {
    if (numOne !== "" && selectedOperator === "") 
    op = event.target.value
    numOne = calculatorDisplay.value;
    calculatorDisplay.value = ""
    selectedOperator = op;
}

function handleEqualClick() {
    numTwo = calculatorDisplay.value;
    Operate(numOne, selectedOperator, numTwo);
    
}

function handleClearClick() {
    clearDisplay();
}

// calculator functions
function addNumbers(numOne, numTwo) {
    return parseInt(numOne + numTwo);
}

function subtractNumbers(numOne, numTwo) {
    return parseInt(numOne - numTwo);
}

function multiplyNumbers(numOne, numTwo) {
    return parseInt(numOne * numTwo);
}

function divideNumbers(numOne, numTwo) {
    return parseInt(numOne / numTwo);
}

function clearDisplay() {
    calculatorDisplay.value = ""
    numOne = "";
    numTwo = "";
    selectedOperator = "";
    isSecondNumber = false;
}

function Operate(numOne, selectedOperator, numTwo) {
    if (selectedOperator === "+") {
        let result = addNumbers(numOne, numTwo);
        calculatorDisplay.value = "";
        calculatorDisplay.value = result;
    } else if (selectedOperator === "-") {
        let result = subtractNumbers(numOne, numTwo);
        calculatorDisplay.value = "";
        calculatorDisplay.value = result;
    } else if (selectedOperator === "*") {
        let result = multiplyNumbers(numOne, numTwo);
        calculatorDisplay.value = "";
        calculatorDisplay.value = result;
    } else if (selectedOperator === "/") {
    let result = divideNumbers(numOne, numTwo);
    calculatorDisplay.value= "";
    calculatorDisplay.value= result;
    }
}