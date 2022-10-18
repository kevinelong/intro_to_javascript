/* FUNCTIONAL PROGRAMMING - USING ANONYMOUS FUNCTIONS
ANONYMOUS FUNCTIONS ARE KNOWN AS LAMBDA FUNCTIONS
SOME NICKNAMES INCLUDE: inline-functions, and arrow-functions.

They consist of three somewhat familiar parts:
    (x) - zero or more input parameters declared in parentheses.
    => - The "FAT" Arrow.
    {return x * x;} - one or more lines of code that can include a return statement.
The parentheses are no required if there is exactly one parameter.
The curly braces and return key-word are not required if there is exactly one statement.

They can be explicitly assigned an identifier to de-anonymize them: */

// EXAMPLE 1 - Defining and using a named function:

//OLD WAY
function subtract1(a, b) {
    return a - b;
}
console.log("subtract1:", subtract1(6, 7)); //EXPECT -1

// NEW WAY
let subtract2 = (a, b) => a - b;
console.log("subtract2:", subtract2(6, 7)); //EXPECT -1
