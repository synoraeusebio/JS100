/*


Object Exercise 8 

What does the following program log to the console? Why?

*/




let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// prints hi and hello to console. The argument for foo.a is fine as hi. The value of qux was defined outside the function so we can access in the function. 