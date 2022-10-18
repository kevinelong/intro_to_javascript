// SIMPLE/CORE/PRIMITIVE DATA TYPES
text = "ABC"    //  STRING (list of letters/characters)
PI = 3.14159    //  NUMBER (floating point decimal - fraction)
quantity = 144  //  NUMBER (integer - whole number)
today = Date()  //  DATE

// COMPLEX/ADDITIONAL DATA TYPES

//  ARRAY (list of values (Any Type); separated by commas)
list = [1, 2, 3]  
console.log(list[0]) // 1

// OBJECT - Lookup table of key-value-pairs.
dictionary = {first: "Alex", last: "The Great" }  
console.log(dictionary["first"]) // Alex using bracket notation and the key "first"
console.log(dictionary.first) // Alex using dot notation and the same key as a property
console.log(Object.values(dictionary)[0]) //Alex - convert to array of values using Object.values() method

//ARRAY OF STRING
list = []; //empty Array AKA List of items
fruit = ["apples", "oranges", "pears"];

//ACCESS BY INDEX - OFFSET FROM BEGINNING
console.log(fruit[0]); // apple
console.log(fruit[1]); // oranges
console.log(fruit[2]); // pears

// ANY TYPE IN ANY COMBINATION CAN BE IN AN ARRAY
mixed = [123, "ABC"]
console.log(mixed[0]); //123 number
console.log(mixed[1]); //ABC string
