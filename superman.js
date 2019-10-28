var superman = {
  heroName: "Superman",

  sayHello: function() {
    console.log("Hello, I'm " + this.heroName);
  }
};

superman.sayHello();

var failThis = superman.sayHello;
failThis();
/* Why does this not work anymore? 
This is because the variable failThis belongs to the global scope, 
which contains no member variable named heroName. */
