function Student(firstName, lastName, studentAge, studentClass) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.studentAge = studentAge;
  this.studentClass = studentClass;
}

var student1 = new Student("Muhammad", "Ahmed", 18, 10);

var student2 = new Student("Muhammad", "Ghani", 21, 10);

console.log(student1, student2);

Student.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(student1);
console.log(student1.fullName());

Student.prototype.schoolName = "XYZ School";

console.log(student2);
console.log(student2.schoolName);
