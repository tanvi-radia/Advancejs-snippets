// Default Parameters
// We need to pass some values in function call acc. to function defination
// if not passed it will give undefined as result
// Default Parameters: Some value is assigned to parameters in function def. itself hence it will give that value as result when no values are passed in function call instead of giving undefined.

// func without default parameter
// function default_parameters(value){
//     console.log(value)
// } 
// default_parameters();

// func without default parameter
function default_parameters(value=1){
    console.log(value)
} 
default_parameters();
