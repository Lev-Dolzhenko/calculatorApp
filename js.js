/*----CHANGE THEME-----*/

const btnDark = document.querySelector('.btn--dark');
const btnLight = document.querySelector('.btn--light')

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

const btnOperations = document.querySelectorAll('.btn--operation')

const operations = {
    sum: '+',
    substract: '-',
    division: '/',
    multiply: '*',
    residue: '%'
}

function calculate(a, b, operation) {
    switch (operation) {
        case operations.sum:
            firstNum = result.textContent = sum(a, b);
            secondNum = ''
            return result.textContent = sum(a, b);
        case operations.substract:
            firstNum = result.textContent = substract(a, b);
            secondNum = ''
            return result.textContent = substract(a, b);
        case operations.division:
            if (b === 0) {
                return result.textContent = 'Error'
            } else {
                firstNum = result.textContent = division(a, b);
                secondNum = ''
                return result.textContent = division(a, b);
            }
        case operations.multiply:
            firstNum = result.textContent = multiply(a, b);
            secondNum = ''
            return result.textContent = multiply(a, b);
        case operations.residue:
            firstNum = result.textContent = residue(a, b);
            secondNum = ''
            return result.textContent = residue(a, b);
        default:
            break;
    }
}

btnEqually.addEventListener('click', function () {
    btnEqually.classList.remove('animateBtnEqually');
    btnEqually.classList.add('animateNotBtnEqually');
    oper = result.textContent.split('').find(elem => /[+%\-x\/]/.test(elem));
    // console.log(oper);
    if (oper == 'x') oper = '*';
    btnOperations.forEach(btn => btn.removeAttribute('disabled'))
    console.log(calculate(parseFloat(firstNum), parseFloat(secondNum), oper));
})

/*-----/FUNCTION TO EQUALLY DISPLAY-----*/

/*-----FUNCTION TO CHANGE THEME-----*/

btnDark.addEventListener('click', function () {
    blockButtons.classList.toggle('block-buttons--dark');
    body.classList.toggle('body-dark');
    blockDisplay.classList.toggle('block-display--dark');
    container.classList.toggle('container--dark');
    btnDark.classList.toggle('none');
    btnLight.classList.toggle('none');
})

btnLight.addEventListener('click', function () {
    btnLight.classList.toggle('none');
    btnDark.classList.toggle('none')
    blockButtons.classList.toggle('block-buttons--dark');
    body.classList.toggle('body-dark');
    blockDisplay.classList.toggle('block-display--dark');
    container.classList.toggle('container--dark');
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
    if (result.textContent.includes("+") || result.textContent.includes("-") || result.textContent.includes("x") || result.textContent.includes("/") || result.textContent.includes("%")) {
        btnOperations.forEach(btn => btn.setAttribute('disabled', 'disabled'));
        for (let i = 0; i < btnOperations.length; i++) {
            let btnOperation = btnOperations[i];
            if (btnOperation.disabled) {
                btnEqually.classList.remove('animateNotBtnEqually')
                btnEqually.classList.add('animateBtnEqually')
            }
        }
        secondNum += btnValue;
        console.log(secondNum);
    } else {
        firstNum += btnValue;
        console.log(firstNum);
    }
    result.textContent += btnValue;
    console.log(result.textContent)
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
    firstNum = '';
    secondNum = '';
    oper = '';
})

/*-----/FUNCTION TO CLEAR DISPLAY-----*/

