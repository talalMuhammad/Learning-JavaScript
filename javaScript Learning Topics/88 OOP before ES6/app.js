var person1 = {
  firstName: "Muhammad",
  "last name": "Ahmed",
  age: 16,
  get fullName() {
    return `${this.firstName} ${this["last name"]}`;
  },
};

console.log(person1);
console.log(person1.firstName);
console.log(person1["last name"]);
console.log(person1.age);

person1.age = 14;

console.log(person1.age);

console.log(person1.fullName);

person1.sayHi = () => {
  return "Hello Friends";
};

console.log(person1);
console.log(person1.sayHi());

var person2 = new Object();

console.log(person2);

person2.firstName = "Umer";

console.log(person2);

// Constructor Function

function Person(getFirstName, getLastName, getAge) {
  let myObject = new Object();

  myObject.firstName = getFirstName;
  myObject.lastName = getLastName;
  myObject.age = getAge;

  return myObject;
}

console.log(Person("Ehsan", "Asadi", 30));
console.log(Person("Daniyal", "Ehsan", 25));

let person5 = Person("Waqar", "Mudasir", 22);

console.log(person5);

function PersonAgain(getFirstName, getLastName, getAge) {
  this.firstName = getFirstName;
  this.lastName = getLastName;
  this.age = getAge;
  this.sayHi = function () {
    return "Hello World";
  };
  this.changeAge = (newAge) => {
    this.age = newAge;
  };
}

let perosn3 = new PersonAgain("Saif", "Khan", 30);
let perosn4 = new PersonAgain("Rashid", "Pasha", 25);

console.log(perosn3);

perosn3.changeAge(28);

console.log(perosn3);
