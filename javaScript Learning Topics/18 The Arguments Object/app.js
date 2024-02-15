function check() {
  /*
  
  functions me hamen bydefault hi arguments ki array milti he jis ko hm access kar sakty hen
  
  */

  console.log(arguments); // [54, 32, 77, 44]
  console.log(arguments[2]); // 77
}

check(54, 32, 77, 44);

function add() {
  if (arguments.length === 0) {
    console.log("No Arguments Found");
  } else if (arguments.length === 1) {
    console.log(`Your Argument is the answer`);
  } else {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }

    console.log(sum);
  }
}
add(); // No Arguments Found
add(54); // Your Argument is the answer
add(54, 32); // 86
add(54, 32, 77); // 163
add(54, 32, 77, 44); // 207

// hm function ko variable me bhi rakh sakty hen phir us variable ko function ki tra use kar sakty hen

let addition = add;

addition(2, 4, 2, 5, 2); // 15
