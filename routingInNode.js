
// Routing in Node.js (or in any backend framework) means:

// Handling different URLs (routes) and sending different responses based on the URL and HTTP method.

// For example:

// / → Home Page

// /about → About Page

// /contact → Contact Page

// You create multiple URLs (routes) and decide what to send when someone opens that URL.


const http=require('http');

const server=http.createServer(function(req,res){
  if(req.url==='/'){
    res.end("Akash kumar");
  }
  else if(req.url==='/profile'){
    res.end("Profile page");
  }
  else{
    res.end("404 Page Not Found...");
  }
})

server.listen(3000,()=>{
  console.log("Server listen at port 3000")
})




// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to Home Page!");
//   } else if (req.url === "/about") {
//     res.end("This is About Page.");
//   } else if (req.url === "/contact") {
//     res.end("Contact us at contact@xyz.com");
//   } else {
//     res.end("404 Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

