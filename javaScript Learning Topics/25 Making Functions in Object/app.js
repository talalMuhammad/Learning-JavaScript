// 1st way

var person = {
  firstName: "Muhammad",
  lastName: "Ahmed",
};

person.sayHello = function () {
  console.log("Hello!");
};

person.sayHello();
console.log(person);

// 2nd way

function greet() {
  console.log("Hello");
}
person.sayHello = greet;

person.sayHello();
console.log(person);

// 3rd way

var person = {
  firstName: "Muhammad",
  lastName: "Ahmed",
  sayHello: function () {
    console.log("Hello W");
  },
};

person.sayHello();

// 4th way

var person = {
  firstName: "Muhammad",
  lastName: "Ahmed",
  sayHello() {
    console.log("Hello World");
  },
};

person.sayHello();
