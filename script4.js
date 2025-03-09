
// script2.js
const data = require('./script3');

console.log(data.num); // 10
console.log(data.str); // "Hello"
console.log(data.obj); // { x: 5, y: 10 }
console.log(data.arr); // [1, 2, 3, 4, 5]
console.log(data.greet()); // "Hello, Node.js!"
console.log(data.map.get("key1")); // "value1"

// Using variables from data
const a = data.obj.x;
const b = data.obj.y;
console.log(a + b); // 15



