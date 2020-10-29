/*

Variable Exercise 3.

What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

*/



{
  let foo = 'bar';
}

console.log(foo);

// ReferenceError: foo is not defined
// Foo has block scope because of the let statement. Cannot access foo from within the block. 