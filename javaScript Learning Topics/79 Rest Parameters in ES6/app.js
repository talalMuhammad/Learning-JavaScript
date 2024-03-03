/* Rest parameters ka use isi liye hota he jb hamen pata na ko ky user kity arguments pass kary ga 

For Example
ye add function is tra hm banayen gy
*/

let sum = (...getNumbers) => {
  let result = 0;

  //   console.log(getNumbers); // Array mily gi hamen arguments ki jo user pass kary ga

  for (let i = 0; i < getNumbers.length; i++) {
    result += getNumbers[i];
  }

  return console.log(result);
};

sum(); // 0
sum(23, 464, 23, 8, 54, 2); // 574
sum(2, 54, 2); // 58
