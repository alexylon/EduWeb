var destination = "Mars";

function createHero(heroName) {
  var name = heroName;

  return {
    fly: function(destination) {
      console.log(name + " flying to " + destination);
    }
  };
}

// When the createHero function returns, noone else will ever
// be able to directly access 'name', except via fly.

var superman = createHero("SuperMan");

superman.fly("The Moon");

// BUT
console.log("Hero name = " + superman.name);

/* The function createHero is said to a be a Javascript encapsulated module, 
with closed 'private' member variables and a 'public' interface 
returned as an object with functions */
