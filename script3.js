
// script1.js

// Exporting variables
const num = 10;
const str = "Hello";

// Exporting an object
const obj = { x: 5, y: 10 };

// Exporting an array
const arr = [1, 2, 3, 4, 5];

// Exporting a function
const greet = () => "Hello, Node.js!";

// Exporting a Map
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

// // Exporting everything as an object
// module.exports = { num, str, obj, arr, greet, map };




module.exports.num=num;
module.exports.str=str;
module.exports.obj=obj;
module.exports.arr=arr;
module.exports.greet=greet;
module.exports.map=map;
