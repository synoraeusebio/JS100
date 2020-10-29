/* 

The Basics Exercises 2. 

Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

1. thousands place is 4
2. hundreds place is 9
3. tens place is 3
4. ones place is 6

*/

let number = 4936;
let ones = number % 10;
console.log(ones); // 6

number = (number - ones) / 10;
console.log(number);

let tens = number % 10; 
console.log(tens);

number = (number - tens) / 10;
console.log(number);

let hundreds = number % 10;
console.log(hundreds);

number = (number - hundreds) / 10;
console.log(number);

