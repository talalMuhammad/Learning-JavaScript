var book = {
  bookName: "Object Destructuring",
  bookPages: 45,
  bookPrice: 220,
};

var bookName = book.bookName;
var bookPages = book.bookPages;
var bookPrice = book.bookPrice;

console.log(bookName); // Object Destructuring
console.log(bookPages); // 45
console.log(bookPrice); // 220

var { bookTitle, bookPages, bookPrice } = book;

console.log(bookTitle); // undefined :, Obj Destructuring karty time hm ny is bat ka dehan rakhna he ky object ki properties ky name same deny hen isi liye yahan undefined mila hamen
console.log(bookPages); // 45
console.log(bookPrice); // 220

// agar hm chahty hen ky hm object ki property ko kisi dusry variable sy bhi access kar saken to hm is tra us property ko 1 or variable bhi dy sakty hen

// matlab ab hm book ka name bookName aur bookTitle dono sy Access kar sakty hen

// but jb hm object ko full access karen gy to wahan hamen property bookName hi dikhy gi

var { bookName: bookTitle, bookPages, bookPrice } = book;

console.log(bookTitle); // object Destructuring
console.log(bookName); // object Destructuring
console.log(bookPages); // 45
console.log(bookPrice); // 220
console.log(book); /* output 👇🏻
    {
        bookName: 'Object Destructuring',
        bookPages: 45, 
        bookPrice: 220
    }
*/
var book = {
  bookName: "Object Destructuring",
  bookPages: 45,
  bookPrice: 120,
  publisher: {
    bookEditionYear: 2024,
  },
};

var {
  bookName,
  bookPages,
  bookPrice,
  publisher: { BookPublisherName = "JS Collage", bookEditionYear },
} = book;

console.log(bookEditionYear); // 2024
console.log(BookPublisherName); // JS Collage
