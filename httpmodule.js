
// const http=require('node:http');
// node js me module and npm me package hote hai ok 
const http=require('http');



const server=http.createServer(function(req,res){
 res.end("Chala raha hai...");
})

server.listen(3000);
// sever port number 3000 pr chalu ho jao ye 3000 usually development port hota hai

