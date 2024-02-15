/*

In this Chapter we Learn

32 Different Methods 🤯

* Arrays in JavaScript
  * Randring Array
  * Accessing Elements form multi Dimension Array 
  * Array.isArray() Property method

* Check Array's Length
  * length property
  * Accessing Last Element of Array

* Use Loops on Array
  * for Loop
  * for in Loop
  * for of Loop
  * forEach() method Loop
  * map() method

* Adding new Elements in Array
  * with variable
  * push() method
  * unShift() method
  * concat() method
  * splice() method
  * spread operator (...)

* Removing Elements in an Array
  * pop() method
  * shift() method
  * splice() method
  * delete Pproperty

* Arrange the Elements of an Array
  * sort() method
    * Behaviour with Strings
    * Behaviour with Numbers
  
* Searching in an Array
  * indexOf() method
  * lastindexOf() method
  * includes() method
  * find() method
  * findIndex() method

* Searching and Filtering in an Array
    * filter() method
    * some() method
    * every() method
    * map() method
  
* Copying Elements of Array
  * slice() method
  * concat() method
  * spread operator ( ... )

* Merging Arrays and Flat an Arrays
  * concat() method
  * Spread Operator ( ... )
  * flat() method
  * reduce() method

* Converting Array
  * in Empty Array
  * toString() method
  * join() method
  * entries() method

* Additional Methods
  * map() method  ( revise )
  * filter() method ( revise )
  * fill() method
  * reverse() method

*/

// 👉🏻 Arrays in JavaScript

var books = ["Math", "Physics", "Biology", "Computer"];

// 👉🏻 randring Array

console.log(books); // ["Math", "Physics", "Biology", "Computer"];

// 👉🏻 Accessing Elements form multi Dimension Array

let bookWithPages = [
  ["Math", 300],
  ["Physics", 500],
  ["Biology", 400],
];

console.log(bookWithPages[1][1]); // 500

// ✍🏻 Array.isArray() Property method

let isArrayArr = ["Abc", "Def", "Ghi", "Jkl"];

console.log(Array.isArray(isArrayArr)); // true

// 👉🏻 Check Array's Length

//   ✍🏻 length property

var books = ["Math", "Physics", "Biology", "Computer"];

console.log(books.length); // 4

//   ✍🏻 Accessing Last Element of Array

var books = ["Math", "Physics", "Biology", "Computer"];

console.log(books[books.length - 1]); // Computer

// 👉🏻 Use Loops on Array

// ✍🏻 for Loop

let forArr = ["Abc", "Def", "Ghi", "Jkl"];

for (let index = 0; index < forArr.length; index++) {
  console.log(`Element ${index} is ${forArr[index]}`);
}

// ✍🏻 for in Loop

let forinArr = ["Abc", "Def", "Ghi", "Jkl"];

for (let elements in forinArr) {
  console.log(elements);
}

// 🎯 Note: for in loop hamen index number data he

// ✍🏻 for of Loop

let forofArr = ["Abc", "Def", "Ghi", "Jkl"];

for (let elements of forofArr) {
  console.log(elements);
}

// 🎯 Note: for of loop hamen array ka data provide he

// ✍🏻 forEach() method Loop

let forEachArr = ["Abc", "Def", "Ghi", "Jkl"];

forEachArr.forEach((value, index, array) => {
  console.log(`ForEach Element ${index} is ${value}`);
});

// ✍🏻 map() method

let mapLoopArr = ["Abc", "Def", "Ghi", "Jkl"];

let mapLoopArrUse = mapLoopArr.map((value, index, array) => {
  console.log(value, index, array);
});

// 👉🏻 Adding new Elements in Array
//   ✍🏻 with variable

var books = ["Math", "Physics", "Biology", "Computer"];

books[4] = "Xyz";

console.log(books); // [ 'Math', 'Physics', 'Biology', 'Computer', 'Xyz' ]

//   ✍🏻 push() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.push("English");

console.log(books); // ['Math', 'Physics', 'Biology', 'Computer', 'English']

//   ✍🏻 unShift() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.unshift("Science");

console.log(books); // ['Science', 'Math', 'Physics', 'Biology', 'Computer']

//   ✍🏻 concat() method

let concatArr = ["Abc", "Def", "Ghi", "Jkl"];

let concatArrUse = concatArr.concat("Mno", "Pqr");

console.log(concatArrUse); // ['Abc', 'Def', 'Ghi', 'Jkl', 'Mno', 'Pqr']

//   ✍🏻 splice() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.splice(1, 0, "Abc"); //  ['Math', 'Abc', 'Physics', 'Biology', 'Computer']

console.log(books); // ['Math', 'Abc', 'Physics', 'Biology', 'Computer']

//   ✍🏻 spread operator (...)

var books = ["Math", "Physics", "Biology", "Computer"];

var newValue = "Abc";

books = [...books, newValue];

console.log(books); // ['Math', 'Physics', 'Biology', 'Computer', 'Abc']

// 👉🏻 Removing Elements in an Array
//   ✍🏻 pop() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.pop();

console.log(books); // ['Math', 'Physics', 'Biology']

//   ✍🏻 shift() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.shift();

console.log(books); // ['Physics', 'Biology', 'Computer']

//   ✍🏻 splice() method

var books = ["Math", "Physics", "Biology", "Computer"];

books.splice(1, 1);

console.log(books); // ['Math', 'Biology', 'Computer']

//   ✍🏻 delete Pproperty

var books = ["Math", "Physics", "Biology", "Computer"];

delete books[2];

console.log(books); // ['Math', 'Physics', empty, 'Computer']

console.log(books.length); // 4

console.log(books[2]); // undefined

// 🎯 Note: delete property use karny sy wo element to delete hojata he jis ko hm ny delete kiya tha but hamary array ki length km nhi hoti or jb hm deleted element ka index number sy bhi access karny ki koshish karty hen to undefined ata he or pury array ko agar hm dakhen to us me deleted element ki jga empty show hota he

// 👉🏻 Arrange the Elements of an Array
//   ✍🏻 sort() method
//     👨🏼‍🤝‍👨🏻 Behaviour with Strings

var alphArr = ["d", "f", "y", "z", "s", "b"];

console.log(alphArr.sort()); // ['b', 'd', 'f', 's', 'y', 'z']

//     👨🏼‍🤝‍👨🏻 Behaviour with Numbers

var numArr = [33, 66, 2, 4, 12, 8, 23];

console.log(numArr.sort()); // [12, 2, 23, 33, 4, 66, 8]

// number ky sath sort() method sahi sy work nhi karta us ky liye hamen ye formula lgana parta he

var numArr = [33, 66, 2, 4, 12, 8, 23];

let numArrUse = numArr.sort((a, b) => {
  return a - b;
});

console.log(numArrUse); //  [2, 4, 8, 12, 23, 33, 66]

// 👉🏻 Searching in an Array
// ✍🏻 indexOf() method

var myFriends = ["Muhammad", "Talal", "Ehsan", "Asadi", "Ehsan"];

console.log(myFriends.indexOf("Ehsan")); // 2
console.log(myFriends.indexOf("Ehsan", 3)); // 4
console.log(myFriends.indexOf("ehsan")); // -1

// ✍🏻 lastindexOf() method

var myFriends = ["Muhammad", "Talal", "Ehsan", "Asadi", "Ehsan"];

console.log(myFriends.lastIndexOf("Ehsan")); // 4
console.log(myFriends.lastIndexOf("Ehsan", 3)); // 2
console.log(myFriends.lastIndexOf("ehsan")); // -1

// ✍🏻 includes() method

var myFriends = ["Muhammad", "Talal", "Ehsan", "Asadi", "Ehsan"];

console.log(myFriends.includes("Ehsan")); // true
console.log(myFriends.includes("Ehsan", 3)); // true
console.log(myFriends.includes("ehsan")); // false

// ✍🏻 find() method

var prices = [200, 300, 350, 400, 500, 600];

var findElem = prices.find((value, index, array) => {
  return value < 400;
});

console.log(findElem); // 200

var findElem = prices.find((value, index, array) => {
  return value < 100;
});

console.log(findElem); // undefined

// ✍🏻 findIndex() method

var prices = [200, 300, 350, 400, 500, 600];

var findIndex = prices.findIndex((value) => {
  return value > 350;
});

console.log(findIndex); // 3

var findIndex = prices.findIndex((value) => {
  return value < 100;
});

console.log(findIndex); // -1

// 👉🏻 Searching and Filtring in an Array

// ✍🏻 filter() method

var prices = [200, 300, 350, 400, 500, 600];

var newPriceTag = prices.filter((value, index, array) => {
  return value < 500;
});

console.log(newPriceTag); // [200, 300, 350, 400]

var newPriceTag = prices.filter((value, index, array) => {
  return value < 100;
});

console.log(newPriceTag); // []

// ✍🏻 some() method

var prices = [200, 300, 350, 400, 500, 600];

var newPriceTag = prices.some((value, index, array) => {
  return value < 500;
});

console.log(newPriceTag); // true

var newPriceTag = prices.some((value, index, array) => {
  return value < 100;
});

console.log(newPriceTag); // false

// 🎯 Note: some() method ka use hm jb karty hen jab ham dakhna chahty hen ky pury array me koi element hamari given condition ko satisfy kar raha he ya nhi agar 1 bhi element aesa mil gaya jo ky hamari condition ko satisfy kar raha he to true return hoga or agar koi 1 bhi hamari condition sy match nhi kar raha to false return hoga.

// ✍🏻 every() method

var prices = [200, 300, 350, 400, 500, 600];

var newPriceTag = prices.every((value, index, array) => {
  return value > 100;
});

console.log(newPriceTag); // true

var newPriceTag = prices.every((value, index, array) => {
  return value > 200;
});

console.log(newPriceTag); // false

// 🎯 Note: every() method ka use hm jb karty hen jab ham dakhna chahty hen ky kiya pury array ky sary elements hamari given condition ko satisfy kar raha he ya nhi agar 1 bhi element aesa mil gaya jo ky hamari condition ko satisfy nhi kar raha he to false return hoga or agar sary elements hi hamari condition sy match kar rahy hen to true return hoga.

// ✍🏻 map() method

var prices = [200, 300, 350, 400, 500, 600];

var newPriceTag = prices.map((value, index, array) => {
  return value < 400;
});

console.log(newPriceTag); // [true, true, true, false, false, false]

// 👉🏻 Copying Elements of Array
//   ✍🏻 slice() method

let sliceArr = ["Abc", "Def", "Ghi", "Jkl"];

var newsliceArr = sliceArr.slice(1, 3);

console.log(newsliceArr); // ['Def', 'Ghi']

var newsliceArr = sliceArr.slice(4, 3);

console.log(newsliceArr); // []

// ✍🏻 concat() method

var fruits = ["Apple", "Banana", "Orange"];

var copyFruits = fruits.concat();

console.log(copyFruits); // ['Apple', 'Banana', 'Orange']

var vegetables = ["Carrot", "Potato", "Tomato"];
var mixed = fruits.concat(vegetables);

console.log(mixed); // ['Apple', 'Banana', 'Orange', 'Carrot', 'Potato', 'Tomato']

var moreFruits = fruits.concat("Mango", ["PineApple", "Kiwi"]);

console.log(moreFruits); // ['Apple', 'Banana', 'Orange', 'Mango', 'PineApple', 'Kiwi']

// ✍🏻 spread operator

var fruits = ["Apple", "Banana", "Orange"];

var copyFruits = [...fruits];

console.log(copyFruits); // ['Apple', 'Banana', 'Orange']

var vegetables = ["Carrot", "Potato", "Tomato"];
var mixed = [...fruits, ...vegetables];

console.log(mixed); // ['Apple', 'Banana', 'Orange', 'Carrot', 'Potato', 'Tomato']

// 👉🏻 Merging Arrays and Flat an Arrays

// ✍🏻 concat() method

var fruits = ["Apple", "Banana", "Orange"];

var vegetables = ["Carrot", "Potato", "Tomato"];
var mixed = fruits.concat(vegetables);

console.log(mixed); // ['Apple', 'Banana', 'Orange', 'Carrot', 'Potato', 'Tomato']

var moreFruits = fruits.concat("Mango", ["PineApple", "Kiwi"]);

console.log(moreFruits); // ['Apple', 'Banana', 'Orange', 'Mango', 'PineApple', 'Kiwi']

// ✍🏻 spread operator ( ... )

var fruits = ["Apple", "Banana", "Orange"];

var vegetables = ["Carrot", "Potato", "Tomato"];
var mixed = [...fruits, ...vegetables];

console.log(mixed); // ['Apple', 'Banana', 'Orange', 'Carrot', 'Potato', 'Tomato']

// ✍🏻 flat() method

var multiArray = [
  ["Abc", ["Def", "Ghi"]],
  ["Jkl", ["Nmo", "Pqr"]],
  ["Stu", ["Vwx", ["Yz", "AbcXyz"]]],
];

/*

🎯 save Auto Align kar data he is liye samajhny ky liye aesy likhi he array

var multiArray = 
[
  ["Abc", 
    ["Def", "Ghi"]
  ],
  ["Jkl", 
    ["Nmo", "Pqr"]
  ],
  ["Stu", 
    ["Vwx", 
      ["Yz", "AbcXyz"]
    ]
  ],
]

*/

console.log(multiArray.flat()); /* 👇🏻 Answer

[
  "Abc", 
  ["Def","Ghi"], 
  "Jkl", 
  ["Nmo", "Pqr"], 
  "Stu", 
  ["Vwx", 
    ["Yz", "AbcXyz"]
  ]
]

*/

console.log(multiArray.flat(2)); /* 👇🏻 Answer

[
  "Abc", 
  "Def",
  "Ghi", 
  "Jkl", 
  "Nmo", 
  "Pqr", 
  "Stu", 
  "Vwx", 
  ["Yz", "AbcXyz"]
]

*/
console.log(multiArray.flat(Infinity)); /* 👇🏻 Answer

["Abc", "Def","Ghi", "Jkl", "Nmo", "Pqr", "Stu", "Vwx", "Yz", "AbcXyz"]

*/

// ✍🏻 reduce() method

let multiArr = [
  ["Abc", "Def", "Ghi"],
  ["Jkl", "Mno", ["Pqr", "Stu"]],
  ["Vwx", "Yz", "AbcXyz"],
];

/*

🎯 save Auto Align kar data he is liye samajhny ky liye aesy likhi he array

let multiArr = 
[
  ["Abc", "Def", "Ghi"],
  ["Jkl", "Mno", 
    ["Pqr", "Stu"]
  ],
  ["Vwx", "Yz", "AbcXyz"],
];

*/

let multireduce = multiArr.reduce((accumulator, value, index, array) => {
  return accumulator.concat(value);
});

console.log(multireduce); /* 👇🏻 Answer

[
  "Abc", 
  "Def",
  "Ghi", 
  "Jkl", 
  "Nmo", 
  ["Pqr", "Stu"], 
  "Vwx", 
  "Yz", 
  "AbcXyz"
]

*/

// 👉🏻 Converting Array

// ✍🏻 in Empty Array

// 🎯 1st way

var fruits = ["Apple", "Banana", "Orange"];

fruits = [];

console.log(fruits); // []

// ✍🏻 2nd way

var fruits = ["Apple", "Banana", "Orange"];

fruits.length = 0;

console.log(fruits); // []

// ✍🏻 toString() method

let toStringArr = ["Abc", "Def", "Ghi", "Jkl"];

console.log(toStringArr.toString()); // Abc,Def,Ghi,Jkl

// ✍🏻 join() method

let joinArr = ["Abc", "Def", "Ghi", "Jkl"];

console.log(joinArr.join(" ")); // Abc Def Ghi Jkl

// ✍🏻 entries() Method

// 🎯 entries() method ko hm array ko object me convert karny ky liye bhi use karty hen

var array = ["abc", "def", "ghi", "jkl", "mno"];

var arrayToObject = Object.fromEntries(array.entries());

console.log(arrayToObject); // {0: 'abc', 1: 'def', 2: 'ghi', 3: 'jkl', 4: 'mno'}

// 👉🏻 Additional Methods

//   ✍🏻 map() method  ( revise )
//   ✍🏻 filter() method ( revise )

var array1 = [1, 4, 9, 16, 25];

var newArray1 = array1.map((value, index, array) => {
  return value > 9;
});

console.log(array1); // [1, 4, 9, 16, 25]
console.log(newArray1); // [false, false, false, true, true]

var arr = [2, 3, 4, 5, 6, 7, 8, 9];

var newArr = arr
  .map((value) => {
    return value * 2;
  })
  .filter((value) => {
    return value > 10;
  });

console.log(newArr); // [12, 14, 16, 18]

// ✍🏻 fill() method

var fillArr = [0, 1, 2, 3, 4];

console.log(fillArr.fill()); // [ undefined, undefined, undefined, undefined, undefined ]

var fillArr = [0, 1, 2, 3, 4];

console.log(fillArr.fill("Abc")); // ['Abc', 'Abc', 'Abc', 'Abc', 'Abc']

var fillArr = [0, 1, 2, 3, 4];

console.log(fillArr.fill("Abc", 2)); // [0, 1, 'Abc', 'Abc', 'Abc']

var fillArr = [0, 1, 2, 3, 4];

console.log(fillArr.fill("Abc", 1, 3)); // [0, 'Abc', 'Abc', 3, 4]

var fillArr = [0, 1, 2, 3, 4];

console.log(fillArr.fill("Abc", 1, -1)); //  [0, 'Abc', 'Abc', 'Abc', 4]

// ✍🏻 reverse() method

let reverseArr = ["Abc", "Def", "Ghi", "Jkl"];

console.log(reverseArr.reverse()); // ['Jkl', 'Ghi', 'Def', 'Abc']
