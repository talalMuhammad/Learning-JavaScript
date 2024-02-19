greet();

function greet() {
  console.log("Hello");
}

// console.log(z); // Error z is not defined

var a;
console.log(a); // undefined

a = 7;

console.log(b); // undefined

var b = 2;

var c;
c = 3;

console.log(c); // 3

// console.log(d); // Error: Cannot access 'd' before initialization

let d;
d = 4;

let e;
console.log(e); // undefined

e = 5;

let f;
f = 6;
console.log(f); // 6

// console.log(g);// Error: Missing initializer in const declaration

// const g;
g = 1;

// console.log(h);// Error: Cannot access 'h' before initialization

const h = 1;

const i = 123;

console.log(i); // 123

l = 12;
console.log(l); // 12

m = "ABC";

console.log(m); // ABC
