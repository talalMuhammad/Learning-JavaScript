document.cookie = "item =Milk; expires= Tue, 12 Mar 2024 04:45:00 UTC";
document.cookie = "loc=pk";

document.cookie = "item =Eggs; expires=Tue, 12 Mar 2024 04:46:00 UTC";

let x = document.cookie;

console.log(x);

// Delete karny ky liye date past ki daty hen

document.cookie = "item =Milk; expires= Fri, 1 Mar 2024 04:45:00 UTC";
