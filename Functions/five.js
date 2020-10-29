/*

Function Exercise 5. 

What does the following code log to the console?

*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//Logs nothing. The return statement stops the function, so console.log doesn't get printed. 