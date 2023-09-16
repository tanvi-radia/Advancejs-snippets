// Rest parameters: no of parameters passed during func call does not depend on function def.
// ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...).  
// The rest parameter allows you to represent an indefinite number of arguments will be stored in the form of an Array.
// All the arguments that you pass in the function will map to the parameter list.

// Syntax:
function values(...args){
    console.log(args);
}
values(2,3);  // values will be stored in the form of array

// Example
function sum(...args){
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    console.log(result);
}

// sum(2);
// sum(2,5);
sum(2,5,6,7);