
//  REPEAT CODE WITH LOOPS - ALSO MORE FLOW-CONTROL/BRANCHING also with conditional logic

//  The Classic For-Loop
//  THREE PART INITIAL;BOOL;ITERATOR i=i+1
for (let i = 0; i < 5; i++) { // middle expression is true i = i + 1
    console.log("i:", i);
}

// WHILE
let count = 10;

while (count > 0) { //HOW DO WE KNOW WE ARE DONE - WHEN FALSE, WE STOP
    console.log("count:", count);
    count--; //count = count - 1
}
console.log("blast off!!!")

//LOOPING THROUGH A LIST
fruit = ["apples", "oranges", "bananas"]

//OLD SCHOOL - VERBOSE - LONG WAY
for (let i = 0; i < fruit.length; i++) { // middle expression is true i = i + 1
    console.log(`fruit[${i}]:`, fruit[i]);
}

//FOR EACH - NEW SCHOOL - CONCISE - SHORT WAY
fruit.forEach(f => console.log("f:", f)); // (FAT)ARROW/LAMBDA function
