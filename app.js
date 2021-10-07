const numbersList_button = document.querySelectorAll('.number');
const operatorsList_button = document.querySelectorAll('.operator');
const equals_button = document.querySelector('.equals');
const allClear_button = document.querySelector('.all-clear');
const delete_button = document.querySelector('.delete');
let lastOperand_div = document.querySelector('.top-display');
let currentOperand_div = document.querySelector('.btm-display');

let currentOperand = '';
let lastOperand = '';
let operator = '';
let result = '';

numbersList_button.forEach(button => button.addEventListener('click', () => {
    if (button.innerText === '.' && currentOperand_div.innerText.includes('.')) return;
    if (button.innerText === '+/-') changeSign();
    else {
        currentOperand_div.innerText += button.innerText;
    }
}));

function changeSign() {
    if (currentOperand_div.innerText === '') return;
    currentOperand_div.innerText *= -1; 
}

allClear_button.addEventListener('click', () => {
    currentOperand_div.innerText = '';
    lastOperand_div.innerText = '';
});

delete_button.addEventListener('click', () => {
    currentOperand_div.innerText = currentOperand_div.innerText.slice(0, -1);
});

operatorsList_button.forEach(button => button.addEventListener('click', () => {
    determineOperands();
    if (currentOperand_div.innerText === '') return;
    if (lastOperand_div.innerText !== '') operate(currentOperand, lastOperand, operator);
    else {
        lastOperand_div.innerText += ` ${currentOperand_div.innerText} ${button.innerText}`;
        currentOperand_div.innerText = '';
    }
}))

function determineOperands() {
    currentOperand = parseFloat(currentOperand_div.innerText);
    lastOperand = parseFloat(lastOperand_div.innerText.slice(0, -1));
    operator = lastOperand_div.innerText.slice(-1);
}

equals_button.addEventListener('click', () => {
    determineOperands();
    operate(currentOperand, lastOperand, operator);
    lastOperand_div.innerText = `${lastOperand} ${operator} ${currentOperand} =`
    currentOperand_div.innerText = result;
})

function operate(current, last, operator) {
    console.log(last);
    console.log(current);
    console.log(operator);
    switch(operator) {
        case '+':
            add(last, current);
            break;
        case '-':
            substract(last, current);
            break;
        case 'x':
            multiply(last, current);
            break;
        case '÷':
            divide(last, current);
            break;
    }
}

let displayResult = (result) => lastOperand_div.innerText = result;

let add = (num1, num2) => {
    result = num1 + num2;
    displayResult(result);
};

let substract = (num1, num2) => {
    result = num1 - num2;
    displayResult(result);
};

let multiply = (num1, num2) => {
    result = num1 * num2;
    displayResult(result);
};

let divide = (num1, num2) => {
    result = num1 / num2;
    displayResult(result);
};

// window.addEventListener('keydown', function(e){
//     console.log(e);
//     if (e.key === '0') {
//         console.log('!!111');
//     }
// })

