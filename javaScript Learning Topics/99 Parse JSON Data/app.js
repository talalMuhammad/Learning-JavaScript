let data = `{
    "name": "Ahmed",
    "age": 17,
    "isStudent": true,
    "passportNumber": null,
    "lang": ["HTML", "CSS", "JS", "React"],
    "address": {
      "country": "Pakistan",
      "city": "Karachi"
    }
  }`;

let dataObj = JSON.parse(data);

console.log(data);

console.log(dataObj);

console.log(dataObj["age"]);

console.log(dataObj["lang"]);
console.log(dataObj["lang"][2]);

console.log(dataObj["address"]["city"]);
