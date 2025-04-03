

const express=require('express');

const app=express();


app.get('/',function(req,res){
  console.log(req.params);
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.query);
  console.log(req.ip);
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
})


// app.get("/about",function(req,res){
//   res.send("Something About about page...");
// })

app.listen(3000);

