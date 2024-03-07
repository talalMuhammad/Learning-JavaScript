// agar hm default function ko export kar rahy hen to hamen us ka name define karny ki need nhi he wo hm import karaty hvy define kar sakty hen

export default () => {
  console.log("User Default Function");
};

export let userName = "Ahmed";

let userAge = 16;

export let code = () => {
  console.log("User Coding...");
};

let cook = () => {
  console.log("User Cooking...");
};

export { userAge, cook };
