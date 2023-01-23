class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`this ${this.name} is sleeping`);
  }
  sleep() {
    console.log(`this ${this.name} is eating`);
  }
}

class Cats extends Animals {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  miaw() {
    console.log(`${this.name} is miawing`);
  }
}

const newCat = new Cats('francisco', 27, 'illuminate');
console.log(newCat.miaw());
console.log(newCat);
