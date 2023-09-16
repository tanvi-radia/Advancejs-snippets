// Array Destructuring: When we have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed.

// Without Destructuring
// let book = ["Advance js", 200, 500];
// let name = book[0];
// let pages = book[1];
// let price = book[2];

// With Destructuring
// let book = ["Advance js", 200, 500];
// let [Name, pages, price] = book;
// console.log(Name)



// Destructuring in nested array
// let book = ["Advance js", 200, 500, ["Techgun", 2021]];
// let [name, pages, price, [publication, year]] = book;
// console.log(publication)

// Destructuring of array elements when function returns an array
// function return_array(){
//     return ["Advance Js", 200];
// }

// let [Name, price] = return_array();
// console.log(price);