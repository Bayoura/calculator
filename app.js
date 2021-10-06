const numbersList_button = document.querySelectorAll('.number');
const number_button = document.querySelector('.number');
const operatorsList_button = document.querySelectorAll('.operator');
const operator_button = document.querySelector('.operator');
const equals_button = document.querySelector('.equals');
const allClear_button = document.querySelector('.all-clear');
const delete_button = document.querySelector('.delete');
const lastOperand_div = document.querySelector('.top-display');
const currentOperand_div = document.querySelector('.btm-display');

numbersList_button.forEach(number_button => number_button.addEventListener('click', () => {
    if (number_button.innerText === '.' && currentOperand_div.innerText.includes('.')) return;
    if (number_button.innerText === '+/-') changeSign();
    else {
        currentOperand_div.innerText += number_button.innerText;
    }
}));

function changeSign() {
    currentOperand_div.innerText *= -1; 
}

allClear_button.addEventListener('click', () => {
    currentOperand_div.innerText = '';
    lastOperand_div.innerText = '';
});

delete_button.addEventListener('click', () => {
    currentOperand_div.innerText = currentOperand_div.innerText.slice(0, -1);
});

// operatorsList_button.forEach(operator_button => operator_button.addEventListener('click', () => {

// }))


// let add = (num1, num2) => {return num1 + num2};
// let substract = (num1, num2) => {return num1 - num2};
// let multiply = (num1, num2) => {return num1 * num2};
// let divide = (num1, num2) => {return num1 / num2};

// function operate(operator, num1, num2) {
//     switch(operator) {
//         case 'hi':
//             add(num1,num2);
//             break;
//             case 3: 
//         substract(num1,num2);
//         break;
//         case multiply: 
//         multiply(num1,num2);
//         break;
//         case divide: 
//         divide(num1,num2);
//         break;
//     }
// }

// window.addEventListener('keydown', function(e){
//     console.log(e);
//     if (e.key === '0') {
//         console.log('!!111');
//     }
// })

