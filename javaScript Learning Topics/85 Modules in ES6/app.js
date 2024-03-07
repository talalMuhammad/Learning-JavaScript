import { code, default as userDefault } from "./modules/user.js";

// hm is tra comma dal ky bhi 1 file sy sari chezen import kar sakty hen

// or "as" keyword dy ky name change kar sakty hen us ka jis ko hm import kara rahy hen ya yahan default function he to ab "as" keyword function ka name define kary ga

import { circleFun, triangleFun, squareFun } from "./module/shape.js";
import { userName } from "./modules/user.js";

// ab jesy hamary pas cook() ky 2 function import horahy hen 1 account.js sy or 2nd user.js sy to agar ab hm cook function call karayen gy to error aye ga ky cook already declear hva wa he is kalesh sy bachny ky liye hm ny yahan cook function ko rename kiya "as" userCookFunction ab hamen jb bhi userCook wala function chahye ho ga to hm is name sy us ko get kar sakty hen

import { cook as userCookFunction } from "./modules/user.js";

import {
  accountNumber,
  accountType,
  withdraw,
  deposite,
  cook,
} from "./modules/account.js";

// * laga ky hm 1 file me sy jo jo kuch bhi export horaha he wo hm direct sb ko import kara sakty hen but yaha hamen us file ko 1 name dana pary ga jo hm ny as keyword sy diya he, or jo kuch bhi hm ny is me sy use karna he wo hm userInfo. kar ky use kar sakty hen and dehan rahy use sirf wohi chezen kar sakty hen jo export hvi hen aesa nhi he ky hm sochen ky * laga ky ab hm info.js sy wo chezen bhi use kar sakty hen jin ko export nhi kiya gaya

import * as userInfo from "./modules/info.js";

console.log(userName);

code();

withdraw();

deposite();

console.log(accountNumber, accountType);

cook();

userCookFunction();

userInfo.infoFunction();

userDefault();

circleFun();
