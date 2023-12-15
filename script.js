// Parent class: Animal
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("Generic animal sound");
  }
}

// Subclass: Cat (extends Animal)
class Cat extends Animal {
  // Constructor calls the parent constructor with the species "Cat"
  constructor() {
    super("Cat");
  }

  // Method specific to Cat class
  purr() {
    console.log("purr");
  }
}

// Subclass: Dog (extends Animal)
class Dog extends Animal {
  // Constructor calls the parent constructor with the species "Dog"
  constructor() {
    super("Dog");
  }

  // Method specific to Dog class
  bark() {
    console.log("woof");
  }
}

// Example usage:
const genericAnimal = new Animal("Generic");
console.log(genericAnimal.species);  // Output: Generic
genericAnimal.makeSound();  // Output: Generic animal sound

const cat = new Cat();
console.log(cat.species);  // Output: Cat
cat.makeSound();  // Output: Generic animal sound
cat.purr();  // Output: purr

const dog = new Dog();
console.log(dog.species);  // Output: Dog
dog.makeSound();  // Output: Generic animal sound
dog.bark();  // Output: woof
