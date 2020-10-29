/*

Variable Exercise 4. 

What happens when you run the following code? Why?

*/





const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);


// TypeError: Assignment to constant variable.
// The constant variable name of NAME has already been assisnged to another variable. You cannot reassign it after it has been declared. 