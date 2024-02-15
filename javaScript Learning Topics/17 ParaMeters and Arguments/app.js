function MultiplyTable(getNum) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${getNum} x ${index} = ${getNum * index}`);
  }
}

MultiplyTable(3);
console.log("Next");
MultiplyTable(5);

function add(num1, num2) {
  console.log(num1 + num2);
}

add(3, 5); // 8
add(23, 64); // 87
