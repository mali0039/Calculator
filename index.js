let container = document.querySelector("#container");
let buttons = [];
let num1;
let num2;
let currentOperation;
let currentNumber = num1;
let display = document.querySelector("#display");
for (let i =0; i<10; i++) {
    let temp;
    if (i === 0)
        temp = "zero";
    else {
    temp = i.toString();
    }
    buttons[i] = document.getElementById(temp);
    buttons[i].addEventListener('click', function() {
        if (num1 === undefined) {
            num1 = buttons[i].textContent;
            display.textContent = num1;
            currentNumber = num1;
        }
        else if (num1 !== undefined && currentOperation === undefined) {
            num1 += buttons[i].textContent;
            display.textContent = num1;
            currentNumber = num1;
        }
        else if (currentOperation !== undefined && num2 === undefined) {
            num2 = buttons[i].textContent;
            display.textContent = num1 + currentOperation + num2;
            currentNumber = num2;
        }
        else if(currentOperation !== undefined && num2 !== undefined) {
            num2 += buttons[i].textContent;
            display.textContent = num1 + currentOperation + num2;
            currentNumber = num2;
        }
    })
}
let add = document.querySelector("#plus");
add.addEventListener('click', function() {
    if (currentOperation !==undefined) {
        multipleOperations();
        currentOperation = "+";
    }
    if (num1 !== undefined) {
    currentOperation = "+";
    currentNumber = currentOperation;
    display.textContent = num1 + currentOperation;
    }
});

let subtract = document.querySelector("#minus");
subtract.addEventListener('click', function () {
    if (currentOperation !==undefined) {
        multipleOperations();
        currentOperation = "-";
    }
    if (num1 !== undefined) {
    currentOperation = "-";
    currentNumber = currentOperation;
    display.textContent = num1 + currentOperation;
    }
});

let multiply = document.querySelector("#multiply");
multiply.addEventListener('click', function () {
    if (currentOperation !==undefined) {
        multipleOperations();
        currentOperation = "*";
    }
    if (num1 !== undefined) {
    currentOperation = "*";
    currentNumber = currentOperation;
    display.textContent = num1 + currentOperation
    }
});

let divide = document.querySelector("#divide");
divide.addEventListener('click', function () {
    if (currentOperation !==undefined) {
        multipleOperations();
        currentOperation = "/";
    }
    if (num1 !== undefined) {
    currentOperation = "/";
    currentNumber = currentOperation;
    display.textContent = num1 + currentOperation
    }
});

let equals = document.querySelector("#equals");
equals.addEventListener('click', function() {
    if (num1 !== undefined && num2 !== undefined && currentOperation !== undefined) {
        display.textContent = calculate(num1,num2,currentOperation);
        num1 = display.textContent;
        currentNumber = num1;
        num2 = undefined;
        currentOperation = undefined;
    }
});
function multipleOperations() {
    let output;
    if (num2!== undefined) {
    if (currentOperation === "+") {
        output= parseInt(num1) + parseInt(num2);
    }
    else if (currentOperation === "-") {
        output = num1-num2;
    }
    else if (currentOperation === "*"){
        output = num1*num2;
    }
    else{
        if (num2==0)
        alert("Can't divide by 0!");

        output = num1/num2;
    }
    num1 = output;
    currentNumber = num1;
    num2 = undefined;
    display.textContent = num1;
}

}
function calculate(a,b,operation) {
    if (operation === "+") {
        if (num1.indexOf("."!==-1) || num2.indexOf("."!==-1))
            return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
        else if (num1.indexOf("."!==-1))
            return (parseFloat(num1) + parseInt(num2)).toFixed(2);
        else if (num2.indexOf("."!==-1))
            return (parseFloat(num2) + parseInt(num1)).toFixed(2);
        
        return parseInt(num1) + parseInt(num2);
    }
    else if (operation === "-") {
        return (a-b).toFixed(2);
    }
    else if (operation === "*"){
        return (a*b).toFixed(2);
    }
    else{
        if (b!= 0)
        return (a/b).toFixed(2);
        alert("Can't divide by 0!");
    }

    }

let clear = document.querySelector("#clear");
clear.addEventListener('click', function clear() {
    num1 = undefined;
    num2 = undefined;
    currentOperation = undefined;
    display.textContent = "";
});

let backSpace = document.querySelector("#delete");
backSpace.addEventListener('click', function() {
    if (currentNumber === currentOperation) {
        display.textContent = display.textContent.substring(0,display.textContent.length-1);
        currentNumber = num1;
        currentOperation = undefined;
    }
    else if (currentNumber === num1) {
        if (num1!== undefined) {
        num1 = num1.substring(0,num1.length-1);
        if (num1 === "")
            num1 = undefined;
        display.textContent = display.textContent.substring(0,display.textContent.length-1);
        currentNumber = num1;
    }
    }
    else if (currentNumber === num2){
        if (num2!== undefined) {
        num2 = num2.substring(0,num2.length-1);
        if (num2 === "")
            num2 = undefined;
        display.textContent = display.textContent.substring(0,display.textContent.length-1);
        currentNumber = num2;
    }
    
}
});

let decimal = document.querySelector("#decimal");
decimal.addEventListener('click', function() {
    if (currentNumber===num1) {
        if (num1.indexOf(".")===-1) {
        num1 += ".";
        display.textContent = num1;
        }
    }
    else if (currentNumber === num2) {
        if (num2.indexOf(".")===-1) {
        num2 += ".";
        display.textContent = num1 + currentOperation + num2;
        }
    }
})