/* Let's say that we want to specify that all super heroes have a
sayHello method. This could be done by putting the sayHello function 
in a common prototype object: */

function SuperHero(name, strength) {
  this.name = name;
  this.strength = strength;
}

SuperHero.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

var superman = new SuperHero("Superman", 100);
superman.sayHello();
// Not recommended with 'new'

/* The recommended way to go is to ignore the Javascript 'new' operator altogether 
and use 'Object.create': */

var superHeroPrototype = {
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

var superman = Object.create(superHeroPrototype);
superman.name = "Batman";
superman.sayHello();

//??
superHeroPrototype.name = "Batman";
superHeroPrototype.sayHello();
