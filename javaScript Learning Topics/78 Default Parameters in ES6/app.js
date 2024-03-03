let userAge = (getUserAge) => {
  return console.log(getUserAge);
};

userAge(17); // 17

userAge(); // undefined

/*

ab hm ny function banaya agar hm function call karty time argument pass nhi karen gy to hamen undefined mily ga but hm chahty hen ky 

agar user apni age nhi likhy to hamen undefined na mil ky koi default value ho wo mily to wo is tra karty hen

*/

let user = (getUser = "Guest User") => {
  // ab agar user apna name nhi likhy ga to bydefault wo guest user return kary ga

  return console.log(getUser);
};

user("Ahmed"); // Ahmed
user(); // Guest
