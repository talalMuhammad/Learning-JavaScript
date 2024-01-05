const accountId = 12345;
let accountEmail = "ahmed@example.com";
var accountPassword = "67890";
userCity = "Karachi";

// accountId = 345; // changes not allowed

/*

Prefer not to use var
because of issue in block scope and functional scope

*/

accountEmail = "muhammad@example.com";
accountPassword = "00000";
userCity = "Islamabad";

// console.log(accountId);

let accountVerified; // undefined

console.table([
  accountId,
  accountEmail,
  accountPassword,
  userCity,
  accountVerified,
]);
