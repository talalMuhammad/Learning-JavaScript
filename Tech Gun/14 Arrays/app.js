/*

In this Chapter We Learn

* Initialise Array with
    * square Brackets
    * Array Constructor

* rander an array

* Accessing any value in an array

* mixed Array

* Change any value in an Array


*/

let book1 = "Programing";
let book2 = "Math";
let book3 = "Biology";
let book4 = "Computer";

console.log(book1); // "Programing"
console.log(book2); // "Math"
console.log(book3); // "Biology"
console.log(book4); // "Computer"

// 👉🏻 initialising Array 1st way

let books = ["Programing", "Math", "Biology", "Computer"];

// 👉🏻 rander an array

console.log(books); // ["Programing", "Math", "Biology", "Computer"]

// 👉🏻 initialising Array 2nd way

let books2 = new Array("Programing", "Math", "Biology", "Computer");

console.log(books2); // ["Programing", "Math", "Biology", "Computer"]

// 👉🏻 accessing any value in an Array

console.log(books[0]); // "Programing"
console.log(books[1]); // "Math"
console.log(books[2]); // "Biology"
console.log(books[3]); // "Computer"
console.log(books[4]); // undefined

// 👉🏻 mixed Array

let mixedArray = [true, false, undefined, 123, null, "string"];

console.log(mixedArray); // [true, false, undefined, 123, null, 'string']

// 👉🏻 Changing Any value of an Array

books[2] = "Physics";

console.log(books); // ['Programing', 'Math', 'Physics', 'Computer']
