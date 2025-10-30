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
        if (justCalculated) {
        calculatorDisplay.value = "";
        numOne = "";
        numTwo = "";
        selectedOperator = "";
        justCalculated = false;
    }
    calculatorDisplay.value += digit;
}

function handleOperatorClick(event) {
    if (numOne ==="") {
        numOne = calculatorDisplay.value;
    }

    op = event.target.value
    isSecondNumber = true;
    calculatorDisplay.value = ""
    selectedOperator = op;
}

function handleEqualClick() {
     if (numOne !== "" && selectedOperator !== "" && calculatorDisplay.value !== "") {
        numTwo = calculatorDisplay.value;
     }

    Operate(numOne, selectedOperator, numTwo);
             calculatorDisplay.value = result;
        numOne = result;       
        numTwo = "";
        selectedOperator = "";
        isSecondNumber = false;
        justCalculated = true;
}

function handleClearClick() {
    clearDisplay();
}

// calculator functions
function addNumbers(numOne, numTwo) {
    return parseInt(numOne) + parseInt(numTwo);
}

function subtractNumbers(numOne, numTwo) {
    return parseInt(numOne) - parseInt(numTwo);
}

function multiplyNumbers(numOne, numTwo) {
    return parseInt(numOne) * parseInt(numTwo);
}

function divideNumbers(numOne, numTwo) {
    if (numOne === 0 || numTwo === 0) {
        console.error("Cannot divide by zero");
    }
    return parseInt(numOne) / parseInt(numTwo);
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