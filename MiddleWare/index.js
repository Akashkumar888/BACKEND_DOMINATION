

const express=require("express");

// ek dabba bnta hai yaha express ka
const app=express();
// dabbe ki sari value khol lo

// app.get(Router,handler)
// handler hamesha ek function hota hai 
// get means fronted se kuch lao 
// get ek method hai 


// routes , request handler or middleware function hai 
app.get("/",function(req,res){
  res.send("Hello Priya How are You ?");
})


app.get("/about",function(req,res){
  res.send("Hello Akash kumar 74438");
})
// wild card mtlb all , all mtlb sare routes , universal routes 
// * mtlb all 
// ham ise last me hi banate hai ok 
app.get("*",function(req,res){
  res.send("If nothing works, I will try...");
})

// server.listen ki tarah yaha app.listen
app.listen(3000);


