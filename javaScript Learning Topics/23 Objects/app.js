/*

Objects ko hm data save karny ky liye use karty he

object me kisi bhi tra ka data save kara sakty hen following object me hm ny Object me,
  * object me object, 
  * function, 
  * string, 
  * number, 
  * boolean, 
  * Array ko,

sb ko save karaya he 😜
*/

let myFakeInfo = {
  name: {
    firstName: "Muhammad",
    lastName: "Ahmed",
    fullName: () => {
      return `${myFakeInfo.name.firstName} ${myFakeInfo.name.lastName}`;
    },
  },
  age: 18,
  collegeId: 34322,
  collegePremiemAccount: true,
  courseBooks: ["JavaScript", "React"],
  address: {
    country: "Pakistan",
    city: "Karachi",
    area: "DHA Fase 6",
  },
};

console.log(myFakeInfo);
console.log(myFakeInfo.name.fullName());
