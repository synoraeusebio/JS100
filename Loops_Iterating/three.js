/*

Loops and Iterating Exercises 3.


The following code causes an infinite loop (a loop that never stops iterating). Why?



*/

let counter = 0; // variable declaration with a value of 0

while (counter = 1) { // while loop with counter having a value of 1
  console.log(counter); // print the value of counter to the console
  counter += 1; // increment over the counter by one

  if (counter > 2) { // if counter is greater than 2
    break;			 // break the loop
  }
}

// "Counter is initalized outside the while loop. Inside the while loop counter will print to the console as long as the value is one." The value of counter on line 14 is "truthy".