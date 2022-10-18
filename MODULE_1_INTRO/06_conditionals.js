// FLOW-CONTROL/BRANCHING WITH CONDITIONAL LOGIC
// IF/ELSE/ELSE-IF
MINIMUM = 18
MAXIMUM = 99
age = 30
if (age < MINIMUM) {
    console.log("Too young.");
} else if (age >= MAXIMUM) {
    console.log("Too old.");
} else {
    console.log("Good to go!")
}
//SWITCH/CASE
const RED = 0;
const GREEN = 1;
const BLUE = 2;
let color = GREEN;
switch (color) {
    case RED:
    case GREEN:
    case BLUE: console.log("Is RGB"); break;
    default: console.log("Not RGB"); break;
}
