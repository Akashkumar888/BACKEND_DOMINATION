


const express=require('express');

const app=express();


app.get('/',function(req,res){
  res.send("Hello Hii...");
})

app.get("/about",function(req,res){
  res.send("Something About about page...");
})

app.get("/author/:username/:age",function(req,res){
  res.send(`Somrthing about ${req.params.username} page who is of ${req.params.age}`);
})

app.listen(3000);


