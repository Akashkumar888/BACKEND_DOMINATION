
const fs=require('fs');

fs.writeFileSync("ankit.txt","whatever");
console.log("File created...")

const data=fs.readFileSync("ankit.txt","utf-8");
console.log("read file");
console.log(data);



