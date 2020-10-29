/*

Flow Control Exercise 6. 

What does this code output to the consol


*/


function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// logs Not Empty to console. isArrayEmpty([]) isn't falsy. 