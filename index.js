//Initialize Buttons
numBtns = document.querySelectorAll('.number');
operatorBtns = document.querySelectorAll('.operator')
calculatorText = document.querySelector('.calc-text');
prevCalculation = document.querySelector('.prev-calc')
clearBtn = document.querySelector('#clear');
equalsBtn = document.querySelector('#equal');

//Initialize variables/dictionaries
operatorsDict = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a/b,
    '^': (a,b) => a**b
}

var firstNum;
var operator;
var secondNum;
var outputDisplay;



//Displays numbers and operators on calculator on click
numBtns.forEach(element => {
    element.addEventListener('click', () => valueToDisplay(element))
});

//Clears the calculator display on click
clearBtn.addEventListener('click', clearAll)

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => clickOperator(btn));
})

equalsBtn.addEventListener('click', () => clickEqualBtn());


var getCurrentNum = () => calculatorText.textContent;

var getOperator = (btn) => btn.textContent;

var clearDisplayText = () => calculatorText.textContent = '';

function clickOperator(btn){
    if (outputDisplay != undefined){
        prevCalculation.textContent = outputDisplay;
        firstNum = outputDisplay;
        outputDisplay = undefined;
        operator = getOperator(btn);
        btn.style.backgroundColor = 'white';
        clearDisplayText();
    } else if (calculatorText.textContent == '' && firstNum == undefined){
        alert('You need to select a number first!');
    } else{
        firstNum = getCurrentNum();
        operator = getOperator(btn);
        clearDisplayText();
        btn.style.backgroundColor = 'white';
    }
}

function clickEqualBtn(){
    secondNum = getCurrentNum();
    //performs operation on the two numbers, stores in outputDisplay
    outputDisplay = operatorsDict[operator](Number(firstNum), Number(secondNum));
    clearDisplayText();
    calculatorText.textContent = outputDisplay;
    //changes operator button color(s) back to their original form
    operatorBtns.forEach((btn) => btn.style.backgroundColor = 'rgb(167, 152, 223)');
}

function valueToDisplay(element){
    /*
    Function: valueToDisplay

    Input:
        - element: the button the user clicks on with the number/operator in the text content

    Output:
        - shows the value inputted in the calc-text box
        - void return
    */
    if (outputDisplay != undefined){
        clearAll();
    }
    calculatorText.textContent += element.textContent;
    
}

function clearAll(){
    //Sets everything back to original value
    calculatorText.textContent = '';
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
    outputDisplay = undefined;
    prevCalculation.textContent = '';
}