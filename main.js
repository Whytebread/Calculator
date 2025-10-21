// global variables
const calculatorDisplay = document.querySelector("#numberInput");

// operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// number buttons
const numberButtons = document.querySelectorAll(".number");

// event listener for number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick)
});

// event listener for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick)
});

// functions to handle number and operator button clicks
function handleNumberClick(event) {
    let digit = event.target.value
}

function handleOperatorClick(event) {
    let op = event.target.value
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

function Operate() {
    let numOne =
    let numTwo =
    let selectedOperator =
    const result = `${numOne} ${selectedOperator} ${numTwo}`
    return result;
}