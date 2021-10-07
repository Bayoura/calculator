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

allClear_button.addEventListener('click', () => {
    currentOperand_div.innerText = '';
    previousOperand_div.innerText = '';
});

delete_button.addEventListener('click', () => {
    currentOperand_div.innerText = currentOperand_div.innerText.slice(0, -1);
});

numbersList_button.forEach(button => button.addEventListener('click', () => {
    if (button.innerText === '.' && currentOperand_div.innerText.includes('.')) return;
    if (button.innerText === '+/-') changeSign();
    else {
        currentOperand_div.innerText += button.innerText;
    }
}));

function changeSign() {
    if (currentOperand_div.innerText === '' || currentOperand_div.innerText === '-') return;
    currentOperand_div.innerText *= -1; 
}

operatorsList_button.forEach(button => button.addEventListener('click', () => {
    if (currentOperand_div.innerText === '' || currentOperand_div.innerText === '-') return;
    if (previousOperand_div.innerText !== '') {
        // determineOperands();
        currentOperand = parseFloat(currentOperand_div.innerText);
        currentOperator = button.innerText;
        operate(currentOperand, previousOperand, previousOperator);
        displayInterimResult(result);
    }
    else {
        previousOperator = button.innerText;
        previousOperand = parseFloat(currentOperand_div.innerText);
        previousOperand_div.innerText += ` ${previousOperand} ${previousOperator}`;
        currentOperand_div.innerText = '';
    }
}));

// function determineOperands() {
//     currentOperand = parseFloat(currentOperand_div.innerText);
//     // previousOperand = parseFloat(previousOperand_div.innerText.slice(0, -1));
//     // previousOperator = previousOperand_div.innerText.slice(-1);
// }

let displayInterimResult = (result) => {
    previousOperand_div.innerText = ` ${result} ${currentOperator}`;
    currentOperand_div.innerText = '';
    previousOperator = currentOperator;
    previousOperand = result;
};

equals_button.addEventListener('click', () => {
    if (currentOperand_div.innerText === '' || previousOperand_div.innerText === '' || previousOperator === '' || previousOperand_div.innerText.includes('=')) return;
    // determineOperands();
    currentOperand = parseFloat(currentOperand_div.innerText);
    operate(currentOperand, previousOperand, previousOperator);
    previousOperand_div.innerText = `${previousOperand} ${previousOperator} ${currentOperand} =`
    currentOperand_div.innerText = result;
    previousOperator = currentOperator;
    previousOperand = result;
    currentOperand = '';

});

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

// window.addEventListener('keydown', function(e){
//     console.log(e);
//     if (e.key === '0') {
//         console.log('!!111');
//     }
// })

