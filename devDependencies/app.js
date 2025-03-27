

// const http=require('node:http');

// node js me module and npm me package hote hai ok 

// const http=require('http');
// const server=http.createServer(function(req,res){
//  res.end("Chala raha hai bhai log...");
//  res.end("Aur kaise ho sb log , aur sb badiya hai...");
// })
//server.listen(3000);



const http = require('http');

const server = http.createServer(function (req, res) {
  res.write("Chala raha hai bhai log...\n");
  res.write("Aur kaise ho sb log, aur sb badiya hai...");
  res.end(); // Ending the response
});

server.listen(3000);


// sever port number 3000 pr chalu ho jao ye 3000 usually development port hota hai


// Nodemon is a developer tool used in Node.js development. Its main purpose is:

// It automatically restarts your Node.js server whenever you make changes in your code files.

// Without nodemon:

// You have to manually stop and re-run your server every time you make changes.

// With nodemon:

// As soon as you save your file, the server auto-restarts.

//npx nodemon index.js
// Whenever you modify index.js, nodemon detects the change and automatically restarts the server.

// This saves time and effort while developing.

