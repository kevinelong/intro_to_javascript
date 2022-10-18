// CODE REUSE WITH FUNCTIONS - DRY (Don't Repeat Yourself) - no retyping
// like a min program inside your program.
function subtract(a, b) {
    let result = a - b;
    return result;
}
// ANATOMY OF A FUNCTION
// "function" is reserved key word that begins to declare a new function.
// "subtract" is an identifier like a variable name.
// "a" and "b" are input parameters (a kind of variable).
// "a - b" is an arithmetic expression.
// "result" is a temporary variable inside the function "scope",
//  that can't be seen outside the function.
// "return" is a reserved key-word that sends back a value to the "caller".

// call a function by name, and pass in two literal values as input arguments.
let output = subtract(100, 10); // call/invoke the function
console.log(output); // print the returned value

//FUNCTIONS DO NOT REQUIRE INPUT VALUES AND NEED NO RETURN A VALUE

//PROGRAMS DON'T ALWAYS NEED FUNCTIONS - A SIMPLE SCRIPT CAN BE ENOUGH