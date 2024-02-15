// if else condition

// 1 condition check at a time

// let age = 18;

// // let age = 16;

// if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("You cant Vote");
// }

// 2 condition check at a time

// let age = 18;

// // let age = 16;

// // let hasVoterCard = true;

// let hasVoterCard = false;

// if (age >= 18 && hasVoterCard) {
//   console.log("You can Vote");
// } else {
//   console.log("You cant Vote");
// }

// else if ky sath condition

// let age = 18;

// let age = 16;

// let hasVoterCard = true;

// // let hasVoterCard = false;

// if (age >= 18 && hasVoterCard) {
//   console.log("You can Vote");
// }
// if (age >= 18 && !hasVoterCard) {
//   console.log("Please get your voter id card");
// } else {
//   console.log("You cant Vote");
// }

// nested if else

// let age = 18;

let age = 16;

let hasVoterCard = true;

// let hasVoterCard = false;

if (age >= 18) {
  if (hasVoterCard) {
    console.log("You can Vote");
  } else {
    console.log("Please get your voter id card");
  }
} else {
  console.log("You cant Vote");
}

// ternary Operator

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Your Status is online");
} else {
  console.log("Your Status is offline");
}

let option = isLoggedIn ? "Your Status is online" : "Your Status is offline";

console.log(option);

// nullesh coleging operator

let user;

// user = "Ahmed";

console.log(user ?? "Guest User");
