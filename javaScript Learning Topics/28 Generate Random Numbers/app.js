var x = Math.random();

console.log(x);

// Q: Genrate random Numbers Between 15 to 30

function getRandom(min, max) {
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  //                      0        *  (15 - 10  + 1)  +  10
  return x;
}

console.log(getRandom(10, 15));
