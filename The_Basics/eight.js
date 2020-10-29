/* 

The Basics Exercises 8. 

Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

*/

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // returns 3
console.log(foo[3]);   // Returns undefined. Why? Because this index value does not exist in the array.