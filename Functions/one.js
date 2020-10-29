/*

Functions Exercise 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

*/


let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Console logs 1. Let bar = 1 is a different variable than the one inside the function. We're using the first 'bar' to pass through the function, and the value of that "bar" is 1. 