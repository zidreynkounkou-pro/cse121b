let person = {
  name: "Antonia Francesca",
  age: 30,
  profession: "Software Engineer",
  hobbies: ["reading", "playing guitar", "hiking"],
  address: {
    street: "123 Camino Real",
    city: "Santa Rosa",
    country: "Honduras"
  },
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

console.log(person.greet());







let medications = [
	['Lactated Ringers','levothyroxine','rosuvastatin','albuterol','esomeprazole'],
	['100L','2000ct','1500ct','1325ct','23145ct'],
	['13ab7','at342','gr5423','iuy6532','mnb78932'],
	['12/30/2029','03/18/2021','09/01/2020','01/01/2023','10/01/2021']
]

let aBestByDate = medications[3][3];
console.log(aBestByDate);



let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
console.log(esomeprazole[]);
let firstName = 'Kory';