class person {
  // class jo hm banaty hen us me 3 tra ky function call hosakty hen 1 constructor
  constructor(n, a) {
    console.log("Person Created");

    this.name = n;
    this.age = a;
  }

  //   2nd normal method jo hm banaty hen
  // ye automaticlly prototype me save hota he
  sayHi() {
    return `Hi...`;
  }

  //   3rd static method

  static hello() {
    return `Hello`;
  }
}

let person1 = new person("Ahmed", 12);
// let person2 = new person();

console.log(person1);
// console.log(person2);
console.log(person1.sayHi());

// console.log(person1.hello()); // Error: aye ga kyuky static method ya function ko object sy nhi class sy call karana parta he phir wo call hoga

console.log(person.hello());

class employ {
  constructor(n) {
    console.log("Constructor Employ Called");

    this.name = n;
  }
}

// matlb ab manager Class employ class ki bhi properties or methods ko inherit kar ly ga
class manager extends employ {}

let manager1 = new manager();

console.log(manager1); // isi liye jb hm ny manager1 banaya to employ constructor bhi call hva

let manager2 = new manager("Ahmed");

console.log(manager2); // ab halanky hm ny constructor banaya to employ wali class me he leken use hm us ko manager wali class me kar rahy hen

// ab swal ye ata he ky agar hm manager me bhi constructor call karayen to hamen manager object banaty hvy kiya jo hm arguments pass karen gy wo konsy constructor ko milyen gy employ waly ko ya manager waly ko

class emplo {
  constructor(n) {
    this.name = n;
  }
}

class manage extends emplo {
  constructor(d) {
    this.department = d;
  }
}

// let manager3 = new manage("Ahmed");

// console.log(manager3); yahan hamen error mily ga kyuky jb hm manager me bhi constructor banayen gy to hamen super constructor lazmi call karwana hoga

class empl {
  constructor(n) {
    this.name = n;
  }
}

class manag extends empl {
  constructor(nam, d) {
    /*
    ab hm ny yahan super bhi define kar diya or constructor me bata diya ky 1st parametor jo hoga wo super ko mily, super call karye ga empl wala constructor super ka argument empl constructor n ka parameter me reseave hva wahan sy name ko mila.

    or manager constructor me jo d hamen mila wo "web" he jo hm ny manager object banaty hvy diya tha us ko hm ny bol diya ky departent property ki value bna do is ko to ab hamen hamari experties ky accordingly output mily ga
    */

    super(nam);
    this.department = d;
  }
}

let manager4 = new manag("Ahmed", "Web");

console.log(manager4); // {name: 'Ahmed', department: 'Web'}

class emp {
  constructor(n) {
    this.name = n;
  }
  msg(m) {
    return `${m} Message`;
  }
}

class mana extends emp {
  constructor(nam, d) {
    super(nam);
    this.department = d;
  }

  msg(m) {
    return `${m} Message`;
  }

  manaInfo() {
    // agar hm emp class waly kisi method ko use karna chahty hen hamary is mana class ky method me to ham super dot kar ky access kar sakty hen ab hm agar sirf manaInfo ko call karye gy to emp class ka msg() bhi call hojaye ga

    console.log(super.msg("mana"));

    // agar hamary pas same name ka method mana me bhi ho to us ko hm this dot kar ky access kar sakty hen

    console.log(this.msg("mana defined"));

    return `${this.name} is manager of depart ${this.department}`;
  }
}

let manager5 = new mana("Ahmed", "Web");

// to ab hm ny emp class me 1 method define kiya or mana class me bhi 1 method define kiya or hm dono ko access kar parahy hen manager5 me

// or manaInfo() me hm ny this.name kar ky name ko access kar liya or hamen error nhi aya

console.log(manager5.manaInfo());

// public and privite properties

class userInfo {
  // jis bhi method ya property ko hm ny privite banana hota he us ko hm # sy start karty hen

  #userEmail = "";
  constructor(name, email) {
    this.userName = name;
    this.#userEmail = email;
  }

  #getEmail() {
    // privite property ya function ko hm sirf isi class ky andar access kar sakty hen

    return this.#userEmail;
  }

  getEmailFun() {
    return this.#getEmail();
  }
}

let user1 = new userInfo("Ahmed", "example@example.com");

console.log(user1);
console.log(user1.userName); // public property ko hm ny asani sy access kar liya

// console.log(user1.#userEmail); // Error mily ga kyuky hm privite property ko publically access nhi kar sakty

// console.log(user1.#getName());// Error mily ga kyuky hm privite function ko bhi publically access nhi kar sakty

console.log(user1.getEmailFun()); // yahan hm ny public avalaible function ki help sy hm ny privite function or property access ki he

// public getEmailFun() ny privite #getEmail() method ko call kiya phir privite #getEmail() method ny privite #userEmail ko access kiya or hamen userEmail bata di

//+++++++++++++ Mixin

// ab jesy hamary pass hiAndByeFun object me kuch methods he on ko bhi hm apny managerInformation wali class me add karna chahty hen to hm object.assign() method ka use karen gy

let hiAndByeFun = {
  hiFun() {
    return `Hello`;
  },
  byeFun() {
    return `Bye`;
  },
};

class userInformation {
  constructor(name) {
    this.userName = name;
  }
}

class managerInformation extends userInformation {
  // hamary pass yaha pe medium() method pehly sy bana he or jb hm Object.assign() ky method sy is me or methods add karen gy to is pe kuch farak nhi pary ga hm is ko bhi access kar payen gy
  medium() {
    return `medium Function`;
  }
}

let managerInformation1 = new managerInformation("Ahmed");

console.log(managerInformation1);

// Object.assign( ky pehly argument me hm target bataty hen ky hm ny kahan add karna he , 2nd argument me hm bataty hen ky hm ny kiya add karna he )

// to ye hm ny class ky prototype me rakha

Object.assign(managerInformation.prototype, hiAndByeFun);

// ab hm hiFun() and byeFun() ko managerInformation1 me access kar pa rahy hen
// or medium() ky function ko bhi access kar pa rahy hen
console.log(managerInformation1.hiFun());
console.log(managerInformation1.byeFun());

console.log(managerInformation1.medium());
