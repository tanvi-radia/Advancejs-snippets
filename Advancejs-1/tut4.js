// Spread Operator: Also uses "..." to copy values of one array inside another
// To merge two arrays
// let arr1 = [4,5,6]
// let arr2 = [1,2,3,...arr1]
// console.log(arr2);

let arr1 = [4,5,6]
let arr2 = [1,2,3]
let arr3 = [...arr1, ...arr2]
console.log(arr3)