var person = {};

console.log(person);

var person = {
  firstName: "Muhammad",
  lastName: "Ahmed",
};

console.log(person);

console.log(person.firstName);
console.log(person.lastName);

console.log(person["firstName"]);

var person = {
  "first Name": "Muhammad",
  lastName: "Ahmed",
};

console.log(person["first Name"]);
console.log(person.age);

person.lastName = "Umer";

console.log(person.lastName);

person.age = 18;

console.log(person);
console.log(person.age);

delete person.lastName;

console.log(person);

console.log("height" in person);
console.log("age" in person);

var person = {
  firstName: "Muhammad",
  lastName: "Ahmed",
};

person.age = 17;

for (let properties in person) {
  console.log(properties + ": " + person.properties);
}

for (let properties in person) {
  console.log(properties + ": " + person[properties]);
}
