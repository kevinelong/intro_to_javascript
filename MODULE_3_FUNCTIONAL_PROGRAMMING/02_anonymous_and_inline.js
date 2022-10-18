
// EXAMPLE 2 - LOOPING THROUGH A LIST
data = ["apples", "oranges", "bananas"]

//OLD SCHOOL - VERBOSE - LONG WAY
for (let i = 0; i < data.length; i++) { // middle expression is true i = i + 1
    console.log(data[i]);
}

//FOR EACH - NEW SCHOOL - CONCISE - SHORT WAY - USING ARROW (LAMBDA) FUNCTIONS
data.forEach(fruit => console.log(fruit)); // (FAT)ARROW/LAMBDA function

//  ANY FUNCTION THAT TAKE ANOTHER FUNCTION AS AN INPUT PARAMETER,
//    CAN USE AN ANONYMOUS IN-LINE ARROW FUNCTION INSTEAD. 