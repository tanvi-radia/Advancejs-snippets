// var, const and let variables

// var is function-scoped or global scoped
// Allows to redeclare variable with same name
// Hoisting occurs

// let is block-scoped or local scoped
// Does not allow to redeclare variable with same name
// Initialization is not mandatory with declaration and re-initialization is possible
// Hoisting does not occur

// const is block-scoped or local scoped
// Does not allow to redeclare variable with same name.
// Initialization is mandatory with declaration and re-initialization of const variable with another value is not possible.
// Hoisting does not occur

// var
var a = "Var is used"
console.log(window.a);  // global scope
console.log(a);

// let
let b = "let is used"
console.log(window.b);  // local scope
console.log(b);

// const
const c = "Will not change";
console.log(window.c);  // local scope
console.log(c);
// c = "Will change";  // Error
// console.log(c);
