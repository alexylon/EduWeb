/* When looking up a property, Javascript will try to find the property in the object itself. 
If it does not find it then it tries in it's prototype, and so on. For example: */

var avengersHero = {
  editor: "Marvel"
};

var ironMan = {};

ironMan.__proto__ = avengersHero;

console.log("Iron Man is copyrighted by " + ironMan.editor);

/*As we can see, although the 'ironMan' object is empty, 
it's prototype does contain the property 'editor', which get's found. */

avengersHero.editor = "DC Comics";
console.log("Iron Man is copyrighted by " + ironMan.editor);
