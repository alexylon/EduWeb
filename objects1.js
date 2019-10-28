class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  speak(line) {
    console.log(`The ${this.color} ${this.breed} says ${line}`);
  }
}
//=================================================
let cat = {
  breed: "abyssinian",
  color: "brown",
  speak: function(line) {
    console.log(`The ${this.color} ${this.breed} says ${line}`);
  }
};
//=================================================
function Mouse(breed, color) {
  this.breed = breed;
  this.color = color;
}

Mouse.prototype.speak = function(line) {
  console.log(`The ${this.color} ${this.breed} says ${line}`);
};

let dog = new Dog("labrador", "white");
let mouse = new Mouse("domestic mouse", "grey");
dog.speak("bau bau");
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(Dog));
cat.speak("meow");
console.log(Object.getPrototypeOf(cat));
mouse.speak("tsrrr");
console.log(Object.getPrototypeOf(mouse));
console.log(mouse["breed"]);
console.log(mouse.breed);

console.log(dog);
Dog.prototype.toString = function() {
  return `Breed: ${this.breed}, color: ${this.color}`;
};
console.log(String(dog));

// Mouse.prototype.toString = () => `The ${this.color} mouse is eating cheese`;
// Here this.color == undefined
Mouse.prototype.toString = function() {
  return `The ${this.color} mouse is eating cheese`;
};
console.log(String(mouse));
