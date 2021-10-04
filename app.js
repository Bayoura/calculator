const topDisplay_p = document.getElementById('top-display');
const btmDisplay_p = document.getElementById('btm-display');
const zero_button = document.getElementById('btn0');
const one_button = document.getElementById('btn1');
const two_button = document.getElementById('btn2');
const three_button = document.getElementById('btn3');
const four_button = document.getElementById('btn4');
const five_button = document.getElementById('btn5');
const six_button = document.getElementById('btn6');
const seven_button = document.getElementById('btn7');
const eight_button = document.getElementById('btn8');
const nine_button = document.getElementById('btn9');
const ac_button = document.getElementById('btnAC');
const x_button = document.getElementById('btnX');
const plus_button = document.getElementById('btnPlus');
const minus_button = document.getElementById('btnMinus');
const multiply_button = document.getElementById('btnMultiply');
const divide_button = document.getElementById('btnDivide');
const comma_button = document.getElementById('btnComma');
const sign_button = document.getElementById('btnSign');
const buttons_div = document.querySelectorAll('button');
const btn_button = document.querySelector('button');

let displayValue = 0;


buttons_div.forEach(btn_button => btn_button.addEventListener('click', () => display(this.textConent)));


function display(thing) {
    console.log(btn_button.textContent);
    btmDisplay_p.textConent += ' ' + thing;
}

two_button.onclick = () => console.log(two_button.textContent);

let add = (num1, num2) => {return num1 + num2};
let substract = (num1, num2) => {return num1 - num2};
let multiply = (num1, num2) => {return num1 * num2};
let divide = (num1, num2) => {return num1 / num2};

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
// })
