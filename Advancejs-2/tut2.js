// Do if have time
// Loops 
// for, for...of, for...in
// for...in: Iterate (loop) over the properties of an object:
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
  console.log(text)
}

// for...of: For every iteration the value of the next property is assigned to x.
// Anything that has iterable properties.
let names = ["Tanvi", "Tithi", "Disha"];
for(let x of names){
    console.log(x);
}