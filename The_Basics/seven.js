/* 

The Basics Exercises 7. 

Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

The value of 5 + 10 is 15.

*/

let sum = (Number('5') + 10);
//console.log(value); a check to make sure it works. 

console.log(`The value of 5 + 10 is ${sum}.`);

//or 

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);