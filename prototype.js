class Dog {
  constructor(breed, color = "red") {
    this.breed = breed;
    this.color = color;
    this.legs = 4;
  }

  speak(line) {
    console.log(line);
  }
}

Dog.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
};
Dog.prototype.breed = "woulf";
Dog.prototype.color = "grey";
let dog1 = new Dog("Labrador", "white");
let dog2 = Object.create(Dog.prototype);
let dog3 = new Dog();

console.log(`${dog1.color} / ${dog1.legs}`); //-> white / 4
console.log(`${dog2.color} / ${dog2.legs}`); //-> grey / undefined
console.log(`${dog3.color} / ${dog3.legs}`); //-> red / 4
console.log(Dog.prototype);
//-> Dog { sleep: [Function], breed: 'woulf', color: 'grey' }
console.log(Object.getPrototypeOf(dog1));
//-> Dog { sleep: [Function], breed: 'woulf', color: 'grey' }
console.log(dog1.constructor); //-> [Function: Dog]

for (let key in dog1) {
  console.log(`Key: ${key}. Value: ${dog1[key]}`);
}
/* ->
Key: breed. Value: Labrador
Key: color. Value: white
Key: legs. Value: 4
Key: sleep. Value: function() {
  console.log(`${this.name} is sleeping.`);
}
*/

console.log(`dog1:`);
for (let kay in dog1) {
  console.log(
    `Key: ${kay}. Value: ${dog1[kay]} --> ${dog1.hasOwnProperty(kay)}`
  );
}

console.log(`dog2:`);
for (let key in dog2) {
  console.log(
    `Key: ${key}. Value: ${dog2[key]} --> ${dog2.hasOwnProperty(key)}`
  );
}

console.log(`dog3:`);
for (let key in dog3) {
  console.log(
    `Key: ${key}. Value: ${dog1[key]} --> ${dog1.hasOwnProperty(key)}`
  );
}
