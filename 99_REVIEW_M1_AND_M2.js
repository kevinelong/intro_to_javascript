/* 
For context visit this link: 
https://clvrclvr.com/content/?p=181
*/

//Put peaches into the variable name "jar".
jar = "peaches"

//FANCIER VARIABLE DECLARATIONS
let can = "beans" //Indicates it is mutable(can be changed).
const glass = "water" //Indicates it is immutable(can't be changed).

//Output the contents of the variable name "jar". Using the key-words console.log().
console.log(jar)

// CORE DATA TYPES
text = "ABC"    //  STRING (list of letters/characters)
price = 12.34   //  NUMBER (floating point decimal)
today = Date()  //  DATE

// ADDITIONAL DATA TYPES
list = [0, 1, 2]  //  ARRAY (list of values (Any Type); separated by commas)
dictionary = { first: "Alex", last: "The Great" }  //  Lookup table of key-value-pairs.

// math operators
console.log(12 + 12)  //  Addition
console.log(12 - 12)  //  Subtraction
console.log(12 / 12)  //  Division
console.log(12 * 12)  //  Multiplication

// NOTE: A single "=" is the assignment operator.

// logical operators - output boolean (true/false)
console.log(12 == 12)  //  EQUALS -  The comparison operator (Looks like balancing scales)
console.log(12 > 12)   //  GREATER THAN
console.log(12 < 12)   //  LESS THAN
console.log(12 >= 12)  //  GREATER OR EQUAL
console.log(12 <= 12)  //  LESS THAN OR EQUAL
console.log(12 != 12)  //  < > NOT EQUAL (BANG EQUAL)

//Using the boolean value key-words: true and false
of_age = true
can_see = true

can_drive = of_age && can_see // LOGICAL AND

has_dr_note = false
has_note_from_parent = true

is_excused = has_dr_note || has_note_from_parent // LOGICAL OR




// ANY TYPE CAN BE IN AN ARRAY
let numbers = [13, 7, 42]; 
console.log(numbers[0]); //ACCESS BY INDEX - OFFSET FROM BEGINNING
console.log(numbers[1]);
console.log(numbers[2]);

let person = {}; // empty object
let kevin = {name:"Kevin Long", age: 53};
let nina = {
  name:"Nina", 
  age: 43
};
console.log(nina["age"]); //VERBOSE - WORDY
console.log(nina.age); //CONCISE - dot notation
console.log(kevin["name"]); //VERBOSE - WORDY
console.log(kevin.name); //CONCISE - simple dot notation

// FLOW-CONTROL/BRANCHING WITH CONDITIONAL LOGIC
let age = 99;
const LIMIT = 21;
const OLD = 50;
const ANCIENT = 80;

// IF/ELSE/ELSE-IF
if (age >= ANCIENT){
  console.log("Why not?");
}else if (age >= OLD){
  console.log("Not Recommended");
}else if(age >= LIMIT){
  console.log("Allowed");
}else{
  console.log("NOT ALLOWED!")
}

//LOOPS
//For

//CLASSIC THREE PART INITIAL;BOOL;ITERATOR i=i+1
for(let i=0; i < 5; i++){ // middle expression is true i = i + 1
  console.log(i);
}

// WHILE
let count = 10;

while(count > 0){ //HOW DO WE KNOW WE ARE DONE - WHEN FALSE, WE STOP
  console.log(count);
  count--; //count = count - 1
}
console.log("blast off!!!")

//FOR EACH - NEW SCHOOL - CONSICE - SHORT WAY
data = ["apples", "oranges", "bananas"]
data.forEach(fruit => console.log(fruit)); // ARROW/LAMBDA function

//OLD SCHOOL - VERBOSE - LONG WAY
for(let i=0; i < data.length; i++){ // middle expression is true i = i + 1
  console.log(data[i]);
}

// CODE REUSE WITH FUNCTIONS
function add_two(a, b){
  return a + b;
}
console.log(add_two(100, 10));
console.log(add_two("engine", "caboose")) //CONCATENATE STRINGS
console.log("engine" + "boxcar" + "caboose")

/*
// OOP (Object Oriented Programming) - Class

class Item{
  constructor(height, width){
    this.height = height; //PROPERTIES AKA ATTRIBUTES
    this.width = width;
  }
  get_area(){ //functions in a class are called METHODS
    return this.height * this.width;
  }
}

let item = new Item(30,20);

console.log(item.get_area())

// DRY - Don't Repeat Yourself.

// Class Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`); //` is under ~ tilde
    // Templates back-tick grave-accent `
  }
}

let a = new Animal('wolf');
a.speak();

class Dog extends Animal {
  constructor(name, color) {
    super(name); // call the super class constructor and pass in the name parameter
    this.color=color;
  }

  speak() { //OVERRIDES THE METHOD
    console.log(`The ${this.color} dog named ${this.name} barks!`);
  }
}

let d = new Dog('Dandy',"Black");
d.speak(); // Dandy barks.
*/