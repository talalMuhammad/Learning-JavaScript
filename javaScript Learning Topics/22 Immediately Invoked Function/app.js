let string = "Hello";

/*

agar koi function hm ny 1 bar hi chalana he to hm us function ko memory me save karny ky bjaye is tra anonymous function bana ky immediately invoked kara daty hen 

  Note: koi aesa variable jo hm ny global me pehly sy define kiya hva he us variable ko hm is function me use kar sakty hen, 
    ya phir
  usi name ka variable dobara bhi bana sakty hen

*/

(function () {
  let string = "World";
  console.log(string);
  alert(string);
})();

let msg = "Hello My Script";

function greet() {
  console.log(msg);
}

greet();
