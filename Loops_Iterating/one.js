/*

Loops and Iterating Exercise 1. 

Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.


*/

let rlSync = require('readline-sync');
let age = rlSync.question("What is your age\? ");
age = Number(age);
console.log(`You are ${age} years old.`);

for (let index = 10; index <= 40; index += 10) {
	console.log(`In ${index} years, you will be ${age + index} years old.`);
}