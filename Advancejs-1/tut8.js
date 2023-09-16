// Object Destructuring: 
// let book = {
//     name: "Advance js",
//     publication: "Techgun",
//     year: 2021
// };

// // value "Advance js" is assigned to both name var and title
// let {name : title, publication, year} = book;
// console.log(title);

// Nested Object Destructuring
let book = {
    name: "Advance js",
    publication: "Techgun",
    year: 2021,

// Nested Object
    reference: {
        first_ref: "codewithHarry",
        second_ref: "code evolution"
    }
};

// value "Advance js" is assigned to both name var and title
let {name, publication : title, year, reference : {first_ref, second_ref}} = book;
console.log(name); 
console.log(title);
// console.log(publication); // Error
console.log(first_ref);