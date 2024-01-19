// Strings

// console.log("hello"); // hello
// console.log("hello"); // hello

// console.log("hello" + "world"); // helloworld

// const name = "Ahmed";

// const age = 18;

// console.log(name + age + " value"); // Ahmed18 value

// console.log(`Hello my name is ${name} and my age is ${age}`); // Hello my name is Ahmed and my age is 18

const gameName = new String("Ahmed");

// console.log(gameName[0]); // A
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 5

// console.log(gameName.toUpperCase()); // AHMED

// console.log(gameName.charAt(3)); // E
// console.log(gameName.indexOf("e")); // 3

const newString = gameName.substring(0, 4);

// console.log(newString); // Ahme

const anotherString = gameName.slice(0, 4);
// console.log(anotherString); // Ahme

const newStringOne = "       Ahmed         ";

// console.log(newStringOne + 1); //       Ahmed         1
// console.log(newStringOne.trim() + 1);// Ahemd1

const website = "https://www.facebook.com";

// console.log(website.replace("facebook", "google")); // https://www.google.com
console.log(website.includes("google")); // false

console.log(website.split(".")); // [ 'https://www', 'facebook', 'com' ]
