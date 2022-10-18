// LOGICAL EXPRESSIONS (AND/OR)

//Using the boolean value key-words: true and false

of_age = true
can_see = true

can_drive = of_age && can_see // && LOGICAL AND

console.log("can_drive:", can_drive)

has_dr_note = false
has_note_from_parent = true

is_excused = has_dr_note || has_note_from_parent // || LOGICAL OR
console.log("is_excused:", is_excused)
