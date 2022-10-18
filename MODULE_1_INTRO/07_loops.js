
//  REPEAT CODE WITH LOOPS

//  The Classic For-Loop
//  THREE PART INITIAL;BOOL;ITERATOR i=i+1
for (let i = 0; i < 5; i++) { // middle expression is true i = i + 1
    console.log(i);
}

// WHILE
let count = 10;

while (count > 0) { //HOW DO WE KNOW WE ARE DONE - WHEN FALSE, WE STOP
    console.log(count);
    count--; //count = count - 1
}
console.log("blast off!!!")

//LOOPING THROUGH A LIST
data = ["apples", "oranges", "bananas"]

//OLD SCHOOL - VERBOSE - LONG WAY
for (let i = 0; i < data.length; i++) { // middle expression is true i = i + 1
    console.log(data[i]);
}

//FOR EACH - NEW SCHOOL - CONCISE - SHORT WAY
data.forEach(fruit => console.log(fruit)); // (FAT)ARROW/LAMBDA function
