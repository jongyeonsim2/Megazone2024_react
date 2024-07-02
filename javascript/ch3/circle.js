//circle.js

const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumgerence(radius) {
  return 2 * PI * radius;
}

export { PI, getArea, getCircumgerence };
