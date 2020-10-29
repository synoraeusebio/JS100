/*

Array Exercise 5

Use the filter method to implement a function that returns a new array with all of the integers from the input array. It should ignore all non-integer values from the input.

Example:
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
 
You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.



*/

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
//console.log(newArray); // => [1, 3, -4]

function removeNonInteger(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

