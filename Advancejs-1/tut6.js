// template literals: ${var_name} used inside ``. Hence donot need to concatanate string every time.  
// used in order to make multiple line string
// We use `` to define a string and it will print that string in that format itself as it is written in ``.
let value = `Hello !
This is Tanvi`;
console.log(value)

let val = `Hello !     This is Tanvi`;
console.log(val)

let val1 = "Tanvi"
console.log(`Hello !! My name is ${val1}. How are you`)

// Manipulation in template literal
let val2 = "40"
console.log(`value is: ${40*2}`)