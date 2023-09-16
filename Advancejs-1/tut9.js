// Strict Mode
// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
// "use strict"; Defines that JavaScript code should be executed in "strict mode".


// Without strict mode -----> No Error
// a = 10;
// console.log(a);


// Using strict mode -------> Error (a is not defined)
// "use strict"   -------> Global Scope
"use strict";
a = 10;
console.log(a);


function Test (a, b, b){
    // "use strict" -------> Local Scope
    return a+b+b;
}

Test(10, 20, 30);