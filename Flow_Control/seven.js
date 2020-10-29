/*

Flow Control Exercise 7. 

Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. 
Otherwise, it should return the original string. 
Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'


*/



function capitals(words) {
	if (words.length > 10) {
	return words.toUpperCase();
	} else {
	return words;
	}
}

console.log(capitals('hello world'));
console.log(capitals('goodbye'));
