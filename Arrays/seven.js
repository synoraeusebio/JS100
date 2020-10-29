/*

Array Exercise 7

Use reduce to compute the sum of the squares of all of the numbers in an array:


let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83



*/


let numbers = [3, 5, 7];

function sumOfSquares(numbers) { // declare a function named sumOfSquares with one parameter named numbers
  return numbers.reduce((accumulator, number) => { // in this function, return the result of the reduce method (with accumulator and element arguments) by
    return accumulator + number * number; // starting with the number 0, add that to the element, then take that result and multiply it by that same element's value. Return that value and repeat though all elements
  }, 0);
}




console.log(sumOfSquares(numbers)); //the clue to use a function is sumOfSquares!