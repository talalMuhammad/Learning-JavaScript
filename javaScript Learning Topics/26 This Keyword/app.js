var person1 = {
  firstName: "Muhammad",
  lastName: "Daniyal",
  intro() {
    return `Hello I am Daniyal. I Have ${cars.brand[0]} Brand, and Model ${cars.model[0]}`;
  },
};

var person2 = {
  firstName: "Muhammad",
  lastName: "Bilal",
  intro() {
    return `Hello I am ${person2.lastName}. I Have ${cars.brand[1]} Brand, and Model ${cars.model[1]}`;
  },
};

var person3 = {
  firstName: "Muhammad",
  lastName: "Nabeel",
  intro() {
    return `Hello I am ${this.lastName}. I Have ${cars.brand[2]} Brand, and Model ${cars.model[2]}`;
  },
};

var cars = {
  brand: ["Audi", "BMW", "Mercedes"],
  model: ["E-Tron", "i7", "EQC"],
};

console.log(person1.intro());
console.log(person2.intro());
console.log(person3.intro());
