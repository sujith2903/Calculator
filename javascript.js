const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const display3 = document.querySelector('.display3');
const display4 = document.querySelector('.display4');
const equals = document.querySelector('.equals');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
let values = ['1','2','3','4','5','6','7','8','9','0','.'];
let operators = ['+', '-', '*','/'];
let content1 = '';
let content3 = '';
let result = '';
let operatorContent = '';
let currentOperator = '';


numbers.forEach((button) => {   

    button.addEventListener('click',() => {

        let value = button.id;

        if (!operatorContent){
            if (values.includes(value)){
                content1 += value;
            }
    
            display1.textContent = content1;

        }else if (values.includes(value)){
        
            content3 += value;
            display3.textContent = content3;
        }

    });
});

symbols.forEach((button) => {

    button.addEventListener('click',() => {

        let operator = button.id;

        if(content1 && !content3){
            if(operators.includes(operator)){
                operatorContent = operator;
            }

            display2.textContent = operatorContent;
        }
    });
});

symbols.forEach((button) => {

    button.addEventListener('click',() =>{

        currentOperator = button.id;

        if (content1 && content3){

            display2.textContent = currentOperator;

            if (operatorContent == '+'){
                result = sum();
                display4.textContent = result;
                reset();
            }else if(operatorContent == '-'){
                result = subtract();
                display4.textContent = result;
                reset();
            }else if(operatorContent == '*'){
                result = multiply();
                display4.textContent = result;
                reset();
            }else if(operatorContent =='/'){
                result = divide();
                display4.textContent = result;
                reset();
            }
        }
    });
});

clear.addEventListener('click' , () =>{
    content1 = '';
    display1.textContent = content1; 

    content3 = '';
    display3.textContent = content3; 

    operatorContent = '';
    display2.textContent = operatorContent; 

    result = '';
    display4.textContent = result; 
});

del.addEventListener('click',() =>{

    if (content1 && !content3){
        content1 = content1.substring(0,content1.length - 1);
        display1.textContent = content1;
    }else if(content1 && content3){
        content3 = content3.substring(0,content3.length - 1);
        display3.textContent = content3;
    }
});

function sum(){
    return Number(content1) + Number(content3);
}

function subtract(){
    return Number(content1) - Number(content3);

}

function multiply(){
    return Number(content1) * Number(content3);
}

function divide(){
    return Number(content1) / Number(content3);
}

function reset(){

    display1.textContent = result;
    display3.textContent = '';
    content1 = result;
    operatorContent = currentOperator;
    content3 = '';
    result = '';

}
