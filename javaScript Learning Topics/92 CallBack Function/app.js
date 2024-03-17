let hi = () => {
  console.log("Hi...");
};

let hello = () => {
  console.log("Hello...");
};

let add = (num1, num2, callBack) => {
  console.log(num1 + num2);

  callBack();
};

add(12, 12, hi);

add(12, 12, hello);

add(12, 12, () => {
  console.log("bye...");
});
