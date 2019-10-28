function Animal(name, energy) {
  if (this instanceof Animal === false) {
    console.warn("Forgot to call Animal with the new keyword");
  }

  this.name = name;
  this.energy = energy;
}

let cat = new Animal();
let dog = Animal();

console.log(Object.getPrototypeOf(Math.max));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
console.log(Array.prototype);
