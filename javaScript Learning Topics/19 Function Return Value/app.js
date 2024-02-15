function add(a, b) {
  console.log(a + b); // 6
}

var c = add(2, 4);

console.log(c); // undefined

/* 

🎯 opr wala function hm ny 2 numbers ko add karny ky liye likha he but hm chahty hen ky jo bhi hamara output ho wo c me bhi save hojaye to aesa nhi hoga balky c me undefined hoga 
too 
yaha entry hoti he return ki 
return ka consept hi ye hota he ky jb hamara function pura execute hojaye ga to kuch return kary ga

*/

function add(a, b) {
  return a + b;
}

var c = add(2, 4);

console.log(c); // 6

//

function add(a, b) {
  var d = a + b;
  return d;
}

var c = add(2, 4);

console.log(c); // 6

//

function fun1(a, b) {
  d = a - b;
  return 123;
}

var c = fun1(5, 2);

console.log(c); // 123

//

function fun2(a, b) {
  d = a - b;
  return 1000;
  alert("Nhi Show hoga");
}

var c = fun2(5, 2);

console.log(c); // 1000

// ✍🏻 Conditional Return

function compair(a, b) {
  if (a < b) {
    return `${b} is grater then ${a}`;
  } else if (a > b) {
    return `${a} is grater then ${b}`;
  } else {
    return `${a} and ${b} are equal`;
  }
}

var c = compair(23, 15);

console.log(c); // 23 is grater then 15

var c = compair(12, 54);

console.log(c); // 54 is grater then 12

var c = compair(33, 33);

console.log(c); // 33 and 33 are equal
