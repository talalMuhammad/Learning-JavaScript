let car = "Audi"; // Global variable

function add() {
  let result = 22; // Local Variable

  console.log(result); // 22

  console.log(car); // Audi
}

// console.log(result); // Error: result is not defined

console.log(car); // Audi

add();

function sub() {
  let result = 50;

  console.log(result); // 50
}

sub();

// local variable ky consept ka benifit ye hy ky hm 1 name ka variable jitny time marzi use kar sakty hen
