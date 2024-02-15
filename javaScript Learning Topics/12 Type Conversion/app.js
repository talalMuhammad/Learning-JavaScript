/*

string conversion

21 => "21"
true => "true"
false => "false"
undefined => "undefined"
null => "null"

number Conversion

"" => 0
"asdf" => NaN
NaN => NaN
undefined => NaN
null => 0
true => 1
false => 0

boolean Conversion

"" => false
"asdf" => true
null => false
NaN => false
0 => false
1,2,3... => true
undefined => false


*/

// 👉🏻 Auto JS type Conversion

let a = 12 + null;

console.log(a); // 12
console.log(typeof a); // number

let b = 12 + "null";

console.log(b); // 12null
console.log(typeof b); // string

let c = "5" - "3";

console.log(c); // 2
console.log(typeof c); // number

let d = "5" * "3";

console.log(d); // 15
console.log(typeof d); // number

let e = "5" / "3";

console.log(e); // 1.6666666666666667
console.log(typeof e); // number

let f = "5" % "3";

console.log(f); // 2
console.log(typeof f); // number

let g = 5 - "no";

console.log(g); // NaN
console.log(typeof g); // number

// 👉🏻 Manually type Conversion

/*

✍🏻 1. String()
✍🏻 2. Number()
✍🏻 3. Boolean()

*/

// ✍🏻 1. String()

let h = 4;

console.log(h); // 4
console.log(typeof h); // number

let newH = String(h);

console.log(newH); // 4
console.log(typeof newH); // string

let i = true;

console.log(i); // true
console.log(typeof i); // boolean

let newI = String(i);

console.log(newI); // true
console.log(typeof newI); // string

// ✍🏻 2. Number()

let j = "32";

console.log(j); // 32
console.log(typeof j); // string

let newJ = Number(j);

console.log(newJ); // 32
console.log(typeof newJ); // number

let k = "Yes";

console.log(k); // Yes
console.log(typeof k); // string

let newK = Number(k);

console.log(newK); // NaN
console.log(typeof newK); // Number

let l = true;

console.log(l); // true
console.log(typeof l); // boolean

let m = false;

console.log(m); // false
console.log(typeof m); // boolean

let newL = Number(l);

console.log(newL); // 1
console.log(typeof newL); // number

let newM = Number(m);

console.log(newM); // 0
console.log(typeof newM); // number

// ✍🏻 3. Boolean()

let n = "true";

console.log(n); // true
console.log(typeof n); // string

let newN = Boolean(n);

console.log(newN); // true
console.log(typeof newN); // Boolean
