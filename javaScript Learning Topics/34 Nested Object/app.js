let user = {
  companyInfo: {
    userId: 123456,
    userName: "@muhammadAhmed",
    confidantionalInfo: {
      userLoginPassword: "********",
      userEmail: "muhammadahmed@email.com",
      twoSepVerification: true,
      emailVarification: true,
    },
  },
  personalInfo: {
    name: {
      firstName: "Muhammad",
      lastName: "Ahmed",
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    age: 18,
    address: {
      country: "Pakistan",
      state: "Sindh",
      city: "Karachi",
      area: "DHA 6",
    },
  },
};

console.log(user);
console.log(user.companyInfo.confidantionalInfo.userEmail);

console.log(user.personalInfo.name.fullName);
console.log(user.personalInfo.address.area);
