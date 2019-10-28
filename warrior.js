class Warrior {
  constructor(name) {
    this._name = name;
    this._health = 100;
  }

  heal(amount) {
    this._health = Math.min(this._health + amount, 100);
  }

  static classMethod() {
    return "Stathic method";
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    this._health = newHealth;
  }
}

class Ninja extends Warrior {
  constructor(name) {
    super(name);
  }

  heal(amount) {
    //super.heal(amount * 1.2);
    this._health = Math.min(this._health + amount * 1.2, 100);
  }
}

let achilles = new Warrior("Achilles");
let donatello = new Ninja("Donatello");

console.log(donatello);
donatello.health = 80; //!!!the setters are not functions
console.log("New health of Donatello: " + donatello.health); //!!!the getters are not functions
donatello.heal(10);
console.log(donatello);

console.log(achilles);
achilles.health = 80;
console.log("New health of Achilles: " + achilles.health);
achilles.heal(10);
console.log(achilles);
console.log();

console.log(Warrior.classMethod());
