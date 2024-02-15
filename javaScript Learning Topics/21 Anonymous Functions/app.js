function show() {
  console.log("Hello");
}
show();

// Function Expression

let show1 = function () {
  console.log("Show 1");
};

show1();

// setTimeout(FunctionName, timeInMiliSeconds);

setTimeout(show1, 3000);

setTimeout(function () {
  console.log("6000 mili Seconds");
}, 6000);

/*

javaScript hamen setTimeout() ka 1 method data he jis me 1st argument me hm ny function dana hota he or 2nd me time (miliSeconds) me dana hota he hm koi function bana ky us function ka name bhi setTimeout(*,2000) ky first argument me da skty hen leken jb hm ny is function ko aagar 1 bar hi use karna he to memory me save karny ka kiya faeda to is ky liye hm use karty hen anonymous function 

*/
