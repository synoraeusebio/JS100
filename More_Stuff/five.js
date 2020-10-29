/*

More Stuff Exercise 5

What does the following function do?


*/

function doSomething(string) { // declares a function called string with one parameter named string
  return string.split(' ').reverse().map((value) => value.length); // converts string into an array (by splitting each word into its own element, reverse the array, and returns the length of each element in an array
}