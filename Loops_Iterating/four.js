/*

Loops and Iterating Exercises 4.


Does the following code produce an error? Why or why not? What output does this code send to the console?


*/

for (let i = 0; i < 5;) { //declare and initialize the i variable to 0, if i has a value less than 5
  console.log(i += 1); // print the increment value of 1. 
}

//Prints the following to the console: 

// 1
// 2
// 3
// 4
// 5
// No errors printed. All for loop syntac is optional (initialization, condition, increment). Ok to increment on line 12. 