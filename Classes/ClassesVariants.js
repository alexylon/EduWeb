/* Classes are in fact "special functions", 
and just as you can define function expressions and function declarations, 
the class syntax has two components: class expressions and class declarations. */

// unnamed class expression
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named class expression
let Triangle = class Triangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Triangle.name);
// output: "Triangle2"

// class declaration
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
console.log(Circle.name);
// output: "Circle"
