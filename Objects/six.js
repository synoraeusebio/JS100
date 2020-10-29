/*

Object Exercise 6

Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

Snippet 1:

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});



Snippet 2:

for (let key in myObj) {
  console.log(key);
}
Without running this code, can you determine whether these two snippets produce the same output? Why?

*/



let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj.qux); //to check

// Snippet 1 will just iterates over the object added to myObj ( {qux: 3}), the second snippet will iterate over everything, included what was added myObj. 