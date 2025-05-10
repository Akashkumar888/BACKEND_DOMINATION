
const express=require('express');
const app=express();

app.get('/api/testing/development',function(req,res,next){
  res.send("Hey , How are You ?");
})

app.get('/api/testing/development/user',function(req,res,next){
  res.send("Hiii...");
})

app.listen(3000);

