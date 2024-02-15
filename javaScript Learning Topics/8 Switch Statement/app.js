// if input = 1, "y", "yes"  output = Continue...

// if input = 0, "n", "no"  output = End...

// 👉🏻 revising If Else

// agar hm ye program if else sy likhen to is tra hoga

// ✍🏻 1st way

/*

let input;

input = "";

if (input === 1) {
  console.log("Continue...");
} else if (input === "y") {
  console.log("Continue...");
} else if (input === "yes") {
  console.log("Continue...");
} else if (input === 0) {
  console.log("End...");
} else if (input === "n") {
  console.log("End...");
} else if (input === "no") {
  console.log("End...");
} else {
  console.log("invalid input");
}

*/

// ✍🏻 2nd Way

// let input;

// input = "";

// if (input === 1 || input === "y" || input === "yes") {
//   console.log("Continue...");
// } else if (input === 0 || input === "n" || input === "no") {
//   console.log("End...");
// } else {
//   console.log("Invalid Input");
// }

// 👉🏻 Switch

// ✍🏻 1st Way

/*

let input;

input = "";

switch (
  input // switch ky parantheses me wo variable likhna he jis ko check karana he
) {
  case 1: // ye Condition ye like if(input === 1)
    console.log("Continue...");
    break;

  case "y":
    console.log("Continue...");
    break;

  case "yes":
    console.log("Continue...");
    break;

  case 0:
    console.log("End...");
    break;

  case "n":
    console.log("End...");
    break;

  case "no":
    console.log("End...");
    break;

  default:
    console.log("Invalid Input");
    break;
}

*/

// ✍🏻 2nd Way

let input;

input = 2;

switch (input) {
  case 1:
  case "y":
  case "yes":
    console.log("Continue...");
    break;

  case 0:
  case "n":
  case "no":
    console.log("End...");
    break;

  default:
    console.log("Invalid Input");
    break;
}
