// Map function: When an operation is performed on all the elements of an array and result is stored in another array.
// ES6 provides us a new collection type called Map, which holds the key-value pairs in which values of any type can be used as either keys or values. 
let arr = [2, 3, 4, 5, 6];
let arr1 = arr.map(function(val){
    return val * 3
});

console.log(arr)
console.log(arr1);