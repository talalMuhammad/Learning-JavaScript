const score = 100;

// console.log(score); // 100

// const balance = new Number(150);

// console.log(balance); // [Number: 150]

// console.log(balance.toString()); // 150
// console.log(balance.toFixed(2)); // 150.00

// const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3)); // 23.9

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3)); // 124

const otherNumber = 1123.8966;

// console.log(otherNumber.toPrecision(3)); // 1.12e+3

const hundreds = 1000000000;

// console.log(hundreds.toLocaleString()); // 1,000,000,000

// console.log(hundreds.toLocaleString("en-IN")); //1,00,00,00,000

// ++++++ Maths +++++++++++++++

// console.log(Math); // Object [Math] {}

// console.log(Math.abs(-4)); // 4

// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5

// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(5.9)); // 5

// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random());

const min = 10;
const max = 20;

const output = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(output);
