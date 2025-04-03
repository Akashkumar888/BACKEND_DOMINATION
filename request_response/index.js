

const express=require('express');

const app=express();


app.get('/',function(req,res){
  res.send("Hello Hii...");
})

app.get("/about",function(req,res){
  res.send("Something About about page...");
})

app.get("/profile/:username",function(req,res){
  res.send(req.params.username+ ' page ');
})
app.listen(3000);


