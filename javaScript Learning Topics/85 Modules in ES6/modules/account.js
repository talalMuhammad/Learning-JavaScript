import { infoFunction } from "./info.js"; // hm 1 module ko 2ry module me bhi use kar sakty hen

// agar hm default function ko export kar rahy hen to hamen us ka name define karny ki need nhi he wo hm import karaty hvy define kar sakty hen

export default () => {
  console.log("Account Default Function");
};

let accountNumber = 25432432;

let accountType = "Saving";

export let withdraw = () => {
  console.log("Withdraw Function");
};

export let deposite = () => {
  console.log("deposite Function");
};

export let cook = () => {
  console.log("Account Cooking...");
};

export { accountNumber, accountType };

/*

hm alag alag likh ky bhi export kar sakty hen or is tra 1 sath bhi export kar sakty hen

*/

infoFunction();
