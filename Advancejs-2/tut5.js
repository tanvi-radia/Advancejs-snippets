// Function Constructor:
// It is the way of defining a new function. 
// The function statement is not the single way to define a new function; we can also dynamically define the function by using the Function() constructor along with the new operator.
// It is less efficient than declaring a function using a function expression or function statement.
// Syntax: var variable_name = new Function(arg1, arg2..., "Body of the Function"); 
var sum = new Function('a', 'b', 'return a + b');  
console.log("The summation of the numbers is: " +sum(2, 3)); 


// Immediately Invoked Function Expression (IIFE) : 
// It is a function in JavaScript that runs as soon as it is defined. 
// An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting from within the blocks.
