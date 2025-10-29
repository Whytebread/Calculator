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
    let digit = event.target.value
    calculatorDisplay.value += digit;
}

function handleOperatorClick(event) {
    let op = event.target.value
    calculatorDisplay.value += op;
}

function handleEqualClick() {
    Operate(numOne, selectedOperator, numTwo);
}

function handleClearClick() {
    clearDisplay();
}

// calculator functions
function addNumbers(numOne, numTwo){
    return numOne + numTwo;
}

function subtractNumbers(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplyNumbers(numOne, numTwo) {
    return numOne * numTwo;
}

function divideNumbers(numOne, numTwo) {
    return numOne / numTwo;
}

function clearDisplay() {
    calculatorDisplay.value = ""
}

function Operate(numOne, selectedOperator, numTwo) {
    if (selectedOperator === "+") {
        let result = addNumbers(numOne, numTwo);
        calculatorDisplay.value = "";
        calculatorDisplay.value += result;
    } else if (selectedOperator === "-") {
        return subtractNumbers(numOne, numTwo);
    } else if (selectedOperator === "*") {
        return multiplyNumbers(numOne, numTwo);
    } else (selectedOperator === "/")
        return divideNumbers(numOne, numTwo);
}