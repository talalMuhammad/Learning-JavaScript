var person1 = {};

console.log(person1);

var person2 = {
  name: "Ahmed",
};

console.log(person2);

console.log(person2.hasOwnProperty("name")); // true
console.log(person2.hasOwnProperty("age")); // false

function Creature(ls) {
  this.lifeSpan = ls;
}

Creature.prototype.breath = function () {
  console.log("breathing...");
};

var creature1 = new Creature(100);

console.log(creature1);

function Person(first, last, a) {
  this.firstName = first;
  this.lastName = last;
  this.age = a;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.__proto__ = Object.create(Creature.prototype);

var person3 = new Person("Muhammad", "Ahmed", 23);

console.log(person3);
console.log(person3.hasOwnProperty("firstName"));

console.log(person3.fullName());
console.log(person3.__proto__);
person3.breath();
// prototype chaining
