// ✍🏻 1. String

let str1 = "Hel'lo";

let str2 = 'Hel"lo';

let str3 = 'Wor"ld';

console.log(str1); // Hel'lo
console.log(typeof str1); // string

console.log(str2); // Hel"lo
console.log(typeof str2); // string

console.log(str3); // Wor"ld
console.log(typeof str3); // string

// ✍🏻 2. Number

let num1 = 10;

let num2 = 5;

console.log(num1); // 10
console.log(typeof num1); // number

console.log(num2); // 5
console.log(typeof num2); // number

// ✍🏻 3. Boolean: true / false

let boo1 = num1 > num2;
let boo2 = num2 > num1;

console.log(boo1); // true
console.log(typeof boo1); // boolean

console.log(boo2); // false
console.log(typeof boo2); // boolean

// ✍🏻 4. Undefined

let unde1;

console.log(unde1); // undefined
console.log(typeof unde1); // undefined

let unde2 = "";

console.log(unde2); // its not undefined // output: (empty string)

// ✍🏻 5. null

let n = null;

console.log(n); // null
console.log(typeof n); // object

/*

 Note: type of null return karta he object

 is ko 1 historical mistake mana ja chuka he, javascript ko jb start me types di ja rahi thi jesy ky 123 ko kaha gya number "abc" ko string isi tra null ko object kaha gya, is mistake ko itna asani sy thik nhi kiya ja sakta kyu ky jis jis code me type of ko object ki tra treat kiya gya he wo sara bekar hosakta he is ki type change karny sy halanky kafi bar ye sugges kiya gya he ky typeof null ko null return dy dena chahye but phir wohi bat ky is ka type change karny sy lagacy code ko nuksan hosakta he isi liye is ko change karna itna asan nhi he 😂😂😂

*/

// ✍🏻 6. BigInt

let big = 12345678901234567890;
let big2 = 12345678908765432n;

console.log(big); // 12345678908765430
console.log(typeof big); // number

/*

javascript me numbers ki 1 limit he, matlab agar number bohot zyada bara ho to us pe math ky koi formulaz use karny pr hamara output wrong aa sakta he is liye bigint ko interduce karaya gya

*/

console.log(big2); // 12345678908765432n
console.log(typeof big2); // bigint

// ✍🏻 7. Symbol

let sym1 = Symbol("abc");

let sym2 = Symbol("abc");

console.log(sym1); // Symbol("abc")
console.log(typeof sym1); // symbol

console.log(sym2); // Symbol("abc")
console.log(typeof sym2); // symbol

console.log(sym1 === sym2); // false // because symols are unique. these are looking same but they are not.😜

// ✍🏻 Array

let arr = ["Tom", 18, false];

console.log(arr); // ['Tom', 18, false]
console.log(typeof arr); // object

// ✍🏻 Object

let obj = {
  name: "Ahmed",
  age: 13,
  isLogged: true,
};

console.log(obj); // {name: 'Ahmed', age: 13, isLogged: true}
console.log(typeof obj); // object
