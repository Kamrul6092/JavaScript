const prompt = require('prompt-sync')();
let number1 = prompt('input a number:');
let number2 = prompt('input a second numbe:');

let sum = parseFloat(number1) + parseFloat(number2);
console.log(sum)