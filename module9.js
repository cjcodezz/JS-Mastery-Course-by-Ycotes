// Module 9: Object-Oriented Programming (OOP)
// This file demonstrates classes, objects, inheritance, polymorphism, encapsulation,
// and the prototype chain in JavaScript.

// Helper function to display messages in the browser and console.
function log(message) {
  console.log(message);
  const out = document.querySelector('#output');
  if (out) {
    const line = document.createElement('div');
    line.textContent = message;
    out.appendChild(line);
  }
}

// 1) Classes and objects
// A class defines a template for creating objects with the same structure.
class Animal {
  // The constructor runs when a new instance of Animal is created.
  constructor(name, sound) {
    this.name = name; // public property
    this.sound = sound; // public property
  }

  // A method on the class prototype.
  speak() {
    return `${this.name} says: ${this.sound}`;
  }
}

// Create a specific object from the Animal class.
function objectExample() {
  const dog = new Animal('Buddy', 'Woof!');
  log(dog.speak());
}

// 2) Inheritance
// A class can extend another class to reuse properties and methods.
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof!'); // call the parent class constructor
    this.breed = breed; // additional property unique to Dog
  }

  // Overriding the parent method to add more behavior.
  speak() {
    return `${this.name} the ${this.breed} says: ${this.sound}`;
  }
}

function inheritanceExample() {
  const beagle = new Dog('Max', 'Beagle');
  log(beagle.speak());
}

// 3) Polymorphism
// Different classes can implement the same method name in different ways.
class Cat extends Animal {
  constructor(name) {
    super(name, 'Meow!');
  }

  speak() {
    return `${this.name} purrs and says: ${this.sound}`;
  }
}

function polymorphismExample() {
  const pets = [new Dog('Rex', 'Labrador'), new Cat('Luna')];

  pets.forEach((pet) => {
    // Each pet speaks in its own way, even though we call the same method.
    log(pet.speak());
  });
}

// 4) Encapsulation
// Private fields are prefixed with # and cannot be accessed from outside the class.
class BankAccount {
  #balance; // private field

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than zero.');
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than zero.');
    }
    if (amount > this.#balance) {
      throw new Error('Insufficient funds.');
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

function encapsulationExample() {
  const account = new BankAccount('Aisha', 100);
  log('Initial balance: ' + account.getBalance());
  account.deposit(50);
  log('After deposit: ' + account.getBalance());

  try {
    account.withdraw(200); // this will throw an error because the balance is too low
  } catch (error) {
    log('Withdrawal failed: ' + error.message);
  }
}

// 5) Prototype chain
// JavaScript uses prototypes to share methods across objects.
function prototypeChainExample() {
  const cat = new Cat('Milo');

  // The cat object has access to speak() from Cat.prototype,
  // and it also inherits properties from Animal.prototype.
  log(cat.speak());

  // We can inspect the prototype chain using __proto__.
  log('Cat prototype is Animal? ' + (cat.__proto__ instanceof Animal));
  log('Cat prototype chain root: ' + Object.getPrototypeOf(Object.getPrototypeOf(cat)).constructor.name);
}

// Export functions for console testing and easy demo usage.
window.module9 = {
  objectExample,
  inheritanceExample,
  polymorphismExample,
  encapsulationExample,
  prototypeChainExample,
};

log('Module 9 loaded. Run module9.objectExample(), module9.inheritanceExample(), module9.polymorphismExample(), module9.encapsulationExample(), or module9.prototypeChainExample() from the console.');
