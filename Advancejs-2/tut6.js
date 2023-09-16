// Arrow function in ES6:
// provides more accurate way to write the functions in JavaScript. 
// can declare without the function keyword but declaration should be done with data type
// also called as Lambda Functions in different languages.


// normal function
// Syntax: 
// function function_name(parameters) {
//  body
//}
function sum(a, b) {
    return a+b;
}

// arrow function
// Syntax:

// let function_name = (parameters) => {
// statements
// return or console.log()
//}

let sumA = (a,b) => {
    return a+b;
};


// let function_name = (parameters) => statements
let sumB = (a,b) => a+b;

console.log(sumA(2,3));
console.log(sumB(2,3));