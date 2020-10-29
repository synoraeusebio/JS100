/* 

Array Exercises 4

Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]
If you have trouble using map to accomplish this, try it using a regular for loop instead.


*/


let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


for (let index = 0; index < myArray.length; index +=1) {
	let newArray = myArray[index];
	if (newArray % 2 === 1) {
		console.log("odd");
	} else console.log ("even");
}



/*

//Using Map


let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


let newArray = myArray.map(function(value) {
	if (value % 2 === 1) {
		return 'odd';
	} else {
		return 'even';
	}
});

console.log(newArray);

*/

