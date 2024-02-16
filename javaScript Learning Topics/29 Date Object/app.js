var x = new Date(2013, 11, 25, 10, 23, 33, 4);

// (Year,Month,Day,Hours,Minutes,Seconds,MiliSecond)

var x = new Date("October 13, 2018 11:12:33");

console.log(x.getDate());
console.log(x.getDay());
console.log(x.getFullYear());
console.log(x.getHours());
console.log(x.getMilliseconds());
console.log(x.getMinutes());
console.log(x.getMonth());
console.log(x.getSeconds());
console.log(x.getTime());
console.log(x.toDateString());
console.log(x.valueOf());
console.log(x.toLocaleString());

x.setDate(31);
x.setFullYear(2024);
x.setHours(23);
x.setMilliseconds(1000);
x.setMinutes(59);
x.setMonth(0);
x.setSeconds(59);
console.log(x);

x.setTime(1234567876543);

console.log(x);

var currentDate = new Date();

var after50Days = new Date();

after50Days.setDate(currentDate.getDate() + 50);

console.log(currentDate);
console.log(after50Days);
