// Callback function: function callback is passed as a parameter inside another function
// We can pass any function as parameter inside another function call
// Used When we need to call 2 func in same fucntion call
function sayHello(){
    console.log("Call back function is used");
}
function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}
let a = 10;
let b = 20;

add(a, b, sayHello);

// passing Anonymous function def. in another function call
add(30, 40, function(){
    console.log("Bye..");
})