
// 0 false undefined NaN null "" document.all  ->falsy 
// if else if else 
if(12){
  console.log("hey");
}
else{
  console.log("not working");
}

const readline = require("readline-sync");

let a = Number(readline.question("Enter value of a: "));
let b = Number(readline.question("Enter value of b: "));
let c = Number(readline.question("Enter value of c: "));

var ternary = (a > b && a > c) ? a : (b > c ? b : c);
console.log(ternary);


