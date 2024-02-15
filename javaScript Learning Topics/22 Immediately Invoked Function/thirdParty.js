/*

ab for Example hamary pas javaScript ki 1 sy zyada files hen or hm nhi janty ky me jo variable ka name likh raha hu wo pehly bhi use hva he to agar aesa hoga to error aye ga to us error sy bachny ky liye bhi hm us ko immediately invoked function bana sakty hen 

ab ye same msg name ka variable hamary pas app.js me bhi bana he or greet name ka function bana he 2no ko differentiate karny ky liye hm ny msg ka text change kar diya he ta ky pta chal jaye ky konsa output thirdParty.js ka he or konsa output app.js ka he

ye dono function chelen gy

*/

(function () {
  let msg = "Hello Third Party";

  function greet() {
    console.log(msg);
  }
  greet();
})();
