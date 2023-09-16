// Hoisting: 
// When function is called before its declaration some programming languages gives it as an error
// But in case of Javascript interpreter executes the whole code first checks where all places declaration is done and in case func is called before it's declaration then it puts the function defination before function call
// Hoisting: when function is called before it's declaration, then interpreter puts declaration of function at the top acc. to it's current scope (either Globally or Locally)

// Hoisting in function
// Func call
hello();

// Func Declaration
function hello(){
    console.log("Hello World");
} 

// Hoisting in var
a = 10;
console.log(a)    // Printing
var a;           //  Declaration




// Detail
// Note: when we declare any variable using var in javascript by default it assigns value as undefined if not assigned any value to it

console.log(a)    
var a;               // Undefined
a = 10;           


console.log(a)
var a = 10;        // Undefined

// interpreter only takes declaration above not defination or assignment

// Refer techgun video for further