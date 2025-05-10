
const express=require('express');
const app=express();

var data=[1,2,3,4,5];

app.get("/",function(req,res,next){
  res.send("Hey, How are You...");
})

app.get("/data",function(req,res,next){
  res.send(data);
})

app.post("/data/:number",function(req,res,next){
  // res.send("Checking...");
  // console.log(typeof req.params.number); iska type string hai isliye direct push nhi karenge
  var num=parseInt(req.params.number);
  data.push(num);
  res.send(data);
})

app.listen(3000);

