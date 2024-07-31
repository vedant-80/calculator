numOperatorBtns = document.querySelectorAll('.number, .operator');
calculatorText = document.querySelector('.calc-text');
clearBtn = document.querySelector('#clear');
equalsBtn = document.querySelector('#equal');

//Displays numbers and operators on calculator on click
numOperatorBtns.forEach(element => {
    element.addEventListener('click', () => valueToDisplay(element))
});

//Clears the calculator display on click
clearBtn.addEventListener('click', function(){
    calculatorText.textContent = '';
})


function valueToDisplay(element){
    /*
    Function: valueToDisplay

    Input:
        - element: the button the user clicks on with the number/operator in the text content

    Output:
        - shows the value inputted in the calc-text box
        - void return
    */
    calculatorText.textContent += element.textContent;
    
}