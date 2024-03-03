var countWithVar = 1;

let countWithLet = 3;

const countWithConst = 5;

console.log(countWithVar); // 1
console.log(countWithLet); // 3
console.log(countWithConst); // 5

console.log(window.countWithVar); // 1
console.log(window.countWithLet); // undefined
console.log(window.countWithConst); // undefined

/*

var sy jo hm variable declear karty hen wo global variable ban jata he or window ka part bhi bn jata he isi liye jb hm ny window dot countWithVar likha to hamen value mil gai

but jb hm let ya const sy variable declear karty hen to wo window ka part nhi banta or global variable nhi banta isi liye window dot kar ky jb hm ny check kiya to hamen undefined mila

scope ki bat hm agy karen gy

*/

var myName = "Muhammad";

console.log(myName); // Muhammad

var myName = "Ahmed";

console.log(myName); // Ahmed

/*

hm ny var sy myName likha. output karaya. value hamen mil gai 

hm ny phir dobara myName ko var sy declear kiya value change kar di andar ki. output karaya koi error nhi mila value bhi mil gai

but let or const ky sath aesa nhi he

*/

let myAge = 13;

console.log(myAge);

// let myAge = 16;

// console.log(myAge); // Error: Identifier "myAge" has already been declared

myAge = 16;

console.log(myAge); // 16

/*

hm ny let sy myAge likha. output karaya. value hamen mil gai 

hm ny phir dobara myAge ko let sy declear kiya value change kar di andar ki. output karaya koi error aya ky identifier "myAge" to ab pehly hi declear kar chuky ho dobara isi name sy naya variable kyu bana rahy ho

han agar hm ny value change karni he to wo hm kar sakty hen jesa ky hm ny ki bhi he

matlab hm same name sy naya variable nhi bana sakty but purany waly ko update zarur kar sakty hen or jitni bar marzi kar sakty hen

*/

const teacherName = "Muhammad";

console.log(teacherName); // Muhammad

// const teacherName = "Ahmed";

// console.log(teacherName); // Error: Identifier "teacherName" has already been declared

teacherName = "Ahmed";

console.log(teacherName); // Error: Assignment to constant variable

/*

hm ny const sy teacherName likha. output karaya. value hamen mil gai 

phir hm ny dobara const sy teacher name declear kiya hamen error mila ky hm teacher name ko dobara declear nhi kar sakty

phir hm ny teacherName ki value change karny ki koshish ki to phir error mila ky ap constant variable ki value bhi change nhi kar sakty 

ye hm isi liye use karty hen jb hamen pata ho ky ab hm ny galti sy bhi is variable ki value dobara sy change nhi kar for example hamary code me auther ka name ho sakta he hamara khud ka name ho sakta he jo hm chahen gy ky koi agar is ko change bhi kary to error aye

*/
