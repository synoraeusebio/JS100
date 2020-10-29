/*

Flow Control Exercise 4. 

What does the following code log to the console, and why?

*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// Logs the following:
// Product2
// Product3
// Product not found!

// Code starts at the second case statement and executes until the program ends. 