
// OOP (Object Oriented Programming) - Class

class Item {
    constructor(height, width) {
        this.height = height; //PROPERTIES AKA ATTRIBUTES
        this.width = width;
    }
    get_area() { //functions in a class are called METHODS
        return this.height * this.width;
    }
}

let item = new Item(30, 20);

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
        this.color = color;
    }

    speak() { //OVERRIDES THE METHOD
        console.log(`The ${this.color} dog named ${this.name} barks!`);
    }
}

let d = new Dog('Dandy', "Black");
d.speak(); // Dandy barks.
