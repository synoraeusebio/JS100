/*

Loops and Iterating Exercises 2. 
Write a function that computes and returns the factorial (see exercise 4 in the Functions chapter) of a number by using a for loop. 
You may assume that the argument is a valid non-negative integer.



*/

function factorial(number) {
	let result = 1; 
	for (let counter = number; counter > 0; counter -=1) {
		result *= counter;
	}
	return result;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320




