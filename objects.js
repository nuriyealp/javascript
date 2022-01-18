const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat
const shirtValue = testObj.shirt
const shoesValues = testObj.shoes



const examObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"

};

const entreeValue = examObj["an entree"]
const waterValue = examObj["my side"]
const milkValue = examObj["the drink"]



const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

const nameZero = myDog.name;
myDog.name = "Sarikanat";
myDog.legs = 2;
myDog.tails = 3;


myDog.says = "hawhaw";


delete myDog.says;

console.log(myDog);