/*

Variable Exercise 5. 

Take a look at this code snippet:

What does this program log to the console? Why?


*/


let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// The let statment gives foo block scope. We can access the value of foo that was defined outside the block, but not within the block. 