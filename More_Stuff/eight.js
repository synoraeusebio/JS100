/*

More Stuff Exercise 8

Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if, and only if, value is the NaN value. It returns false otherwise. You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.



*/

//Copied Solution


function isNotANumber(value) {
  return value !== value;
}