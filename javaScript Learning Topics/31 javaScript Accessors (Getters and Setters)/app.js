/*

jb hm chahty hen ky koi bhi property agar object sy nikly to user ko wo manuplate ho ky mily to hm getter function ka use karty hen


*/

var obj = {
  name: "Ahmed",
  msg: "abc def ghi jkl",
};

console.log(obj.msg);

// ab hamary pas condition he msg ko capital latters me karna he

var obj = {
  name: "Ahmed",
  msg: "abc def ghi jkl",
};

console.log(obj.msg.toUpperCase()); // ABC DEF GHI JKL

// ab hamary pas condition he ky console me changing nhi karni

var obj = {
  name: "Ahmed",
  msg: "abc def ghi jkl",

  getMsg() {
    return this.msg.toUpperCase();
  },
};

console.log(obj.getMsg()); // ABC DEF GHI JKL

// ab hamary pas condition he ky hamen console me function call nhi karna balky property call karen

var obj = {
  name: "Ahmed",
  msg: "abc def ghi jkl",

  get getMsg() {
    return this.msg.toUpperCase();
  },
};

console.log(obj.getMsg); // ABC DEF GHI JKL

/*

jb bhi hm chahty hen ky object me koi bhi value aye to wo manuplate ho kar hi aye to us ky liye hm setter function ka use karty hen

*/

var obj = {
  name: "Muhammad",

  set getMsg(getValue) {
    this.msg = getValue.toUpperCase();
    return this.msg;
  },
};

obj.getMsg = "abcd efgh ijkl mnop";

console.log(obj);

/*

hm ny getMsg small abc me likha. 

phir object me isi name sy setter ka function banaya jis ky parameter me hm ny getMsg ki value get ki
phir object me properties jis tra add karty hen us tra hm ny object me msg name ki property add ki getvalue sy msg ki value li or us ko upper case kar ky msg me save kara diya 

*/
