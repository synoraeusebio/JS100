/*

Variable Exercise 6.

Will this program produce an error when run? Why or why not?


*/


const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No error, but logs bar just like the previous exercise. Only this time a constant variable FOO has been assigned a value outside the block. 
// We can access that value as it's outside a block. The innner conttand declaration of FOO cannot be accessed due to block scope.