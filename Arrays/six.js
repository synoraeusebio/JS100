/*

Array Exercise 6. 
Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.



*/

function oddLengths(arr) { //declare a function maded oddLengths that passes ones parameter, called arr
  let filteredNumbersArray = arr.map((letters) => { //in this function let the filteredNumbersArray equal to value of this nested function. Transform (map) the arr array by iterating through
    return letters.length; // and returning values that contain the length of each element
  }).filter((number) => { // then iterate through each element by iterating through each element 
    return number % 2 === 1; // then returning only those elements that are odd (or number % 2)
  });

  return filteredNumbersArray; //retrun the values in the filteredNumbersArray
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));