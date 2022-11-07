const prompt = require('prompt-sync')();
/*this javascript will greet the user
function is a block of code with begin & end code and needs to be 
invoked for executation

function greet(){
    return; //optional
}
//invoke the function
x = greet();
*/

/*function greet(){
    console.log("welcome to javascript");
}

console.log("outside the function");
greet();*/

var num1 =Number( prompt("please enter num1"));
var num2 = Number(prompt("please enter num 2"));

function add(num1 , num2 ){return num1+num2}
function sub(num1 , num2){return num1-num2}
function multiply(num1 , num2){return num1*num2}
function divide (num1 , num2 ){return num1/num2}

console.log(add(num1 , num2));
console.log(sub(num1 , num2 ));
console.log(multiply(num1 , num2));
console.log(divide(num1 , num2));