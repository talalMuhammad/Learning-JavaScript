var student1 = {
  firstName: "Muhammad",
  lastName: "Ahmed",
  age: 18,
  enrolledClass: 8,
};

function Student(firstName, lastName, age, enrolledClass) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.enrolledClass = enrolledClass;
}

var student2 = new Student("Muhammad", "Ehsan", 25, 12);

console.log(student2);

student2.address = "Karachi";

console.log(student2);
