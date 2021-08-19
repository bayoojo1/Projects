/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */


function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
}

/**Anonymous function */
const getArea = function(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
};

/* Arrow function example */
const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
};

function areaOfRectangle(widht, height) {
    return widht * height;
}

function volOfRectangle(width, height, length) {
    return width * height * length;
}

function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function volOfSphere(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
}
alert(volOfSphere(10));


/**
More examples of Arrow function

const square = x => {
  return x * x;
}
square(10); // 100


const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}
getArea(10, 20, 'sq ft');  // 200 sq ft


const square = x => x * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;



const name = 'Jesse';
const greeting = () => alert(`Greetings, ${name}!`);



const greeting = function() {
  alert(`Greetings, ${name}!`);
};

 */