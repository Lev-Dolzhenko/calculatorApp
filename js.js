/*----CHANGE THEME-----*/

const btnTheme = document.querySelector('.btn--theme');

const body = document.querySelector('body');
const container = document.querySelector('.container');
const blockButtons = document.querySelector('.block-buttons');
const blockDisplay = document.querySelector('.block-display');

/*----/CHANGE THEME-----*/

/*-----ADD BUTTONS VALUE TO DISPLAY-----*/

const result = document.querySelector('.result');
const allButtons = document.querySelectorAll('.btn--common');

/*-----ADD BUTTONS VALUE TO DISPLAY-----*/

/*-----CLEAR DISAPLY-----*/

const clearButton = document.querySelector('.btn--clear');

/*-----/CLEAR DISAPLY-----*/

/*-----EQUALLY DISPLAY-----*/

const btnEqually = document.querySelector('.btn--equally');

/*-----/EQUALLY DISPLAY-----*/

/*-----FUNCTION TO EQUALLY DISPLAY-----*/

const operations = {
    sum: '+',
    substract: '-',
    division: '/',
    multiply: '*'
}

function calculate(a, b, operation) {
    switch (operation) {
        case operations.sum:
            return result.textContent = sum(a, b);
        case operations.substract:
            return result.textContent = substract(a, b);
        case operations.division:
            return result.textContent = division(a, b);
        case operations.multiply:
            return result.textContent = multiply(a, b);
        default:
            break;
    }
}

btnEqually.addEventListener('click', function() {
    let temp;
    oper = result.textContent.split('').find(elem => /[+\-x\/]/.test(elem));
    console.log(oper);
    if (oper == 'x') oper = '*';
    console.log(calculate(parseInt(firstNum), parseInt(secondNum), oper));
})

/*-----/FUNCTION TO EQUALLY DISPLAY-----*/

/*-----FUNCTION TO CHANGE THEME-----*/

btnTheme.addEventListener('click', function () {
    blockButtons.classList.toggle('block-buttons--dark');
    body.classList.toggle('body-dark');
    blockDisplay.classList.toggle('block-display--dark');
    container.classList.toggle('container--dark')
})

/*-----/FUNCTION TO CHANGE THEME-----*/

/*-----FUNCTION TO CHANGE VALUE OF DISPLAY-----*/


let firstNum = '';
let secondNum = '';
let oper;

function addButtonValue(btnValue) {
    if (result.textContent === '0') {
        result.textContent = ' ';
    };
    if (result.textContent.includes("+") || result.textContent.includes("-") || result.textContent.includes("x") || result.textContent.includes("/")) {
        secondNum += btnValue;
        console.log(secondNum);
    } else {
        firstNum += btnValue;
        console.log(firstNum);
    }
    result.textContent += btnValue;
    console.log(typeof result.textContent)
}

for (let i = 0; i < allButtons.length; i++) {
    let currButton = allButtons[i];
    currButton.addEventListener('click', function () {
        addButtonValue(currButton.getAttribute('name'));
    })
}

/*-----/FUNCTION TO CHANGE VALUE OF DISPLAY-----*/

/*-----FUNCTION TO CLEAR DISPLAY-----*/

clearButton.addEventListener('click', function () {
    result.textContent = '0';
})

/*-----/FUNCTION TO CLEAR DISPLAY-----*/

