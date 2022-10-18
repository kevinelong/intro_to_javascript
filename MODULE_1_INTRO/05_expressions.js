// LOGICAL EXPRESSIONS (AND/OR)

//Using the boolean value key-words: true and false

of_age = true
can_see = false

can_drive = of_age && can_see // && LOGICAL AND
can_drive = (of_age == true) && (can_see == true) // && LOGICAL AND - true only if all are true

console.log("can_drive:", can_drive)

has_dr_note = false
has_note_from_parent = false

is_excused = has_dr_note || has_note_from_parent // || LOGICAL OR - false only if both are false
console.log("is_excused:", is_excused)

//SAME
is_excused = (has_dr_note == true) || (has_note_from_parent == true) // || LOGICAL OR
