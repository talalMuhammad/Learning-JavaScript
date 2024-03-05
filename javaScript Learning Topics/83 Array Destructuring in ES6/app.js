var book = ["EcmaScript 6", , 233, 550];

console.log(book[0]); // EcmaScript 6
console.log(book[1]); // undefined
console.log(book[2]); // 233
console.log(book[3]); // 550

var bookName = book[0];
var bookPublisher = book[1];
var bookPages = book[2];
var bookPrice = book[3];

console.log(bookName); // EcmaScript 6
console.log(bookPublisher); // undefined
console.log(bookPages); // 233
console.log(bookPrice);

var [bookName, bookPublisher = "JS Institute", bookPages, bookPrice] = book;

console.log(bookName); // EcmaScript 6
console.log(bookPublisher); // JS Institute
console.log(bookPages); // 233
console.log(bookPrice); // 550

var book = ["EcmaScript 6", 233, 550, ["JS Institute", 2024]];

var [bookName, bookPages, bookPrice, [bookPublisher, bookEditionYear]] = book;

console.log(bookPublisher); // JS Institute
console.log(bookEditionYear); // 2024

var book = () => {
  var bookDetails = ["JavaScript Tuturial Guide", 550];

  return bookDetails;
};

var learningJS = book();

console.log(learningJS); // ["JavaScript Tuturial Guide", 550]

var [bookName, bookPrice] = book();

console.log(bookName); // JavaScript Tuturial Guide
console.log(bookPrice); // 550
