/*

In This Chapter We Learn

* Templete Litrals

* Escape Characters or Speical Characters

* length Property

* [*] Square Brackets Access

* ConCatination with
    * comma ","
    * plus "+"
    * concat()

* Case Sensitivity of JavaScript
    * toUpperCase() 
    * toLowerCase()

* Methods for Copy String
    * substr()
    * substring()
    * slice()

* Methods for Searching in String
    * indexOf()
    * lastIndexOf()
    * includes()
    * charAt()
    * search()

* Remove Extra Spaces
    * trim()
    * trimStart()
    * trimEnd()

* replacing any words in string
    * replace()

* for validation and appling condition
    * startsWith()
    * endsWith()

* Converting String to Array
    * split()

* Conversion in String
    * toString()
    * String(***)

* Additional Methods
    * charCodeAt()
    * match()
    * repeat()



*/

// ✍🏻 Templete Litrals

// let myName = "Muhammad Ahmed";

// let greet = `Hello ${myName}`;

// console.log(greet); // Hello Muhammad Ahmed

// ✍🏻 Escape Charactors or speical Charactors

// let str = "The Q\nuick\" Br\tow'n \\Fox";

// console.log(str);

let myFirstName = "Muhammad Ahmed";

let myLastName = "Farooq";

// ✍🏻 length Property

console.log(myFirstName.length); // 14

// ✍🏻 Access with square Brackets

console.log(myFirstName[3]); // a

// ✍🏻 ConCatination with
// ✍🏻 comma ","
// ✍🏻 plus "+"
// ✍🏻 concat()

console.log(myFirstName, myLastName); // Muhammad Ahmed Farooq

console.log(myFirstName + myLastName); // Muhammad AhmedFarooq

console.log(myFirstName + " " + myLastName); // Muhammad Ahmed Farooq

console.log(myFirstName.concat(myLastName)); // Muhammad AhmedFarooq

console.log(myFirstName.concat(" ").concat(myLastName)); // Muhammad Ahmed Farooq

console.log(myFirstName.concat(" ", myLastName)); // Muhammad Ahmed Farooq

// ✍🏻 javaScript is case Sencitive
// ✍🏻 toUpperCase()
// ✍🏻 toULowerCase()

console.log("abc" === "abc"); // true
console.log("abc" === "Abc"); // false

let caseExp = "abCDef";
let caseExp2 = "UVwxYZ";

console.log(caseExp.toUpperCase()); // ABCDEF
console.log(caseExp2.toLowerCase()); // uvwxyz

// ✍🏻 Methods for Copy String
// ✍🏻 substr()
// ✍🏻 substring()
// ✍🏻 slice()

let str1 = "This is JavaScript tutorial";

let str1Substr = str1.substr(8, 10);

console.log(str1Substr); // JavaScript

let str1Substring = str1.substring(8, 18);

console.log(str1Substring); // JavaScript

// ✍🏻 slice()

let sliceExp = "This is an Example for slice()";

let sliceExpUse = sliceExp.slice(11);

console.log(sliceExpUse); // Example for slice()"

let sliceExpUse2 = sliceExp.slice(23, 28);

console.log(sliceExpUse2); // slice

// ✍🏻 Methods for Searching in String
// ✍🏻 indexOf()
// ✍🏻 lastIndexOf()
// ✍🏻 includes()
// ✍🏻 charAt()
// ✍🏻 search()

// ✍🏻 indexOf()
let str1IndexOf = str1.indexOf("tutorial");

console.log(str1IndexOf); // 19

let str1IndexOf2 = str1.indexOf("is", 3);

console.log(str1IndexOf2); // 5

let str1IndexOf3 = str1.indexOf("xyz");

console.log(str1IndexOf3); // -1

// ✍🏻 lastIndexOf()

let str1LastIndexOf = str1.lastIndexOf("t");

console.log(str1LastIndexOf); // 21

let str1LastIndexOf2 = str1.lastIndexOf("t", 20);

console.log(str1LastIndexOf2); // 19

let str1LastIndexOf3 = str1.lastIndexOf("xyz");

console.log(str1LastIndexOf3); // -1

// ✍🏻 includes()

let includesExp = "this is best example for includes";

let includesExpUse = includesExp.includes("includes");

console.log(includesExpUse); // true

// ✍🏻 charAt()

let charAtExp = "This is an Example for charAt";

let charAtExpUse = charAtExp.charAt(3);

console.log(charAtExpUse); // s

// ✍🏻 search()

let searchExp = "This is an Example for search()";

let searchExpUse = searchExp.search("Exa");

console.log(searchExpUse); // 11

let searchExpUse2 = searchExp.search("xyz");

console.log(searchExpUse2); // -1

// ✍🏻 Remove Extra Spaces
// ✍🏻 trim()

let str2 = "            This is        an Example         ";

let str2Trim = str2.trim();

console.log(str2Trim); // This is        an Example

// ✍🏻 replacing any words in string
// ✍🏻 replace()

let replaceExp = "This is example for replace";

let replaceExpUse = replaceExp.replace("replace", "REPLACE");

console.log(replaceExpUse); // This is example for REPLACE

// ✍🏻 for validation and appling condition
// ✍🏻 startsWith()
// ✍🏻 endsWith()

// ✍🏻 startsWith()
let startsWithExp = "This is an Example for startsWith()";

let startsWithExpUse = startsWithExp.startsWith("This");

console.log(startsWithExpUse); // true

let startsWithExpUse2 = startsWithExp.startsWith("Example");

console.log(startsWithExpUse2); // false

// ✍🏻 endsWith()

let endsWithExp = "This is an Example for endsWith()";

let endsWithExpUse = endsWithExp.endsWith("At");

console.log(endsWithExpUse); // true

// ✍🏻 Converting String to Array
// ✍🏻 split()

let splitExp = "This is an Example for split()";

let splitExpUse = splitExp.split(" ");

console.log(splitExpUse); // ['This', 'is', 'an', 'Example', 'for', 'split()']

// ✍🏻 Conversion in String
// ✍🏻 toString()

let toStringExp = 1234;

let toStringExpUse = toStringExp.toString();

console.log(toStringExpUse); // 1234
console.log(typeof toStringExpUse); // string

// ✍🏻 Additional Methods
// ✍🏻 charCodeAt()
// ✍🏻 match()
// ✍🏻 repeat()

// ✍🏻 charCodeAt()

let charCodeAtExp = "This is an Example for charCodeAt";

let charCodeAtExpUse = charCodeAtExp.charCodeAt(3);

console.log(charCodeAtExpUse); // 115

// ✍🏻 match()

let matchExp = "This is an Example for match()";

let matchExpUse = matchExp.match("At");

console.log(matchExpUse); // ['At', index: 27, input: 'This is an Example for charAt', groups: undefined]
// ✍🏻 repeat()

let repeatExp = "This is an Example for repeat()";

let repeatExpUse = repeatExp.repeat(3);

console.log(repeatExpUse); // This is an Example for repeat()This is an Example for repeat()This is an Example for repeat()
