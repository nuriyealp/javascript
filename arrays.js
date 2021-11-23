let salad = ["onion", " cucumber", "tomatoes"];

// console.log(salad);
// console.log(salad.length);
// console.log(salad[0]);

let soup = [["chicken"]];
// console.log(soup);

salad.push(2);
// console.log(salad);
salad.pop();
// console.log(salad);
salad.shift();
// console.log(salad);
salad.unshift("boil");
// console.log(salad);


// add 5 arrays into an array -> shopping list
const myList = [];
// ["apple", 3]
myList.push(["apple", 3], ["orange", 2], ["water", 1], ["flower", 0], ["tea", 5]);
console.log(myList);