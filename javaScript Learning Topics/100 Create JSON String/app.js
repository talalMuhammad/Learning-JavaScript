let data = {
  name: "Ahmed",
  age: 17,
  isStudent: true,
  passportNumber: null,
  lang: ["HTML", "CSS", "JS", "React"],
  address: {
    country: "Pakistan",
    city: "Karachi",
  },
};

let JsonData = JSON.stringify(data);

console.log(JsonData);
