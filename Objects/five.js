/*

Array Exercise 5

Create a new object named myObj that uses myProtoObj as its prototype.


let myProtoObj = {
  foo: 1,
  bar: 2,
};



*/



let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo); //to check