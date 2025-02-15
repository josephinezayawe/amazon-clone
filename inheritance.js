/*export class person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`hello, my name is ${this.name} and i am ${this.age}years old`);
  }
}
const person1 = new person("joseph", 20);
person1.introduce();
*/

/*export class animal {
  name;
  sound;

  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  character() {
    console.log(`my name is ${this.name},and i shout like ${this.sound}`);
  }
}

const animal1 = new animal("cow", "moooow");
animal1.character();
*/
export class vehicle {
  brand;
  speed;

  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  move() {
    console.log(`${this.brand} is moving at ${this.speed}`);
  }

  honk() {
    console.log("beep!beep!");
  }
}

const character = new vehicle("toyota", "80km/h");
character.move();
character.honk();

export class CarType extends vehicle {
  gasoline;
  electric;

  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }
  fuel() {
    console.log(
      `this ${this.brand} moves at ${this.speed} and runs on ${this.fuelType}`
    );
  }
}
const car1 = new CarType("mikolomwambibale", "200km/h", "gasoline");

car1.fuel();

class color extends CarType {
  red;
  black;

  constructor(brand, speed, fuelType, color) {
    super(brand, speed, fuelType);
    this.color = color;
  }
  appearance() {
    console.log(
      `this ${this.brand} moves  at ${this.speed} and runs on ${this.fuelType} and it is ${this.color}`
    );
  }
}
const color1 = new color("volksWagen", "180km/h", "electric", "red");

color1.appearance();
