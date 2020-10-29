/*

Flow Control Exercise 3. 

Let's improve our previous implementation of evenOrOdd. 
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.


*/


function evenOrOdd (num) {
	if(num != parseInt(num)) {
	console.log("This is not an integer!");
	} else if (num % 2 === 0) {
	console.log("even");
	} else {
	console.log("odd");
	}
}

console.log(evenOrOdd(16.445546));