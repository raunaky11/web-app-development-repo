//console.log("Hellow World")
//console.log ("greeting from other.js file")
x = 10; // global function
var y = 20; // local variable to function
console.log(x,y);

function add(num1 , num2 ){
    return num1 + num2
}
var num1 = 10;
var num2 = 20;
var sum = add(num1 , num2);
console.log("sum of two number" , sum);
