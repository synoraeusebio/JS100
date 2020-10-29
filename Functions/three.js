/*

Function Exercise 3. 

Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.


*/

function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}

function getNums(prompt){

  let readlineSync = require('readline-sync');
  let nums = readlineSync.question(prompt);
  return nums;
}

let firstNum = getNums('What is the first number? ');
let secondNum = getNums('What is the second number? ');
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);