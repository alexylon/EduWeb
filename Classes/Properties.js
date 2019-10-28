// Instance properties must be defined inside of class methods:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Static class-side properties and prototype data properties
// must be defined outside of the ClassBody declaration:

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
