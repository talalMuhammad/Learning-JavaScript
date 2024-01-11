// stack (primitive), Heap (non-primitive)

let myName = "Muhammad";

let anotherName = "Ahmed";

anotherName = "Talal";

console.log(myName); // "Muhammad"
console.log(anotherName); // "Talal"

let userOne = {
  name: "Ahmed",
  age: 18,
};

let userTwo = userOne;

userTwo.age = 21;

console.log(userOne.age); // 21
console.log(userTwo.age); // 21

// stack me copy milta he
// Heap me rafrence milta he jo original ko bhi change kar data he
