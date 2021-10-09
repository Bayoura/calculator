const numbersList_button = document.querySelectorAll('.number');
const operatorsList_button = document.querySelectorAll('.operator');
const equals_button = document.querySelector('.equals');
const allClear_button = document.querySelector('.all-clear');
const delete_button = document.querySelector('.delete');
let previousOperand_div = document.querySelector('.top-display');
let currentOperand_div = document.querySelector('.btm-display');

let previousOperand = '';
let currentOperand = '';
let previousOperator = '';
let currentOperator = '';
let result = '';

allClear_button.addEventListener('click', () => clearDisplay());
delete_button.addEventListener('click', () => deleteLastEntry());
numbersList_button.forEach(button => button.addEventListener('click', () => appendNumber(button.innerText)));
operatorsList_button.forEach(button => button.addEventListener('click', () => chooseOperator(button.innerText)));
equals_button.addEventListener('click', () => equals());

window.addEventListener('keydown', e => {
    if (e.key >= 0 || e.key <= 9) appendNumber(e.key);
    if (e.key === '.' || e.key === ',') convertComma(e.key);
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') convertOperator(e.key);
    if (e.key === '=' || e.key === 'Enter') equals();
    if (e.key === 'Backspace') deleteLastEntry();
    if (e.key === 'Escape') clearDisplay();
});

let convertOperator = operator => {
    if (operator === '*') operator = '×';
    if (operator === '/') operator = '÷';
    chooseOperator(operator);
}

let convertComma = comma => {
    if (comma === ',') comma = '.';
    appendNumber(comma);
}

function clearDisplay() {
    currentOperand_div.innerText = '';
    previousOperand_div.innerText = '';
}

function deleteLastEntry() {
    currentOperand_div.innerText = currentOperand_div.innerText.slice(0, -1);
}

function appendNumber(number) {
    if (number === '.' && currentOperand_div.innerText.includes('.')) return;
    if (number === '+/-') changeSign();
    else {
        currentOperand_div.innerText += number;
    }
}

let changeSign = () => {
    if (currentOperand_div.innerText === '' || currentOperand_div.innerText === '-' || currentOperand_div.innerText === '.') return;
    currentOperand_div.innerText *= -1; 
}

function chooseOperator(operator) {
    if (currentOperand_div.innerText === '' || currentOperand_div.innerText === '-' || currentOperand_div.innerText === '.') return;
    if (previousOperand_div.innerText !== '' && !previousOperand_div.innerText.includes('=')) {
        currentOperand = parseFloat(currentOperand_div.innerText);
        currentOperator = operator;
        operate(currentOperand, previousOperand, previousOperator);
        displayInterimResult(result);
    }
    else {
        previousOperator = operator;
        previousOperand = parseFloat(currentOperand_div.innerText);
        previousOperand_div.innerText = ` ${previousOperand} ${previousOperator}`;
        currentOperand_div.innerText = '';
    }
}

let displayInterimResult = (result) => {
    previousOperand_div.innerText = ` ${result} ${currentOperator}`;
    currentOperand_div.innerText = '';
    previousOperator = currentOperator;
    previousOperand = result;
};


function equals() {
    if (currentOperand_div.innerText === '' || previousOperand_div.innerText === '' || previousOperand_div.innerText.includes('=')) return;
    currentOperand = parseFloat(currentOperand_div.innerText);
    operate(currentOperand, previousOperand, previousOperator);
    displayEqualsResult(result);
}

let displayEqualsResult = (result) => {
    previousOperand_div.innerText = `${previousOperand} ${previousOperator} ${currentOperand} =`
    currentOperand_div.innerText = result;
}

function operate(current, last, operator) {
    switch(operator) {
        case '+':
            add(last, current);
            break;
        case '-':
            substract(last, current);
            break;
        case '×':
            multiply(last, current);
            break;
        case '÷':
            divide(last, current);
            break;
    }
}

let add = (num1, num2) => result = num1 + num2;
let substract = (num1, num2) => result = num1 - num2;
let multiply = (num1, num2) => result = num1 * num2;
let divide = (num1, num2) => result = num1 / num2;
