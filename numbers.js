let expressionObj = {
    expression : '',
    last_pressed: 'operator'
};

function operatorParser(pressed){
    if (pressed === 'x'){
        return '*';
    } else if (pressed === '÷' ) {
        return '/';
    } else {
        return pressed;
    }
}

function updateLastPressed(pressed){
    if (pressed >= 0 || pressed === "←"){
        expressionObj.last_pressed = 'number';
        console.log('last pressed was a number');
    } else if (pressed === '='){
        expressionObj.last_pressed = 'evaluate';
        console.log('last pressed was evaluate');
    } else {
        expressionObj.last_pressed = 'operator';
        console.log('last pressed was an operator');
    }
}

function updateExpressionObj(display, pressed){
    pressed = operatorParser(pressed);
    if (expressionObj.last_pressed === 'number'){
        expressionObj.expression += (display + pressed);
        //console.log('last pressed was a number '+expressionObj.expression);
    } else if (expressionObj.last_pressed === 'evaluate'){
        expressionObj.expression += pressed;
    }
}

function evaluateExpression(display){
    if (expressionObj.last_pressed === 'evaluate'){
        return expressionObj.expression;
    }
    let expression = expressionObj.expression + display;
    let newExpression = '';
    if (expressionObj.last_pressed === 'operator'){
        newExpression = eval(expression.substring(0,expression-1));
        expressionObj.expression = newExpression;
        return newExpression;
    } else {
        newExpression = (eval(expression));
        expressionObj.expression = newExpression;
        return newExpression;
    }
}

function updateDisplay(display, pressed){
    //console.log(`updating display with ${display} & ${pressed}`);
    let number = Number(display);
    return (number === 0 ? pressed : display + pressed);
}

function clearDisplay(){
    document.querySelector('.input').innerHTML = '0';
}

function clearExpressionObj(){
    expressionObj = {
        expression : ''
    };
}

function backspace(display){
    console.log(display.substring(0,display.length-1));
    if (display.length > 1){
        return display.substring(0,display.length-1);
    } else {
        return '0';
    }

}

document.querySelector('.calculator-container').addEventListener('click', (event) => {
    let display = document.querySelector('.input').innerHTML;
    let pressed = event.target.innerText;

    if (pressed === 'C') {
        clearDisplay();
        clearExpressionObj();
    } else if(pressed === "←"){
        if(expressionObj.last_pressed === 'evaluate'){
            clearExpressionObj();
        }
        document.querySelector('.input').innerHTML = backspace(display);
    } else if (!isNaN(parseInt(pressed))){
        if(expressionObj.last_pressed === 'evaluate'){
            clearExpressionObj();
        }
        let newDisplay = updateDisplay(display, pressed);
        document.querySelector('.input').innerHTML = newDisplay;
    } else if (pressed === '='){
        document.querySelector('.input').innerHTML = evaluateExpression(display);
    } else {
        updateExpressionObj(display,pressed);
        clearDisplay();
    }
    updateLastPressed(pressed);
  });

